// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

router.post('/subjectArea/', function (req, res) {

  // points to the name attribute name="incomesingle"
  const incomeSingle = req.session.data['incomesingle']

  // checking the value of the variable (incomeSingle) and directing to pages based on that value
  if (incomeSingle === 'gp-practice') {
    res.redirect('PAGE-1')
  } else if (incomeSingle === 'primary-care-network') {
    res.redirect('PAGE-2')
  } else if (incomeSingle === 'trust-other'){
    res.redirect('your-details')
  } else {
    res.redirect('index')
  }

})



module.exports = router;



