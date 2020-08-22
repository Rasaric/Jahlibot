/*******************************************************************************


Response function


*******************************************************************************/

//required ---------------------------------------------------------------------
const Discord = require("discord.js");

const diceRoll = require('./roll');
const helpFunc = require('./help');

//function start----------------------------------------------------------------
//x=messages, y=bot, -----------------------------------------------------------
function responses (x, y){
  //change message to lower case------------------------------------------------
  let msg =x.content.toLowerCase();

  //random chance generator for most stuffs-------------------------------------
  const numsixnine = Math.floor(Math.random() * 6969);


  /****************************************************************************/
  /*outside functions---------------------------------------------------------*/

  //Help------------------------------------------------------------------------
  if (msg===(':-help')){helpFunc(x, y)};
  //Dice roll-------------------------------------------------------------------
  if (msg.startsWith(':-roll')){diceRoll(x)};

  //Help------------------------------------------------------------------------
  if (msg===(':-help')){helpFunc(x, y)};


  //general responses ----------------------------------------------------------
  if (msg===('duro')){
    x.channel.send('como mi pito');
  }
  if (msg.includes('astolfo')){
    x.react('😠');
  }
  if (msg.includes('69')){
    if(numsixnine < 1800){
      x.channel.send('( ͡° ͜ʖ ͡°)');
    }
  }
  if (msg.includes('comunismo')){
    x.channel.send('(☭ ͜ʖ ☭)');
  }
  if (msg.includes('180063200459358208')){
    x.channel.send('https://cdn.discordapp.com/attachments/529529045516550145/578239302127976460/D3-75jZU8AA3zV0.png');
  }
  if (msg.includes('sociedad')||msg.includes('society')){
    x.channel.send("Bottom text", {
      files: ["./images/society.jpg"]
    });
  }
}
module.exports = responses;
