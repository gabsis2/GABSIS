const Discord = require('discord.js');

module.exports = {
    name: 'discord',
    description: 'discord Command !',
        
    execute(message, args){
        let user = message.author 

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTimestamp()
        .setTitle("DISCORD GABSIS : Click Here !")
        .setDescription(`👆👆**TFADHEL** ${user} ***Click l foug*** `)
        .setImage("https://imgur.com/D06I1DN.gif") 
        .setURL("https://discord.com/channels/@595755770054705152")
        .setFooter("© GABSIS", "https://imgur.com/D06I1DN.gif")
        return message.channel.send(embed)
    }

}
