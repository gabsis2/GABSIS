const Discord = require('discord.js');
module.exports = {
    name: 'clear',
    description: "Clear Messages!",
    async execute(message, args){
        if(message.member.hasPermission('MANAGE_MESSAGES') || message.member.hasPermission('ADMINISTRATOR')){
            if(!args[0]) return message.reply("**Hot gedeh mn message bsh** ***tfassakh*** !").then(message.delete({timeout: 5000}));
            if(isNaN(args[0])) return message.reply("**Lazmak Thot Number Msh** ***Alphabet Letters***!").then(message.delete({timeout: 5000}));
 
            if(args[0]> 100) return message.reply("**Matnajemesh Tfasakh More Than** ***100 Messages*** !").then(message.delete({timeout: 5000}));
            if(args[0]<1) return message.reply("**Lazmak Ala9al Thot** ***1 *** !").then(message.delete({timeout: 5000}));

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages)
                
                
            
            })
            message.channel.send(` ${message.author}\n** Done ✅ ! **\n *** ${args}.*** ** Message(s) Has Been Deleted !**`).then(msg => msg.delete({timeout: 8000}));
        }else {
            message.delete();
            message.channel.send(`${message.author}\`\`\` \n Maeendakesh Permession Bsh Tecleari ! \n \`\`\``).then(message => message.delete({timeout: 3000}));
        }
    }
}
