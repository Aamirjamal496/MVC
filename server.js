const express = require("express")
const app = express();
const router = require('./router/auth-router')

app.use("/", router)
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`);
})
