const sgMail = require('@sendgrid/mail')

async function sendEmail () {
  const mailOptions = {
    to: 'test@example.com', // email to
    from: 'Support Alpha Pixnode <support@alpha-pixnode.com>', // ex. 'Support Alpha Pixnode <support@alpha-pixnode.com>'
    subject: 'Subject Email',
    html: 'Hello Send Email'
  }
  sgMail.setApiKey('SENDGRID_API_KEY') // SENDGRID_API_KEY

  const response = await sgMail.send(mailOptions)

  return response
}

sendEmail()
