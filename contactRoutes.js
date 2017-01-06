(function () {
  'use strict';

  var nodemailer = require("nodemailer");
  var smtpTransport = require('nodemailer-smtp-transport');

  var express = require('express');
  var contactRoutes = express.Router();

  function sendMail() {

    var transporter = nodemailer.createTransport(smtpTransport({
      host: '41.185.13.224',
      port: 587,
      secure: true,
      auth: {
        user: 'developer@swyser.co.za',
        pass: '##Swyser34'
      }
    }));

    var message = {
      to: 'swyser@live.co.za',
      subject: 'Contact',
      text: 'Hello to myself!',
      html: '<p><b>Hello</b> to myself <img src="cid:note@example.com"/></p>' +
      '<p>Here\'s a nyan cat for you as an embedded attachment:<br/><img src="cid:nyan@example.com"/></p>',
      watchHtml: '<b>Hello</b> to myself',
    };

    console.log('Sending Mail');
    transporter.sendMail(message, function (error, info) {
      if (error) {
        console.log('Error occurred');
        console.log(error.message);
        return;
      }
      console.log('Message sent successfully!');
      console.log('Server responded with "%s"', info.response);
    });




  }


  contactRoutes.get('/contactMe', function (req, res) {


    sendMail();



    res.status(200).json({ blogs: [] });




  });

  module.exports = {
    routes: function () {
      return contactRoutes;
    }
  };
})();
