const Discord = require('discord.js');

module.exports = {
    name: 'setup-suggestions',
    description: 'setup suggestions command',
    async execute(message, args){
        if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_CHANNELS')){
            
                const embed = new Discord.MessageEmbed()
                .setAuthor('GABSIS BOT','https://imgur.com/D06I1DN.gif')
                .setThumbnail('https://imgur.com/D06I1DN.gif')
                .setColor("#ff0000")
                .setDescription('***You Need To Create 2 Channels (Type: Text)***')
                .addFields(
                    {name: 'First Channel Name', value: 'send-your-suggestions', inline: false},
                    {name: 'Second Channel Name', value: 'suggestions', inline: false},
                    {name: '*',value: '*If You Create it/ send G6-suggestions*'}
                )
                .setFooter("© ! G A B S I S#1978", "https://imgur.com/D06I1DN.gif")
                messageEmbed = await message.channel.send(embed);
                
            
        }
    }
}