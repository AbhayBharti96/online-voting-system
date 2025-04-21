const express = require('express');
const Vote = require('../models/Vote');
const User = require('../models/User');
const router = express.Router();
router.post('/', async (req, res) => {
  try {
    const { userId, candidate } = req.body;
    const user = await User.findById(userId);
    if (user.hasVoted) return res.status(400).json({ error: 'User has already voted' });
    const vote = new Vote({ candidate, user: userId });
    await vote.save();
    user.hasVoted = true;
    await user.save();
    res.json({ message: 'Vote submitted' });
  } catch (err) {
    res.status(500).json({ error: 'Voting failed' });
  }
});
router.get('/results', async (req, res) => {
  try {
    const results = await Vote.aggregate([
      { $group: { _id: "$candidate", votes: { $sum: 1 } } }
    ]);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch results' });
  }
});
module.exports = router;