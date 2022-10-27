import dotenv from 'dotenv';

export default function (req, res) {
  let nodemailer = require('nodemailer')
  console.log(req.body.message)
  dotenv.config();

  const transporter = nodemailer.createTransport({
        service : process.env.EMAIL_SERVICE,
        auth : {
            user : process.env.EMAIL_USERNAME,
            pass : process.env.EMAIL_PASSWORD
        }
    })

    const options = {
      from: process.env.EMAIL_USERNAME,
      to: 'nadyabethany@gmail.com',
      subject: `Message From ${req.body.name}`,
      text: `${req.body.message} | From ${req.body.name} ${req.body.email}`,
      html: `<div>${req.body.message} | From ${req.body.name} ${req.body.email}</div>`
    }

    transporter.sendMail(options, (error, info) =>{
        if(error) console.log(error)
        else console.log(info)
    })
  res.status(200)
}


