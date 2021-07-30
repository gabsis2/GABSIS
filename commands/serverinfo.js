
const { Client, Message, MessageEmbed} = require('discord.js');
const { execute } = require('./sm');
const moment = require('moment');

module.exports={
    name: 'serverinfo',
    description: 'ServerInfo Command',
    aliases: ['srvr','server','si'],
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    execute(client, message, args){
        if (message.member.hasPermission('ADMINISTRATOR')){
        const guild = message.guild;
        const embed = new MessageEmbed()
        .setTitle(message.guild.name)
        .setThumbnail(message.guild.iconURL())
        .setColor("#ff0000")
        .addField("General Info", [
            `ID: ${guild.id}`,
            `Name: ${guild.name}`,
            `Owner: ${guild.owner}`,
        ])
        .addField('Counts', [
            `Members: ${guild.memberCount} Members`,
            `Role: ${guild.roles.cache.size} Roles`,
            `Channels (With Category): ${guild.channels.cache.size} Total (Text: ${guild.channels.cache.filter((ch) => ch.type === 'text').size} | Voice: ${guild.channels.cache.filter((ch) => ch.type === 'voice').size})`,
            `Emojis: ${guild.emojis.cache.size} (Regular: ${
                guild.emojis.cache.filter((e) => !e.animated).size
            }, Animated: ${
                guild.emojis.cache.filter((e) => e.animated).size
            })`,
        ])
        .addField('Additional Information', [
            `Created: ${moment(guild.createdTimestamp).format('LT')} ${moment(guild.createdTimestamp).format('LL')} ${moment(guild.createdTimestamp).fromNow()}`,
            `Region: ${guild.region}`,
            `Boost Tier: ${guild.premiumTier ? `Tier ${guild.premiumTier}` : 'None'}`,
            `Boost Count: ${guild.premiumSubscriptionCount || '0'}`,
        ])
        .addField('*[NOTE] :','[*Tnajem Zeda Tabaath* \n **(**G6-serverinfo **or** G6-server **or** G6-srvr**)** \n *Bsh Tkharejlak Kima Heka*]');
        message.channel.send(embed)
        }else{
            message.channel.send(`${message.author} !  **Nopeeeeeeee**`).then(msg => msg.delete({timeout: 2000}))
        }

    }
}