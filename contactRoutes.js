(function () {
  'use strict';

  const nodemailer = require("nodemailer");
  const smtpTransport = require('nodemailer-smtp-transport');

  const express = require('express');
  const contactRoutes = express.Router();
  const moment = require('moment');
  const Guid = require('guid');
  const hbs = require('nodemailer-express-handlebars');

  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'swyserdev@gmail.com',
      pass: '##WilleWagter34'
    }
  });

  nodemailer.use('compile', hbs({
    viewPath: 'templates',
    extName: '.hbs'

  }));

  contactRoutes.post('/contactme', function (req, res) {
    var messageGuid = Guid.create();
    var dateNow = moment();

    var message = {
      from: 'Swyser Mailer ✔ <swyserdev@gmail.com>',
      to: 'Swyser <swyser@live.co.za>',
      subject: 'Contact from Website',
      template: 'contact ',
      context: '',
      headers: {
        priority: 'normal',
        messageId: messageGuid,
        date: dateNow
      }
    };


    transporter.sendMail(message, (error, info) => {
      if (error) {
        res.status(500).json({ err: error });
      }
      res.status(200).json({ sent: true });
    });
  });

  module.exports = {
    routes: function () {
      return contactRoutes;
    }
  };
})();