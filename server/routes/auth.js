var express = require('express');
var router = express.Router();

router.post('/login', function (req, res) {
  console.log(req.session)
  if (req.body.email === 'demo@gmail.com' && req.body.password === 'demo') {
    req.session.authUser = { email: 'demo@gmail.com' }
    return res.json({ email: 'demo@gmail.com' })
  }
  res.status(401).json({ error: 'Bad credentials' })
})

router.post('/register', function (req, res) {
  return res.json({ email: 'demo@gmail.com' })
})

router.post('/logout', function (req, res) {
  delete req.session.authUser
  res.json({ ok: true })
})

module.exports = router;
