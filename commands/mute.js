const ms = require('ms');
module.exports = {
    name: 'mute',
    description: "This mutes a member",
    async execute(message, args) {
        const target = message.mentions.users.first();
        if(message.member.hasPermission('BAN_MEMBERS') || message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_CHANNELS') || message.member.hasPermission('MANAGE_MESSAGES') ){
            if (target) {
 
                // let mainRole = message.guild.roles.cache.find(role => role.name === 'Friend');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
 
                let memberTarget = message.guild.members.cache.get(target.id);

                if(!muteRole) {
                    try {
                        (await message.channel.send('**Muted role** Mafamesh f server ⛔ !, Stanna Shwy **Bsh Naaml** Role Jdyda F Server *🙄 !*.').then(message => message.delete({timeout: 10000})))
        
                        muteRole = await message.guild.roles.create({
                            data : {
                                name : 'muted',
                                permissions: []
                            }
                        });
                        message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                            await channel.createOverwrite(muteRole, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS: false
                                
                            })
                        });
                        message.channel.send('**Muted role** has successfully been created. ✅ !').then(message => message.delete({timeout: 5000}));
                        
                    } catch (error) {
                        console.log(error)
                    }
                }



 
                if (!args[1]) {
                    
                    memberTarget.roles.add(muteRole);
                    message.channel.send(`<@${memberTarget.user.id}> **Has Been Muted** 🔇 !`);
                    return
                }
                
                memberTarget.roles.add(muteRole);
                message.channel.send(`<@${memberTarget.user.id}> **Has Been Muted For** ***${ms(ms(args[1]))}*** 🔇 !`);
 
                setTimeout(function () {
                    memberTarget.roles.remove(muteRole);
                    message.channel.send(`${memberTarget}, *You are Now* **UnMuted** 🔊 !`)
                }, ms(args[1]));
            } else {
                message.channel.send('I Can/t find that member!');
            }
        }else{
            message.channel.send(`\`\`\` \n Maeendakesh Permession Bsh Temuti Shkun ! \n \`\`\``).then(message.delete({timeout: 5000}));
        }
    }
}
