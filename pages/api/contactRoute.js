import dotenv from 'dotenv';

export default async function handler(req, res) {
  let nodemailer = require('nodemailer')
  dotenv.config();

  const transporter = nodemailer.createTransport({
      host: 'smtp.zoho.com',
      port: 465,
      secure: true, //ssl
        auth : {
            user : process.env.EMAIL_USERNAME,
            pass : process.env.EMAIL_PASSWORD
        }
    })
    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
          if (error) {
              console.log(error);
              reject(error);
          } else {
              console.log("Server is ready to take our messages");
              resolve(success);
          }
      });
  });
    const options = {
      from: `${process.env.EMAIL_USERNAME}`,
      to: 'nadyabethany@gmail.com',
      subject: `Message From ${req.body.name}`,
      text: `${req.body.message} | From ${req.body.name} ${req.body.email}`,
      html: `<div>${req.body.message} | From ${req.body.name} ${req.body.email}</div>`
    }
    
    await new Promise((resolve,reject) =>{
    transporter.sendMail(options, function (error, info){
        if(error) {
          console.log(error)
          reject(error)
        }
        else {
          console.log(info)
          resolve(info)
        }
    })
    })
    res.status(200).json({ message: 'ISubmitted' })
}


