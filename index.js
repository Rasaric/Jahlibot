//all the required shit---------------------------------------------------------
const Discord = require("discord.js");
const bot = new Discord.Client();

//responses --------------------------------------------------------------------
const responses = require('./utils/responses');

// user functions---------------------------------------------------------------
const userJoin = require('./utils/userJoin');
const userLeave = require('./utils/userKick');

// When the bot boots up -------------------------------------------------------
bot.on("ready", async () =>{
	console.log(`${bot.user.username} is online!`);

	//set game -------------------------------------------------------------------
	bot.user.setActivity("status message");

});

//on user add/remove------------------------------------------------------------
bot.on('guildMemberAdd', member  => {
	userJoin(bot, member);
});
bot.on('guildMemberRemove', member => {
	userLeave(bot, member);
});

//message functions-------------------------------------------------------------
bot.on("message", async message => {
	//if autor is a bot, ignore
	if(message.author.bot) return;
	//if message is DM, ignore
	if(message.channel.type === "dm") return;

/******************************************************************************/
	//for testing only------------------------------------------------------------
	//if(message.guild.id == '274718680603033601') return;
/******************************************************************************/

//responses and messages -------------------------------------------------------
		responses(message, bot);
});

bot.login(process.env.BOT_TOKEN);
