module.exports = {
    name: 'strike',
    description: "Warn a member",
    execute(message, args) {
        const target = message.mentions.users.first();
        if(message.member.roles.cache.has('698146011486617622') || message.member.roles.cache.has('717422669317931110')){
            if (target) {
 
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Strike I');


                 
                let memberTarget = message.guild.members.cache.get(target.id);
 
                if (!args[1]) {
                    memberTarget.roles.add(mainRole.id);
                    
                    message.channel.send(`<@${memberTarget.user.id}> **Has Been Warned** {1}`);
                    return
                }
            } else {
                message.channel.send('Cant find that member!');
            }
        }else{
            message.channel.send(`\`\`\` \n Maeendakesh Permession Bsh Twarni Shkun ! \n \`\`\``);
        }
    }
}
