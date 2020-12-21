var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv');
const app = express()

dotenv.config();
app.use(express.static('dist'))
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const projectData = {};

console.log(`Your port is ${process.env.PORT}`);

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
