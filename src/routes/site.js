const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

router.get('/search', siteController.search);
// Nên để root ở dưới cùng
router.get('/', siteController.index);

module.exports = router;
