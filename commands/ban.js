module.exports = {
    name: 'ban',
    Description: "ban a member!",
    execute(message, args){
        const member = message.mentions.users.first();
        if(message.member.roles.cache.has('698146011486617622') || message.member.roles.cache.has('717422669317931110')){
            if(member){
                const memberTarger = message.guild.members.cache.get(member.id);
                memberTarger.ban();
                message.channel.send(`<@${member.id}> ! His ban has been successfully !`);
            }else {
                message.channel.send(`**Lazmak Tagih Bsh** ***Yetbana ! ***`)
            }
        }else {
            message.channel.send('Maeendakesh Permession Bsh Tbani !')
        }
    }
}
