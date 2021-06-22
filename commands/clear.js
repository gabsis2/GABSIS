module.exports = {
    name: 'clear',
    description: "Clear Messages!",
    cooldwon: 4000,
    async execute(message, args){
        if(message.member.roles.cache.has('698146011486617622') || message.member.roles.cache.has('717422669317931110')){
            if(!args[0]) return message.reply("**Hot gedeh mn message bsh** ***tfassakh*** !");
            if(isNaN(args[0])) return message.reply("**Lazmak Thot Number Msh** ***Alphabet Letters***!");

            if(args[0]> 100) return message.reply("**Matnajemesh Tfasakh More Than** ***100 Messages*** !");
            if(args[0]<1) return message.reply("**Lazmak Ala9al Thot** ***1 *** !");

            await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages);
            
            });
        }else {
            message.reply
            ('\n Maeendakesh Permession Bsh Tecleari ! ');
        }
    }
}
