module.exports = {
    name: 'ridh',
    description: "sends message!",
    execute(message, args){

        if(message.member.roles.cache.has('698146011486617622')){
            message.channel.send(`**Wadhah Wadhah ! Si ** ${message.author}`);}
        else {
            message.channel.send('**Kn GABSIS Yguli Ridh -_- **')
        }

        

        


    }
}
