const db = require('./../models');

module.exports = {
  getUser: async (req, res) => {
    try {
      const user = await db.User.findById(req.user._id)
      console.log(user);
      res.json({ user });
    } catch(e) {
      res.json(e);
    }
  }
}