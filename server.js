require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const multer = require('multer');
const upload = multer();
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

// Email sending
app.post('/email', upload.single('file'), async(req, res) => {
    console.log('sending')
    if (!req.body) {
      return res.status(500).send({ success: false });
    }

    const { first_name, last_name, email, phone, company, job_title, message, services } = req.body;
    const subject = 'The CASE Engineering - Contact Us';
    let fileAttachment = null;

    // Check if there's a file attachment
    if (req.file) {
        fileAttachment = [
            {
                filename: req.file.originalname,
                content: req.file.buffer
            }
        ]
    }

    const mailData = {
      from: {
        first_name,
        address: process.env.MAIL_FROM
      },
      to: 'kenyatta.craten@thecaseengineeringgroup.com',
      subject,
      text: message,
      html: `<table>
        <tr>
          <td>First name:</td>
          <td>${first_name || ''}</td>
        </tr>
        <tr>
          <td>Last name:</td>
          <td>${last_name || ''}</td>
        </tr>
        <tr>
          <td>E-mail:</td>
          <td>${email || ''}</td>
        </tr>
        <tr>
          <td>Phone:</td>
          <td>${phone || ''}</td>
        </tr>
        <tr>
          <td>Company:</td>
          <td>${company || ''}</td>
        </tr>
        <tr>
          <td>Job Title:</td>
          <td>${job_title || ''}</td>
        </tr>
        <tr>
          <td>Message: </td>
          <td>${message || ''}</td>
        </tr>
        <tr>
          <td>Services: </td>
          <td>${services || ''}</td>
        </tr>
      </table>`,
      attachments: fileAttachment
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