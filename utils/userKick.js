/*******************************************************************************


User Kick functions


*******************************************************************************/
//required----------------------------------------------------------------------
id = require('../JSON/id.json');

function userLeave(x, y) {

  x.channels.get(id.IpMainChannelId).send('**' + y.user.username + "** has died... jk, he just left");
}

module.exports = userLeave;
