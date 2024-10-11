import express from "express"

const app = express();
const port = 3000;

// app.use(express.static("public"));

// app.get post/put/delete()

app.get('/', (req, res) =>{
    res.send("Hello world");
})

app.listen(port, ()=>{
    console.log(`Listening on port number ${port}`);
})