const { createTransport } = require('nodemailer');

const mailer = (mail) => {
    const transport = createTransport({
      service: 'gmail',
      port: process.env.PORT, 
      secure: false,
      auth: {
        user: 'rafay10.dev@gmail.com',
        pass: 'zxezacrzwhzggyao'
      },
    });
    const mailOptions = {
      from: process.env.MAIL,
      to: mail,
      subject: 'Bayzuban NewsLetter',
      text: 'Thank you for subscribing to us, you will regularly hear from us now.',
    };
    transport.sendMail(mailOptions, (err, info) => {
      if (err) console.log(err)
      else console.log(info)
    });
  };
  

  module.exports = { mailer }