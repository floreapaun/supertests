var debug = require('debug')('passport-mongo');
require('dotenv').config();
var app = require('./app');

app.set('port', process.env.PORT || 3000);
  console.log(process.env.PORT);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
