const nodemailer = require("nodemailer");
const config = require("../config");

async function mailer(to, subject, text, html) {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: config.emailUser,
        pass: config.emailHostPassword
      }
    });

    return transporter.sendMail({
      from: `'"Irving Juárez" <${config.emailUser}>`,
      to,
      subject,
      text,
      html
    });
}

module.exports = mailer;