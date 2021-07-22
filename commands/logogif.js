const Discord = require('discord.js');

module.exports = {
    name: 'logogif',
    description: 'Logo Command !',
        
    execute(message, args){
        let user = message.author 

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setDescription(`**TFADHEL** ${user}`)
        .setImage("https://imgur.com/D06I1DN.gif") 
        .setURL()
        .setFooter("© GABSIS", "https://imgur.com/D06I1DN.gif")
        return message.channel.send(embed)
    }

}