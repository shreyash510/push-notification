const express = require('express');
const port = process.env.PORT || 8000;const app = express();
app.use(express.json());
const router = require('./route')
app.use(router)

app.get("/notification", (req, res) => {
    res.send("contact")
})

app.listen(port, () => {
    console.log(`listening...${port}`);
})