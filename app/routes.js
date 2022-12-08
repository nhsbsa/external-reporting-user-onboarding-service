// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

module.exports = router;

router.get(/subjectArea/, function (req, res) {
    if (req.query.incomesingle === "eden") {
      res.redirect('page-example'); 
    } else if (req.query.incomesingle === "eops") {
      res.redirect('page-example');
    } else if (req.query.incomesingle === "epact") {
        res.redirect('page-example');
      return;
    }
  });