const express = require('express');

const { getHome, getAbout, getContact, getRegister, postContact, getVideos, postRegister } = require('../models/routerController');

const router = express.Router()

router.get('/', getHome)
router.get('/about', getAbout)
router.get('/contact', getContact)
router.get('/register', getRegister)
router.post('/register', postRegister)
router.get('/videos', getVideos)
router.post('/contact', postContact)

module.exports = router;

