const Discord = require('discord.js');

module.exports = {
    name: 'modcmds',
    description: 'Moderators Commands  Command !',
    execute(message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle(`List Of Moderator Commands !`)
        .setDescription('**How Can I Help You Guy ?**')
        .setAuthor('*Welcome ♥*','https://imgur.com/D06I1DN.gif','')
        .setThumbnail('https://imgur.com/D06I1DN.gif')
        .addFields(
            {name: 'Ban', value: `\`G6-ban\``, inline: true},
            {name: `UnBan`, value: `\`G6-unban\``, inline: true},
            {name: 'Kick', value: `\`G6-kick\``, inline: true},
            {name: `Mute`, value: `\`G6-mute\``, inline: true},
            {name: 'UnMute', value: `\`G6-unmute\``, inline: true},
            
            {name: 'Setup Suggestions', value: `\`G6-setup-suggestions\``, inline: true},
            {name: 'Lock', value: `\`G6-lock\``, inline: true},
            {name: 'UnLock', value: `\`G6-unlock\``, inline: true},
            {name: 'Server Info', value: '`\`G6-serverinfo\``', inline: true},
            {name: `Warn1`, value: `\`G6-strike\``, inline: true},
            {name: 'Warn2', value: `\`G6-strike2\``, inline: true},
            {name: `Warn3(mute auto)`, value: `\`G6-strike3\``, inline: true},
            
            

        )
        .setFooter("© ! G A B S I S#1978", "https://imgur.com/D06I1DN.gif")
        .setTimestamp()

        message.channel.send(embed)
    }
}