import nodemailer from "nodemailer";

const domnain = process.env.NEXT_PUBLIC_APP_URL;

const transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  host: process.env.SMTP_HOST,
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendVerificationEmail = async (email: string, token: string) => {
  const url = `${domnain}/auth/new-verification?token=${token}`;

  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Verify Email</title>
      </head>
      <body>
        <h1>Verify Email</h1>
        <p>
          Please click the button below to verify your email:
        </p>
        <a href="${url}">Verify Email</a>
      </body>
    </html>
    `;
  const message = {
    to: email,
    from: process.env.SMTP_EMAIL,
    subject: "Verify Email",
    html,
  };

  try {
    await transporter.sendMail(message);
  } catch (err) {
    console.log(err);
  }
};
