const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const smtpTransport = require('nodemailer-smtp-transport');

const OAuth2 = google.auth.OAuth2;

const user = 'razoidf@gmail.com'

let transporter = nodemailer.createTransport(smtpTransport({
    service:'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: user,
        pass: 'uxreqkcrvanxlsod'
    }
}));

exports.sendMails = (to, subject, message) => {
    let mailOptions = {
        from: user,
        to,
        subject,
        text: message
    };
    transporter.sendMail(mailOptions,(err,info)=>{
        if(err)
        console.log(err)
      else
        console.log(info);
    });
}