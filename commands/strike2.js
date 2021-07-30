const Discord = require('discord.js')
module.exports = {
    name: 'strike2',
    description: "Warn Command",
    async execute(message, args) {
        const target = message.mentions.users.first();
        if(message.member.hasPermission('BAN_MEMBERS') || message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_CHANNELS') || message.member.hasPermission('MANAGE_MESSAGES') ){
            if (target) {
 
                // let mainRole = message.guild.roles.cache.find(role => role.name === 'Friend');
                let strikeRole = message.guild.roles.cache.find(role => role.name === 'Strike1');
                let strikeRole2 = message.guild.roles.cache.find(role => role.name === 'Strike2');
 
                let memberTarget = message.guild.members.cache.get(target.id);

                if(!strikeRole2) {
                    try {
                        (await message.channel.send('**Strike2 role** Mafamesh f server ⛔ !, Stanna Shwy **Bsh Naaml** Role Jdyda F Server *🙄 !*.').then(message => message.delete({timeout: 10000})))
        
                        strikeRole = await message.guild.roles.create({
                            data : {
                                name : 'Strike2',
                                permissions: []
                            }
                        });
                        
                        message.channel.send('**Strike2 role** Has Successfully Been Created. ✅ !').then(message => message.delete({timeout: 5000}));
                        
                    } catch (error) {
                        console.log(error)
                    }
                }



 
                if (!args[1]) {
                    
                    memberTarget.roles.remove(strikeRole);
                    memberTarget.roles.add(strikeRole2);
                    message.channel.send(`<@${memberTarget.user.id}> **Has Been Warned** ⚠️ \`{2}\` !`);
                    return
                }
                
                memberTarget.roles.add(strikeRole2);
                
 
                
            } else {
                message.channel.send('I Can/t find that member!');
            }
        }else{
            message.delete();
            message.channel.send(`${message.author}\`\`\` \n Maeendakesh Permession Bsh Twarni Shkun ! \n \`\`\``).then(message => message.delete({timeout: 4000}));
        }
    }
}
