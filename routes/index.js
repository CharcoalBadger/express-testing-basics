// routes/index.js
const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indexController");

router.get("/", indexController.getIndex);
router.get("/test", indexController.getTest);
router.post("/test", indexController.postTest);

module.exports = router;
