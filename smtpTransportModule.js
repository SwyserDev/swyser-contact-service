var nodemailer = require("nodemailer");

module.exports = {
  smtpTransport: function () {
    return null;
    // var smtpConfig = {
    //   host: '41.185.13.224',
    //   port: 587,
    //   secure: true,
    //   auth: {
    //     user: 'developer@swyser.co.za',
    //     pass: '##Swyser34'
    //   }


// return nodemailer.createTransport("SMTP", smtpConfig);
  }
}