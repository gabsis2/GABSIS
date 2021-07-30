const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Help Command !',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle(`Helper's GABSIS BOT !`)
        .setDescription('**How Can I Help You Guy ?**')
        .setAuthor('*Welcome ♥*','https://imgur.com/D06I1DN.gif','')
        .setThumbnail('https://imgur.com/D06I1DN.gif')
        .setURL('https://www.google.com/')
        .addFields(
            {name: 'Commands', value: `\`G6-cmds\``, inline: true},
            {name: `Bot's Owner`, value: `\`G6-owner\``, inline: true},
            
            {name: 'Moderator Commands', value: `\`G6-modcmds\``, inline: true}

        )
        .setFooter("© ! G A B S I S#1978", "https://imgur.com/D06I1DN.gif")
        .setTimestamp()

        message.channel.send(embed)
    }
}