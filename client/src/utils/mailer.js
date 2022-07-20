import { createTransport } from 'nodemailer';

/*eslint-disable*/

export const mailer = (mail) => {
  const transport = createTransport({
    service: 'gmail',
    port: process.env.PORT, 
    secure: false,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
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


