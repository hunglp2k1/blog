const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

router.use("/search", siteController.search);
// Nên để root ở dưới cùng
router.use("/", siteController.index);

module.exports = router;
