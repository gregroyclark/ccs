// using Twilio SendGrid's v3 Node.js Library
// https://github.om/sendgrid/sendgrid-node.js

import logo from '../../public/logo.png';
const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

async function sendEmail(req, res) {
  try {
    // console.log('REQ.BODY, req.body');
    await sendgrid.send({
      to: 'info@clarkcreativeservices.com',
      from: 'info@clarkcreativeservices.com',
      subject: `[Lead from website] : ${req.body.subject}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
      
        <title>Clark Creative Services</title>
        <meta name="description" content="Clark Creative Services">
        <meta name="author" content="Clark Creative Services">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
              <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${req.body.name}, their email is: ✉️${req.body.email} </h3>
              <div style="font-size: 16px;">
              <p>Message:</p>
              <p>${req.body.message}</p>
              <br>
              </div>
              <img src="../../public/logo.png" class="logo-image" style="height: 50px;width: 50px;border-radius: 5px;overflow: hidden;">
              <p class="footer" style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Grace & peace to you,<br>Clark Creative Services (CCS)<br>https://clarkcreativeservices.com<br>info@clarkcreativeservices.com</p>
              <div class="footer-links" style="display: flex;justify-content: center;align-items: center;">
                <a href="https://clarkcreativeservices.com/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Website</a>
                <a href="https://proverbdesk.com/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">Blog</a>
                <a href="https://github.com/gregroyclark/" style="text-decoration: none;margin: 8px;color: #9CA3AF;">GitHub</a>

              </div>
              </div>
      </body>
      </html>`,
    });
  } catch (error) {
    console.log(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200);
}

export default sendEmail;
