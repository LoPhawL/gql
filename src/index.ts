import express, { json } from 'express';
import { aplServer } from './gql';
import { expressMiddleware } from '@apollo/server/express4';

const app = express();

app.use(json());
const port = 4010;

app.get('/knockKnock', (req, res) => {
    res.json({ 'msg': 'who is this?' });
});

(async() => {

    await aplServer.start();
    app.use('/graphql', expressMiddleware(aplServer));
    
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
})()




