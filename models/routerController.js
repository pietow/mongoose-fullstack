// import emailSender
const emailSender = require('./emailSender');

const getHome = (req, res) => {
    res.render('index')
}

const getAbout = (req, res) => {
    res.render('about')
}

const getContact = (req, res) => {
    res.render('contact')
}

const getVideos = (req, res) => {
    res.render('videos')
}

const postContact = (req, res) => {
    console.log(req.body);
    emailSender.sendEmail(req.body).then((info) => {
        console.log(info);
        res.json({result: 'done'})
    }).catch(error => {
        console.log(error);
        res.json({result: 'error'})
    })
}
module.exports = {
    getHome,
    getAbout,
    getContact,
    postContact,
    getVideos
}