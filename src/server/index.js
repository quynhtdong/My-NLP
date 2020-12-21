var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

require('dotenv').config();
const projectData = {};

console.log(__dirname)
var textapi = {
  application_key: process.env.API_KEY
};
console.log(textapi.application_key)
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get("/get", function (req, res){
  res.send(projectData)
})

app.post("/", function (req, res){
projectData.agreement = req.body.agreement
projectData.subjectivity = req.body.subjectivity
projectData.confidence = req.body.confidence

return projectData;
})
