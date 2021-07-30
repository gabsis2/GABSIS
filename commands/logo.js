const Discord = require('discord.js');

module.exports = {
    name: 'logo',
    description: 'Logo Command !',
        
    execute(message, args){
        if (message.member.roles.cache.has('757543220979695687')){

        let user = message.author 

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setTitle(`**TFADHEL ♥ **`)
        .setDescription(`${user} [*If You Need Logo Gif send_* **_:** __ G6-logogif]`)
        .setImage("https://imgur.com/pdVwrmw.jpg") 
        .setURL()
        .setFooter("© GABSIS", "https://imgur.com/D06I1DN.gif")
        return message.channel.send(embed)
        }
    }
}