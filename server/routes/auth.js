const express = require('express');
const { 
  register, 
  login, 
  logout,
  getMe,
  forgotPassword,
  resetPassword,
  updateDetails,
  updatePassword
  
} = require('../controllers/auth');

  // confirmEmail,

const router = express.Router();

const { protect } = require('../middleware/auth');

router.post('/register', register);
router.post('/login',login);
router.get('/me', protect, getMe);
router.post('/forgotPassword', forgotPassword);
router.put('/resetpassword/:resettoken', resetPassword);
router.put('/updatedetails', protect, updateDetails);
router.put('/updatepassword', protect, updatePassword);
router.get('/logout', logout);
// router.get('/confirmemail', confirmEmail);
// router.put('/updatepassword', protect, updatePassword);

module.exports = router;
