module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args){
        const target = message.mentions.users.first();
        if(message.member.hasPermission('BAN_MEMBERS') || message.member.hasPermission('ADMINISTRATOR') || message.member.hasPermission('MANAGE_CHANNELS') || message.member.hasPermission('MANAGE_MESSAGES') ){
            if(target){
                let muteRole = message.guild.roles.cache.find(role => role.name === 'muted');
                let memberTarget= message.guild.members.cache.get(target.id);
                if(!memberTarget.roles.cache.muteRole){
                    message.channel.send('**Maeendeshy Role muted ! 🚫**');
                }else{
                //let mainRole = message.guild.roles.cache.find(role => role.name === 'Friend');
                
 
                
 
                memberTarget.roles.remove(muteRole);
                //memberTarget.roles.add(mainRole);
                message.channel.send(`<@${memberTarget.user.id}> ! *** Has Been Unmuted*** 🔉`)};
            }else{
                message.channel.send('**Lazmek Tagih Bsh Yetnaha L Mute !**');
            }
        }else{
            message.delete();
            message.channel.send(`${message.author}\`\`\` \n Maeendakesh Permession Bsh Tneh l Mute l Shkun ! \n \`\`\``).then(message => message.delete({timeout: 4000}));
        }
    }
}