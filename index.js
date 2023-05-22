const express = require("express")
const PORT = 8888
const router = require('./app/router');
const app = express()

app.set("view engine", "ejs")
app.set("views","./app/views")

app.use(express.static("./public"));

app.use(express.urlencoded({extended: true}));

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:`+PORT);
});