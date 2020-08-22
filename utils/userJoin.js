/*******************************************************************************


User Join functions


*******************************************************************************/
//required``````````````````````````````````````````````````````````````````````
id = require('../JSON/id.json');

function userJoin(x, y) {

	x.channels.get(id.IpMainChannelId).send('**' + y.user.username + '** has joined the hellhole, poor soul', {
		files: ["./images/welcome.png"]
	});
}

module.exports = userJoin;
