const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'Help Command !',
        
    async execute(message, args){
// inside a command, event listener, etc.
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#RANDOM')
	    .setTitle("Helper's GABSIS")
	    .setAuthor('*Social Media Commands*', 'https://imgur.com/jTmrinT.gif', '')
	    .setDescription('**How can we help you?**')
	    .addFields(
			
			{ name: 'YouTube', value: 'G6-YT', inline: false},
			{ name: '-------------------------------------------------------', value: '|----------------***SOCIAL MEDIA :***----------------|', inline: false },
		)
		.addFields(
			{ name: 'INSTAGRAM', value: 'G6-insta', inline: false },
		)
		.setURL('https://discord.com/channels/@595755770054705152')
		.setThumbnail('https://imgur.com/jTmrinT.gif')
		.addField('Discord', 'G6-discord', true)
	    .setImage()
	    .setTimestamp()
	    .setFooter("© GABSIS", "https://imgur.com/D06I1DN.gif");

    messageEmbed = await message.channel.send(exampleEmbed)
    }
}
