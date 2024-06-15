import express from 'express';
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
// this means we are using json in our app
app.use('/users', usersRoutes); 

app.get('/', (req,res) =>{
    //console.log('[TEST]!');
    
    res.send("Hello from homepage"); 
}); 
// console.log is een in terminal, after get request
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));

