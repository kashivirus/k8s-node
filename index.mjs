import express from "express";
import os from "os";
import fetch from "node-fetch"

const app = express()
const port = 3010

app.get("/", (req, res) => {
    const helloMess = `Hello from the ${os.hostname()}`
    console.log(helloMess)
    res.json({ helloMess })
})

app.get("/nginx", async (req, res) => {
    const curl = "http://nginx"
    const response = await fetch(url);
    const body = await response.text();
    res.send(body)

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})