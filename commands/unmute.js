module.exports = {
    name: 'unmute',
    description: "This unmutes a member",
    execute(message, args){
        const target = message.mentions.users.first();
        if(message.member.roles.cache.has('698146011486617622') || message.member.roles.cache.has('717422669317931110')){
            if(target){
                //let mainRole = message.guild.roles.cache.find(role => role.name === 'Friend');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');
 
                let memberTarget= message.guild.members.cache.get(target.id);
 
                memberTarget.roles.remove(muteRole);
                //memberTarget.roles.add(mainRole);
                message.channel.send(`<@${memberTarget.user.id}> ! *** Has Been Unmuted*** 🔉`);
            } else{
                message.channel.send('**ID Mahuush Mawjuud F Server ole Maeendeshy Role Mute !**');
            }
        }else{
            message.delete();
            message.channel.send(`${message.author}\`\`\` \n Maeendakesh Permession Bsh Tneh l Mute l Shkun ! \n \`\`\``).then(message => message.delete({timeout: 4000}));
        }
    }
}