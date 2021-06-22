module.exports = {
    name: 'test',
    description: "sends yfz!",
    execute(message, args){

        if(message.member.roles.cache.has('717422669317931110')){
            message.channel.send(`** yfz ! ** ${message.author}`);}

        else if(message.member.roles.cache.has('698146011486617622')){
            return;}
        else {
            message.channel.send(`**YFZ YFZ YFZ YFZ YFZ ! Ye ** ${message.author}`);
            
        }

        


    }
}
