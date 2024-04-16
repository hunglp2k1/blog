const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/:slug', newsController.show);
// Nên để root ở dưới cùng
router.get('/', newsController.index);

module.exports = router;
