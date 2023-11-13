import express from "express";
const PORT: number = 8888;
import router from './app/router';
const app = express()

app.set("view engine", "ejs")
app.set("views","./views")

app.use(express.static("./public"));

app.use(express.urlencoded({extended: true}));

app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:`+PORT);
});