import express from "express";
import 'dotenv/config';
import getBitcoinInfo from "./routes/getBitcoinInfo"
import 'body-parser'
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 3000
// app.use(express.json());
// app.use(express.urlencoded({extended: false}));
const urlencodedParser = bodyParser.urlencoded({extended: false})

app.get("/", function (req, res) {
    res.send("Hello World");
});

app.use('/getBitcoinInfo', urlencodedParser,  getBitcoinInfo)

app.listen(PORT, () => {
    console.log(`Server is listening on : ${PORT}`)
});