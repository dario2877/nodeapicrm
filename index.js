import express from 'express';

const app = express();
const PORT = 4000;

app.get('/' ,(req, res) =>
    res.send(`Node and express server reunning on port ${PORT}`)
);

app.listen(PORT, ()=>{
    console.log(`YOur server is running on port ${PORT}`);
});