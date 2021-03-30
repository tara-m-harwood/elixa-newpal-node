// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'AC99185bf3c40c69a1da923bb7265620ec';
const authToken = '727000371fe7aa832bd0125156e4546d';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+17274751004',
     to: '+15107252979'
   })
  .then(message => console.log(message.sid));
