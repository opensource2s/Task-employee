const express = require('express');
const router = express.Router()
const model = require('../models/model');

// To get all the employee details 
router.get('/', async(req, res) => {
    try{
        const emp_Details = await model.find()
        res.json(emp_Details)  
    }catch(err){
        res.send('Error ' +err)
    }
})

// To get employee details by Id
router.get('/:id', async(req, res) => {
    try{
        const emp_Details_byId = await model.findById(req.params.id)
        res.json(emp_Details_byId)  
    }catch(err){
        res.send('Error ' +err)
    }
})

// To save new employee details
router.post('/', async(req, res) => {
    const employee = new employee({
        empId: req.body.empId,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        designation: req.body.designation,
        presentAddress: req.body.presentAddress,
        permanentAddress: req.body.permanentAddress,
        officeAddress: req.body.officeAddress
    })

    try{
        const newEmployee = await employee.save()
        res.json(newEmployee);
    }catch(err){
        res.send('Error')
    }
})

// To update the employee profile
router.patch('/:id', async(req, res) => {
    try{
        const emp_Update = await model.findById(req.params.id)
        
        emp_Update.firstName = req.body.firstName,
        emp_Update.lastName = req.body.lastName,
        emp_Update.dateOfBirth = req.body.dateOfBirth,
        emp_Update.designation = req.body.designation,

        emp_Update.presentAddress.addressLine1 = req.body.presentAddress.addressLine1,
        emp_Update.presentAddress.addressLine2 = req.body.presentAddress.addressLine2,
        emp_Update.presentAddress.city = req.body.presentAddress.city,
        emp_Update.presentAddress.pincode = req.body.presentAddress.pincode,
        emp_Update.presentAddress.country = req.body.presentAddress.country,

        emp_Update.permanentAddress.addressLine1 = req.body.permanentAddress.addressLine1,
        emp_Update.permanentAddress.addressLine2 = req.body.permanentAddress.addressLine2,
        emp_Update.permanentAddress.city = req.body.permanentAddress.city,
        emp_Update.permanentAddress.pincode = req.body.permanentAddress.pincode,
        emp_Update.permanentAddress.country = req.body.permanentAddress.country,

        emp_Update.officeAddress.addressLine1 = req.body.officeAddress.addressLine1,
        emp_Update.officeAddress.addressLine2 = req.body.officeAddress.addressLine2,
        emp_Update.officeAddress.city = req.body.officeAddress.city,
        emp_Update.officeAddress.pincode = req.body.officeAddress.pincode,
        emp_Update.officeAddress.country = req.body.officeAddress.country
        
        
        const emp_updated = await emp_Update.save()
        
        res.json(emp_updated)

    }catch(err){
        res.send('Error')
    }
})

// To delete employee by  employee Id
router.delete('/:id', async(req, res) => {
    try{
        const Employ = await model.findById(req.params.id)
        const deleteEmployee = await Employ.remove() 
        res.send("successfully deleted");  
    }catch(err){
        res.send('Error ' +err)
    }
})

module.exports = router;