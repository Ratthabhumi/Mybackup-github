const express = require('express');
const { loginController, 
		registerController, 
		authController, 
		recruitController, 
		notifyController, 
		delnotiController,
		getAllDocController,
		appointmentController,
		availabilityController,
		userAppointmentController,
		updateProfileController,
		changePasswordController,
		forgotPasswordController,
		resetPasswordController,
		deleteAppointmentController,
		getDoctorAppointmentsByDay,
	} = require('../controllers/userCtrl')
const authMiddleware = require("../middlewares/authMiddleware");
const { get } = require('mongoose');

const router = express.Router();

//routes
//LOGIN || POST
router.post('/login', loginController);

//REGISTER || POST
router.post('/register', registerController);

// Auth || POST
router.post('/getUserData', authMiddleware, authController);

// Recruit || POST
router.post('/recruit', authMiddleware, recruitController);

// Notification || POST
router.post('/notification', authMiddleware, notifyController);

// Delete Notification || POST
router.post('/delnoti', authMiddleware, delnotiController);

//Get all doctors || GET
router.get('/getAllDoctors', authMiddleware, getAllDocController);

//Book appointment || POST
router.post('/appointment', authMiddleware, appointmentController);

//Availability || POST
router.post('/availability', authMiddleware, availabilityController);

//Appointment List || GET
router.get('/userAppointment', authMiddleware, userAppointmentController);

// Update Profile || POST
router.post('/updateProfile', authMiddleware, updateProfileController);

// Change Password || POST
router.post('/changePassword', authMiddleware, changePasswordController);

// Forgot Password || POST
router.post('/forgotPassword', forgotPasswordController);

// Reset Password || POST
router.post('/resetPassword', resetPasswordController);

// Delete Appointment || POST
router.post('/deleteAppointment', authMiddleware, deleteAppointmentController);

// Get Doctor Appointments By Day || POST
router.post('/getDoctorAppointmentsByDay', authMiddleware, getDoctorAppointmentsByDay);

module.exports = router;