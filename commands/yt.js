const Discord = require("discord.js");
const { description, execute } = require("./help");


module.exports = {
    name: 'yt',
    description: 'YouTube Channel Command !',

    execute(message, args){
        let user = message.author

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTimestamp()
        .setTitle("GABSIS YouTube Channel : Click Here !")
        .setDescription(`👆👆**TFADHEL** ${user} ***Click l foug***`)
        .setImage("https://imgur.com/D06I1DN.gif")
        .setURL("https://www.youtube.com/c/GABSIS06")
        .setFooter("© GABSIS", "https://imgur.com/D06I1DN.gif")
        return message.channel.send(embed)
    }

}
