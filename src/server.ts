import * as express from 'express';
import { NodeMailer } from './NodeMailer';


const app = express();
const PORT = 7000;


app.listen(PORT, ()=>{
    console.log('Server is running on port number: ', PORT)
});

app.get('/', (req,res) => {
    res.send('<b>My</b> Email has been sent');
    NodeMailer.sendEmail({to:['amitkumar.sinha.910@gmail.com'], subject:'Office 365 Test', html:`<h1>Hello Office 365</h1>`}).then(()=>{
        console.log('Email Sent')
    }).catch(err=>{
        console.log(err)
       
    })
});


