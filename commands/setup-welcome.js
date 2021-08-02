// const Discord = require('discord.js');

// module.exports = {
//     name: 'setup-welcome',
//     description: 'setup welcome command',
//     async execute(message, args){
//         if (message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_CHANNELS')){
//             let everyoneRole = message.guild.roles.cache.find(r => r.name === '@everyone');
            
//             message.guild.channels.create('welcome', {
//                 type: 'text',
//                 permissionOverwrites: [{
//                     id: everyoneRole.id,
//                     deny: ['SEND_MESSAGES'],
//                 }],
//             })
//             message.channel.send(`**Done ✅**, \` check it \` #welcome !`)        
            
           
//         }
//     }
// }
