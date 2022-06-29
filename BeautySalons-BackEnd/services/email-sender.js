const nodemailer = require("nodemailer");

const user = 'razoidf@gmail.com'

let transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
        user: user,
        pass: 'razo123321'
    }
});

function sendMailreset(to, subject, message) {
    let mailOptions = {
        from: user,
        to,
        subject,
        text: message
    };
    transporter.sendMail(mailOptions,(error,info)=>{
        if (error) {
            logger.error(error);
        } else {
            logger.debug('Email sent: ' + info.response);
        }
    });
}