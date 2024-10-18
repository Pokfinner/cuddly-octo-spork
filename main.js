const app = require("express")()

app.get("/", (req, res) => {
    res.send("Server UP!")
})

app.listen(3005, () => console.log("Server running on port 3005"))