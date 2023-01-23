const express = require('express');
const PORT = 4040;

const app = express();

// Middleware for reading JSON from API calls
app.use(express.json())

app.get('/', (req,res) => {
    res.json({message: "Hello"})
})

app.listen(process.env.PORT || PORT, () => {
    console.log("Listening on ", process.env.PORT || PORT)
})