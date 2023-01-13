const express = require('express');
const {json} = require('express')
const fs = require('fs')
const app = express();
var _dat = {};
app.use(express.json());
app.use('*/public',express.static(__dirname+'/public'));

app.set('view engine', 'pug');

app.post('/connect',(req,res)=>{
    for (const [key, value] of Object.entries(req.body)) {
      console.log(`${key}: ${value}`);
      
      _dat.body +=  `<p>${key}: ${value}</p>`
    
    }
    console.log(_dat.body)
    if( req.body.Name){
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey('');
    const msg = {
      to: 'email@email.net',
      from: 'email@email.net', 
      subject: 'Contact form',
      html: '<div>'+_dat.body+'</div>'
    };
    sgMail
      .send(msg)
      .then((d) => {
       console.log(d)
      }, error => {
        console.error(error);
    
        if (error.response) {
          console.error(error.response.body)
        }
      });
    }
      res.end()
})

app.get('/',(req,res)=>{
    _dat.title = 'VSDG'
    res.status(200).render(__dirname + '/public/index.pug',{_dat})
})
app.get('*',(req,res)=>{

    res.status(400).render(__dirname + '/public/index.pug',{_dat})
});

app.listen(3000,()=>{console.log('ohana')});