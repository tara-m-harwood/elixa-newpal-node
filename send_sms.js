require('dotenv').config();
console.log('Your environment variable TWILIO_ACCOUNT_SID has the value: ', process.env.TWILIO_ACCOUNT_SID);
console.log('Your environment variable TWILIO_AUTH_TOKEN has the value: ', process.env.TWILIO_AUTH_TOKEN);

// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = '727000371fe7aa832bd0125156e4546d';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Are you there God?  It is me, Elixa!',
     from: '+17274751004',
     to: '+15107252979'
   })
  .then(message => console.log(message.sid));
