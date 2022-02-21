const express = require('express');

const { getHome, getAbout, getContact, postContact, getVideos } = require('../models/routerController');

const router = express.Router()

router.get('/', getHome)
router.get('/about', getAbout)
router.get('/contact', getContact)
router.get('/videos', getVideos)
router.post('/contact', postContact)

module.exports = router;

