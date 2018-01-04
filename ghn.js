var googlehome = require('google-home-notifier');
var language = 'ja'; // if not set 'us' language will be used

// googlehome.device('Google-Home-67707fedd98321f92cf9a3a2e130b97c', language); // Change to your Google Home name
// or if you know your Google Home IP
googlehome.ip('192.168.100.107', language);

googlehome.notify('ok google', function(res) {
  console.log(res);
});