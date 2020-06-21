const mongoose = require('mongoose');

//Create the model schema based on the document structure
const ClientsSchema = mongoose.Schema({
    Title: String,
    FirstNames: String,
    Surname:String,
    MobilePhone:String,
    HomePhone:String,
    Email:String,
    "AddressHome.AddressLine1":String,
    "AddressHome.AddressLine2":String,
    "AddressHome.Town":String,
    "AddressHome.countyORcity":String,
    "AddressHome.EIRCODE":String,
    "AddPerDets.DOB":String,
    "AddPerDets.GuardianIfUnder18":String,
    "AddPerDets.PermissionForMessage":String,
    "AddPerDets.DateCreated":String,
    "AddPerDets.MaritalStatus":String,
    "AddPerDets.ReferredBy":String
});

module.exports = mongoose.model('Client', ClientsSchema);
