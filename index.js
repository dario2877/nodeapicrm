import express from 'express';
import routes from './src/routes/crmRoutes'
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyParser setups
app.use(bodyParser.urlencoded ({ extended: true }));
app.use(bodyParser.json());


routes(app);

app.get('/' ,(req, res) =>
    res.send(`Node and express server reunning on port ${PORT}`)
);

app.listen(PORT, ()=>{
    console.log(`YOur server is running on port ${PORT}`);
});