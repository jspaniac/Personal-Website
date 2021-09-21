// Required Modules
const express = require("express");
const path = require("path");

// App Variables
const app = express();
var port = process.env.PORT || "8000";

// Routes Definitions
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, "pages/index.html"));
})

app.get('/accomplishments', (req, res) => {
	res.sendFile(path.join(__dirname, "pages/accomplishments.html"));
})

app.get('/lighting', (req, res) => {
	res.sendFile(path.join(__dirname, "pages/lighting.html"));
})

// Server Activation
app.listen(port, () => {
	console.log(`Listening to requests on ${port}`);
})

// App Configuration
app.use(express.static(path.join(__dirname, "public")));


