import express, { json } from 'express';
import { aplServer } from './gql';
import { expressMiddleware } from '@apollo/server/express4';
import mongoose from 'mongoose';

const app = express();

app.use(json());
const port = 4010;

app.get('/knockKnock', (req, res) => {
    res.json({ 'msg': 'who is this?' });
});

(async() => {

    try {

        await aplServer.start();
        app.use('/graphql', expressMiddleware(aplServer));
    } catch (err) {

        console.log('Error while setting up graphql server', err);
        return;
    }

    try {

        await mongoose.connect('mongodb://localhost:27017/graphql-practice');
    } catch (err) {

        console.log('DB connection error; Not starting the backend service.', err);
        return;
    }
    
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
})()




