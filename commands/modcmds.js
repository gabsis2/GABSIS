const Discord = require('discord.js');

module.exports = {
    name: 'modcmds',
    description: 'Moderators Commands  Command !',
    execute(message, args){
        if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_MESSAGES') || message.member.hasPermission('MANAGE_CHANNELS')
        || message.member.hasPermission('MANAGE_GUILD') || message.member.hasPermission('BAN_MEMBERS') || message.member.hasPermission('KICK_MEMBERS')){
        const embed = new Discord.MessageEmbed()
        .setTitle(`List Of Moderator Commands !`)
        .setDescription('**How Can I Help You Guy ?**')
        .setAuthor('*Welcome ♥*','https://imgur.com/D06I1DN.gif','')
        .setThumbnail('https://imgur.com/D06I1DN.gif')
        .setURL('https://discord.com/')
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
        .setFooter("© \n [Any Problem Contact Bot's Owner (G6-owner)]", "https://imgur.com/D06I1DN.gif")

        message.channel.send(embed)
        }
    }
}