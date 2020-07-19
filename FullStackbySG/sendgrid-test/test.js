// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey("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");
const msg = {
  to: "longingfru@gmail.com",
  from: "dips.2098@gmail.com",
  subject: "Sending with Twilio SendGrid is Fun",
  text: "and easy to do anywhere, even with Node.js",
  html: "<strong>and easy to do anywhere, even with Node.js</strong>",
};
sgMail.send(msg);
