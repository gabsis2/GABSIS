const Discord = require('discord.js');

module.exports = {
    name: 'insta',
    description: 'insta Command !',
        
    execute(message, args){
        if (message.member.roles.cache.has('757543220979695687')){

        let user = message.author 

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setTitle("INSTAGRAM GABSIS : Click Here !")
        .setDescription(`👆👆**TFADHEL** ${user} ***Click l foug*** `)
        .setImage("https://imgur.com/D06I1DN.gif") 
        .setURL("https://www.instagram.com/gabsis._/")
        .setFooter("© GABSIS", "https://imgur.com/D06I1DN.gif")
        return message.channel.send(embed)
        }
    }
}