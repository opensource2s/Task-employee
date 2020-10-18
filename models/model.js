const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    empId: {
        type: Number,
        required: true,
        unique: true 
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        //required: true
    },
    dateOfBirth: {
        type: Date,
        //required: true
    },
    designation: {
        type: String,
        required: true
    },
    presentAddress: {
        type: String,
        addressLine1: {
            type: Number,
            required: true  
        },
        addressline2: {
            type: Number
        },
        city: {
            type: String,
            required: true
        },
        pin: {
            type: Number,    
        },
        country: {
            type: String
        }
    },
    permanentAddress: {
        type: String,
        addressLine1: {
            type: Number,
            required: true
        },
        addressline2: {
            type: Number
        },
        city: {
            type: String,
            required: true
        },
        pin: {
            type: Number,    
        },
        country: {
            type: String
        }
    },
    officeAddress: {
        type: String,
        addressLine1: {
            type: Number,
            required: true
        },
        addressline2: {
            type: Number
        },
        city: {
            type: String,
            required: true
        },
        pin: {
            type: Number,    
        },
        country: {
            type: String
        }
    } 
})

module.exports = mongoose.model('model', employeeSchema);