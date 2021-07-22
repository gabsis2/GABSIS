const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: 'Help Command !',
        
    async execute(message, args){
// inside a command, event listener, etc.
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#RANDOM')
	    .setTitle("Helper's GABSIS BOT")
	    .setDescription('**How can we help you?**')
	    .addFields(
            {name: 'Commands', value: 'G6-cmds', inline: false },
            {name: 'Social Media', value: 'G6-sm', inline: false},
            {name: 'soon', value: 'soon', inline: false },
            {name: 'soon', value: 'soon', inline: false},
            {name: 'soon', value: 'soon', inline: false },
            {name: 'soon', value: 'soon', inline: false},
        )
		.setURL('https://discord.com/channels/@595755770054705152')
		.setThumbnail()
	    .setImage('https://imgur.com/rhlWI3h.gif')
	    .setTimestamp()
	    .setFooter("© GABSIS", "https://imgur.com/D06I1DN.gif");

    messageEmbed = await message.channel.send(exampleEmbed)
    }
}
