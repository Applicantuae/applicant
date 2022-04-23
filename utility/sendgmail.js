"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
const sendEmail = async (option) => {
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  // let mailList = [
  //   option.email,
  //   "mohiu2919@gmail.com"
  // ]

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: `${process.env.FROM_NAME} <process.env.FROM_EMAIL>`,
    to: option.email, // list of receivers
    subject: option.subject, // Subject line
    text: option.message, // plain text body
    // html: `<h2> Dear Applicant, </h2> <br>
    // <h3>Thank you very much for the application</h3> <br>
    // <h3>We will let you know regarding the application soon </h3>
    // cc: "*******"
    // <!DOCTYPE html><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"/></head><body><table id="zs-output-sig" border="0" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse; width:550px;"><tbody><tr><td style="padding: 0px !important;"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;"><tbody><tr><td style="padding: 0px !important;"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;"><tbody><tr><td style="padding: 0px !important;"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;"><tbody><tr><td style="padding: 0px !important;"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;"><tbody><tr><td style="border-collapse:collapse;font-family:Calibri, Helvetica, sans-serif;font-size:15.0px;font-style:normal;line-height:17px;font-weight:400;padding: 0px !important;"><span style="font-family:Calibri, Helvetica, sans-serif;font-size:15.0px;font-style:normal;line-height:17px;font-weight:400;color:#000001;display:inline;">Kind Regards,</span></td></tr><tr><td style="border-collapse:collapse;padding-bottom:7px;height:7px;"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="padding: 0px !important;"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;"><tbody><tr><td width="156" style="padding: 0px !important;"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;"><tbody><tr><td style="border-collapse:collapse;line-height:0px;padding: 0px !important;"><img height="132" width="156" alt="" border="0" src="https://bestanimations.com/media/books/1004901533reading-books-gif-15.gif"></td></tr></tbody></table></td><td width="4" style="border-collapse:collapse;padding-right: 4px;width: 4px;"></td><td width="4" style="border-collapse:collapse;background-color:#62ca3e;width: 4px;vertical-align: super;padding: 0px !important;"></td><td width="11" style="border-collapse:collapse;padding-right: 11px;width:11px;"></td><td style="padding: 0px !important;"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;"><tbody><tr><td style="padding: 0px !important;"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;"><tbody><tr><td style="padding: 0px !important;"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;"><tbody><tr><td style="border-collapse:collapse;font-family:Calibri, Helvetica, sans-serif;font-size:18.0px;font-style:normal;line-height:20px;font-weight:700;padding: 0px !important;"><span style="font-family:Calibri, Helvetica, sans-serif;font-size:18.0px;font-style:normal;line-height:20px;font-weight:700;color:#62ca3e;display:inline;">mohi007&nbsp;</span> <span style="font-family:Calibri, Helvetica, sans-serif;font-size:18.0px;font-style:normal;line-height:20px;font-weight:700;color:#7d0d6f;display:inline;">Education Specialist&nbsp;</span></td></tr><tr><td style="border-collapse:collapse;padding-bottom:8px;height:8px;"></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="padding: 0px !important;"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;"><tbody><tr><td style="padding: 0px !important;"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;"><tbody><tr><td style="border-collapse:collapse;font-family:Calibri, Helvetica, sans-serif;font-size:15.0px;font-style:normal;line-height:17px;font-weight:400;padding: 0px !important;"><span style="font-family:Calibri, Helvetica, sans-serif;font-size:15.0px;font-style:normal;line-height:17px;font-weight:400;color:#62ca3e;display:inline;">e.</span> <span style="font-family:Calibri, Helvetica, sans-serif;font-size:15.0px;font-style:normal;line-height:17px;font-weight:400;color:#000001;display:inline;">mohibdrs@gmail.com&nbsp;</span> <span style="font-family:Calibri, Helvetica, sans-serif;font-size:15.0px;font-style:normal;line-height:17px;font-weight:400;color:#62ca3e;display:inline;">w.</span> <span style="font-family:Calibri, Helvetica, sans-serif;font-size:15.0px;font-style:normal;line-height:17px;font-weight:400;color:#000001;display:inline;">www.mojhibd.io&nbsp;</span></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="padding: 0px !important;"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;"><tbody><tr><td style="padding: 0px !important;"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;"><tbody><tr><td style="border-collapse:collapse;font-family:Calibri, Helvetica, sans-serif;font-size:15.0px;font-style:normal;line-height:17px;font-weight:400;padding: 0px !important;"><span style="font-family:Calibri, Helvetica, sans-serif;font-size:15.0px;font-style:normal;line-height:17px;font-weight:400;color:#62ca3e;display:inline;">a.</span> <span style="font-family:Calibri, Helvetica, sans-serif;font-size:15.0px;font-style:normal;line-height:17px;font-weight:400;color:#000001;display:inline;">UAE, Sharja</span></td></tr><tr><td style="border-collapse:collapse;padding-bottom:3px;height:3px;"></td></tr><tr><td style="border-collapse:collapse;padding-bottom:8px;height:8px;"></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="padding: 0px !important;"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;"><tbody><tr><td style="padding: 0px !important;"><table border="0" cellpadding="0" cellspacing="0" style="font-family:Arial,Helvetica,sans-serif;line-height:0px;font-size:1px;padding:0px!important;border-spacing:0px;margin:0px;border-collapse:collapse;"><tbody><tr><td style="padding: 0px !important;"><img height="24" width="24" alt="facebook" border="0" src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/7ccb4d/04facebook.gif"></td><td style="border-collapse:collapse;padding-right:5px;width:5px;"></td><td style="padding: 0px !important;"><img height="24" width="24" alt="twitter" border="0" src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/7ccb4d/04twitter.gif"></td><td style="border-collapse:collapse;padding-right:5px;width:5px;"></td><td style="padding: 0px !important;"><img height="24" width="24" alt="linkedin" border="0" src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/7ccb4d/04linkedin.gif"></td><td style="border-collapse:collapse;padding-right:5px;width:5px;"></td><td style="padding: 0px !important;"><img height="24" width="24" alt="youtube" border="0" src="https://r8g4u6u5.stackpathcdn.com/assets/social/24/7ccb4d/04youtube.gif"></td><td style="padding: 0px !important;"></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr></tbody></table></td></tr><tr><td style="border-collapse:collapse;padding-bottom:8px;height:8px;"></td></tr><tr><td style="border-collapse:collapse"><a href="https://gimm.io/en_US/email-signature-generator?utm_source=sent-emails&amp;utm_medium=email&amp;utm_campaign=get-your-own-signature" target="_blank" rel="nofollow" style="font-family:Arial, Helvetica, sans-serif;font-size:9.0px;font-style:normal;line-height:10px;font-weight:normal;color:#777777;"></a></td></tr></tbody></table></body></html>
    // `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

module.exports = sendEmail;
