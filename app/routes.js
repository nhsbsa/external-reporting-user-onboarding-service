// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

router.post('/subjectArea/', function (req, res) {

  // points to the name attribute name="incomesingle"
  const incomeSingle = req.session.data['incomesingle']

  // checking the value of the variable (incomeSingle) and directing to pages based on that value
  if (incomeSingle === 'gp-practice') {
    res.redirect('eua-eden')
  } else if (incomeSingle === 'primary-care-network') {
    res.redirect('eua-eops')
  } else if (incomeSingle === 'trust-other'){
    res.redirect('eua-epact2')
  } else {
    res.redirect('index')
  }

})

router.post('/accessTypeEden/', function (req, res) {

  // points to the name attribute name="incomesingle"
  const incomeSingle = req.session.data['incomesingle']

  // checking the value of the variable (incomeSingle) and directing to pages based on that value
  if (incomeSingle === 'int-care') {
    res.redirect('ics-details-eden')
  } else if (incomeSingle === 'local-health') {
    res.redirect('lhb-details-eden')
  } else if (incomeSingle === 'prac-man'){
    res.redirect('pm-details-eden')
  } else if (incomeSingle === 'provider'){
    res.redirect('provider-details-eden')
  } else {
    res.redirect('access-type-eden')
  }

})

router.post('/epactOrgtype/', function (req, res) {

  // points to the name attribute name="incomesingle"
  const incomeSingle = req.session.data['incomesingle']

  // checking the value of the variable (incomeSingle) and directing to pages based on that value
  if (incomeSingle === 'ahsn') {
    res.redirect('epact2-organisation-details')
  } else if (incomeSingle === 'ccg') {
    res.redirect('epact2-organisation-details')
  } else if (incomeSingle === 'csu'){
    res.redirect('epact2-organisation-details')
  } else if (incomeSingle === 'gpp'){
    res.redirect('epact2-organisation-details')
  } else if (incomeSingle === 'ht') {
    res.redirect('epact2-organisation-details')
  } else if (incomeSingle === 'ishp'){
    res.redirect('epact2-organisation-details')
  } else if (incomeSingle === 'la'){
    res.redirect('epact2-organisation-details')
  } else if (incomeSingle === 'nlo') {
    res.redirect('epact2-organisation-details')
  } else if (incomeSingle === 'pcm'){
    res.redirect('epact2-organisation-details')
  } else if (incomeSingle === 'pcn'){
    res.redirect('epact2-organisation-details')
  } else if (incomeSingle === 'stp'){
    res.redirect('epact2-organisation-details')
  
  } else {
    res.redirect('organisation-type-epact2')
  }

})

module.exports = router;



