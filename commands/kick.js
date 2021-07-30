module.exports = {
    name: 'kick',
    Description: "Kick a member!",
    execute(message, args){
        const member = message.mentions.users.first();
        if(message.member.hasPermission('KICK_MEMBERS') || message.member.hasPermission('ADMINISTRATOR')){
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send(`<@${member.id}>!User has been kicked !`);
            }else {
                message.channel.send('**Lazmak Tagih Bsh** ***Yetkicka ! ***').then(message.delete({timeout: 5000}));
            }
        }else {
            message.delete();
            message.channel.send(`${message.author}\`\`\` \n Maeendakesh Permession Bsh Tkicki Shkun ! \n \`\`\``).then(message => message.delete({timeout: 4000}));

        }
    }
}