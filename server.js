const express = require("express");
const app = express();
app.use(express.json());

app.use(express.static( __dirname + '/public/dist/public' ));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app);


app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

app.listen(5000, () => console.log("listening on port 5000"));