module.exports = {
    name: 'kick',
    Description: "Kick a member!",
    execute(message, args){
        const member = message.mentions.users.first();
        if(message.member.roles.cache.has('698146011486617622') || message.member.roles.cache.has('717422669317931110')){
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.kick();
                message.channel.send(`<@${member.id}>!User has been kicked !`);
            }else {
                message.channel.send('**Lazmak Tagih Bsh** ***Yetkicka ! ***');
            }
        }else {
            message.channel.send(`\`\`\` \n Maeendakesh Permession Bsh Tkicki ! \n \`\`\``);

        }
    }
}
