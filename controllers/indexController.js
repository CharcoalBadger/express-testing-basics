// controllers/indexController.js
const array = [];

exports.getIndex = (req, res) => {
  res.json({ name: "frodo" });
};

exports.getTest = (req, res) => {
  res.json({ array });
};

exports.postTest = (req, res) => {
  array.push(req.body.item);
  res.send("success!");
};
