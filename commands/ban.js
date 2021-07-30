module.exports = {
    name: 'ban',
    Description: "ban a member!",
    execute(message, args){
        const member = message.mentions.users.first();
        if(message.member.hasPermission('BAN_MEMBERS') || message.member.hasPermission('ADMINISTRATOR')){
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.send(`<@${member.id}> ! His ban has been successfully !`);
            }else {
                message.channel.send(`**Lazmak Tagih Bsh** ***Yetbana ! ***`)
            }
        }else {
            message.delete();
            message.channel.send(`${message.author}\`\`\` \n Maeendakesh Permession Bsh Tbani Shkun ! \n \`\`\``).then(message => message.delete({timeout: 4000}));
        }
    }
}     