const Discord = require('discord.js');

module.exports = {
    name: 'invite',
    description: 'invite command',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle('Discord Bot Invite Link')
        .setURL('https://discord.com/oauth2/authorize?client_id=855541265088774144&permissions=8&scope=bot')
        .addField('Invite Me','[Invite me](https://discord.com/oauth2/authorize?client_id=855541265088774144&permissions=8&scope=bot)',true)
        .setFooter("© ! G A B S I S#1978", "https://imgur.com/D06I1DN.gif")
        .setTimestamp()
        message.author.send(embed)
    }
}