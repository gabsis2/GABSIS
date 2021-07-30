const Discord = require('discord.js');

module.exports = {
    name: 'suggestions',
    aliases: ['suggest', 'suggestion'],
    permissions: [],
    description: 'creates a suggestion!',
    async execute(message, args, cmd, client, discord){
        const channel1 = message.guild.channels.cache.find(c => c.name === 'send-your-suggestions');
        const channel2 = message.guild.channels.cache.find(c => c.name === 'suggestions');
        if(!message.channel.name.includes('send-your-suggestions')){
            message.delete();
            return message.channel.send(`**L Command Hedhy Ektebha f ${channel1} !**`).then(message => message.delete({timeout: 5000}));
        }else if(message.content === 'G6-suggestions') {
             message.delete();
             message.channel.send(`** Hey ${message.author}, Lazmek Tekteb l fekra Baeed ** *G6-suggestions* \n Exp: G6-suggestions (Your Idea) !`).then(message => message.delete({timeout: 7000}));
        }else {
            let messageArgs = args.join(' ');
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
            .setDescription(`**My Suggestion :** \n||!||\n${messageArgs}\n||!||`)
            .setTimestamp()
            channel2.send('@everyone').then(message => message.delete({timeout: 5000}));
            channel2.send(embed).then((msg) =>{
                msg.react('<a:5495_tickmark:869495233245761567>');
                msg.react('<a:6764_no:869495972680589372>');
                message.delete();
            }).catch((err)=>{
                throw err;
            })
        }   
    }
}