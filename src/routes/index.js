var express = require('express')
var router = express.Router()
var config = require('../utils/config.json')
var sections = config.sections

router.use(function (req, res, next) {
  next()
})

router.get('/', function(req, res, next) {
  const home = sections.home
  res.render(home.template, home.metadata)
})

router.get('/index', function(req, res, next) {
  const home = sections.home
  res.render(home.template, home.metadata)
})

router.get('/contact', function (req, res, next) {
  const contact = sections.contact
  res.render(contact.template, contact.metadata)
})

router.get('/contact.html', function (req, res, next) {
  const contact = sections.contact
  res.render(contact.template, contact.metadata)
})

module.exports = router
