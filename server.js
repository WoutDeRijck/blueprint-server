const express = require("express")
const bodyParser = require('body-parser')

// Load mock user data
const mock_user = require("./mock_user.json")

// Create application
const app = express()

// x-www-form-urlencoded parser to parse parameters from body of post request
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Return mock userdata
app.post('/user', urlencodedParser, (req, res) => {
    let data = req.body;
    console.log('Data Received: %j', data);
    res.json(mock_user);
})

// Start server
app.listen(8000)
console.log("Server started listening on port 8000!")