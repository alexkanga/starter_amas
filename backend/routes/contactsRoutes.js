const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/home', function (req, res) {
    res.status(200).sendFile("./frontend/index.html", {root: path.join(__dirname, "../../")})
  })
  
  router.get('/', function (req, res) {
    res.status(300).redirect("/home")
  });
  
module.exports = router;