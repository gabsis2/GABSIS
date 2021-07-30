const Discord = require('discord.js');
module.exports = {
    name: 'sm',
    description: 'Social Media Command !',
        
    async execute(message, args){
// inside a command, event listener, etc.
		if (message.member.roles.cache.has('757543220979695687')){

        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#RANDOM')
	    .setTitle("GABSIS SOCIAL MEDIA")
	    .setAuthor('*Social Media*', 'https://imgur.com/jTmrinT.gif', '')
	    .setDescription('**How can we help you?**')
		.addFields(
			{ name: 'DISCORD', value: '!                    G A B S I S#1978 [ <@595755770054705152> ]', inline: false },
		)
		.addField(`INSTAGRAM`, `[gabsis._](https://www.instagram.com/gabsis._)` , true)
		.addFields(
			{ name: '--------------------------------------------------------', value: '*', inline: false},
		 
		)
		.addField('YouTube', `[My YouTube Channel](https://www.youtube.com/c/GABSIS06)`, true)
		.setURL('https://discord.gg/ZWPmgmnNz6')
		.setThumbnail()
	    .setImage('https://imgur.com/rhlWI3h.gif')
	    .setTimestamp()
	    .setFooter("© GABSIS", "https://imgur.com/D06I1DN.gif");

    	messageEmbed = await message.channel.send(exampleEmbed)}
    }
}