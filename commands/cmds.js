const Discord = require('discord.js');
module.exports = {
    name: 'cmds',
    description: 'cmds Command !',
        
    async execute(message, args){
// inside a command, event listener, etc.
        const exampleEmbed = new Discord.MessageEmbed()
	    .setColor('#RANDOM')
	    .setTitle("List Of COMMANDS !")
	    .addField('Big Slap',`\`G6-bs\``,true)
        .addField('Hug',`\`G6-hug\``, true)
        .addField('Slap YourSelf',`\`G6-sme\``,true)
        .addField('Small Slap ',`\`G6-ss\``,true)
        .addField('soon',`\`soon\``,true)
        .addField('soon',`\`soon\``,true)
        .addField('User Info ',`\`G6-userinfo\``,true)
        .addField('Make Suggestion',`\`G6-suggestions\``,true)
        .addField('Your Ping',`\`ping\``,true)
        .addField('Ping-Pong!',`\`G6-ping\``,true)
		.setURL('https://discord.com/')
		
        .setTimestamp()
	    .setThumbnail('https://imgur.com/D06I1DN.gif')
        .setFooter("© ! G A B S I S#1978", "https://imgur.com/D06I1DN.gif")

    messageEmbed = await message.channel.send(exampleEmbed)
    }
}