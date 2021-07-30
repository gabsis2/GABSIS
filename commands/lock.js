const Discord = require('discord.js');

module.exports = {
    name: 'lock',
    description: 'Lock command',
    async execute(message, args){
        if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_CHANNELS')) {
            let msg = await message.channel.send('***Loading... ☻***')

            try {
                message.channel.updateOverwrite(message.guild.roles.cache.find(e => e.name.toLowerCase().trim() == '@everyone'), {
                    SEND_MESSAGES: false,
                    USE_EXTERNAL_EMOJIS: false
                })
                msg.edit('**This Text Channel Has Been Locked**')
            }catch (e){
                console.log(e)
            }
        }
    }
}