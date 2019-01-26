const mongoose = require('mongoose')
let mongooseurl = 'mongodb://amini.daniel@gmail.com:DUm-8hu-rqQ-JV6@ds249824.mlab.com:49824/heroku_41cjg6ml'
mongoose.connect(mongooseurl, { useNewUrlParser: true })
// mongoose.connect('mongodb://localhost/tech-connect-test', { useNewUrlParser: true })
const Schema = mongoose.Schema

const CompanySchema = new Schema({
  company: {
    name:String,
    address1: String,
    address2:String,
    city: String,
    state:String,
    zip:String,
    country:String,
  },
  computers: [{
    computerName: String,
    IPAddress: String,
    completionStatus: String
  }],
  servers: [{
    serverName: String,
    IPAddress: String,
    completionStatus: String
  }], 
  users: [{
    firstName:String,
    lastName:String,
    userName: String,
    emailAddress: String,
    completionStatus: String
  }],
  backup: {
    backupType: String,
    frequency: String,
    completionStatus: String
  },
  fileShares: [{
    filePath: String,
    sharePath: String,
    completionStatus: String
  }],
  firewalls: [{
    name: String,
    firewallType: String,
    LANIPAddress: String,
    WANIPAddress: String,
    completionStatus: String
  }],
  internetProviders: [{
    name: String,
    uploadSpeed: String,
    downloadSpeed: String,
    IPAddress: String,
    completionStatus: String
  }],
  localAreaNetwork: {
    subnet: String,
    liveNodes: Number,
    completionStatus: String
  }
})

const Company = mongoose.model("Company", CompanySchema);

module.exports = Company