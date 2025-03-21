const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
	type:String,
	required:[true, 'name is required']
	},
	lastname: { // New field added
        type: String,
        required: false, // Optional field
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    phone: { // New field added
        type: String,
        required: false, // Optional field
    },
    address: { // New field added
        type: String,
        required: false, // Optional field
    },
	password: {
	type:String,
	required:[true, 'password is required']
	},
	isAdmin: {
		type:Boolean,
		default:false
	},
	isDoctor: {
		type:Boolean,
		default:false
	},
	notification: {
		type:Array,
		default:[]
	},
	seenoti: {
		type:Array,
		default:[]
	},
});

const userModel = mongoose.model('users', userSchema);

module.exports = userModel;