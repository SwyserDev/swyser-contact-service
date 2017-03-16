(function () {
  'use strict';

  const express = require('express');
  const contactRoutes = express.Router();
  const nodemailer = require("nodemailer");
  const moment = require('moment');
  const Guid = require('guid');
  const hbs = require('nodemailer-express-handlebars');

  let mailer = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'swyserdev@gmail.com',
      pass: '##WilleWagter34'
    }
  });

  mailer.use('compile', hbs({
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
      template: 'contact',
      context: {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
      },
      headers: {
        priority: 'normal',
        messageId: messageGuid,
        date: dateNow
      }
    };

    mailer.sendMail(message, (error, info) => {
      if (error) {
        res.status(500).json({ sent: false, err: error });
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