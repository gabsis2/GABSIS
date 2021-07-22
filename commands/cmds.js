const Discord = require('discord.js');
module.exports = {
    name: 'cmds',
    description: 'cmds Command !',
        
    async execute(message, args){
// inside a command, event listener, etc.
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#RANDOM')
	    .setTitle("COMMANDS OF BOT")
	    .setDescription('soon')
	    .addFields(
            {name: 'soon', value: 'soon', inline: false },
            {name: 'soon', value: 'soon', inline: false},
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