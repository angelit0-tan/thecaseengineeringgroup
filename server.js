require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const transporter = nodemailer.createTransport({
    port: process.env.MAIL_PORT,
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASSWORD,
    },
    secure: false,
});

console.log(process.env.MAIL_PORT)
console.log(process.env.MAIL_HOST)
console.log(process.env.MAIL_USER)
console.log(process.env.MAIL_PASSWORD)

// Email sending
app.post('/email', (req, res) => {
    console.log('sending')
    if (!req.body) {
      return res.status(500).send({ success: false });
    }
  
    const { firma, anrede, name, email, body } = req.body;
    console.log(firma)
    console.log(anrede)
    console.log(name)
    console.log(email)
    console.log(body)
    let subject = 'Steinbach Report - Kontakt';

    const mailData = {
      from: {
        name,
        address: email
      },
      to: 'angelito.tan23@gmail.com',
    //   cc: [
    //     'angelito.tan23@gmail.com',
    //   ],
      subject,
      text: body,
      html: `<table>
        <tr>
          <td>Firma:</td>
          <td>${firma}</td>
        </tr>
        <tr>
          <td>Anrede:</td>
          <td>${anrede}</td>
        </tr>
        <tr>
          <td>Name:</td>
          <td>${name}</td>
        </tr>
        <tr>
          <td>E-mail:</td>
          <td>${email}</td>
        </tr>
        <tr>
          <td>Mitteilung:</td>
          <td>${body}</td>
        </tr>
      </table>`,
    };
  
    try {
  
      transporter.sendMail(mailData);
        console.log('send success');
      return res.status(200).send({ success: true });
  
    } catch (e) {
        console.log('send failed');
        console.log(e)
      return res.status(500).send({ success: false });
      
    }
    
  });

app.listen(process.env.SERVER_PORT, () =>
    console.log(`Express Server listening on port ${process.env.SERVER_PORT}!`),
);