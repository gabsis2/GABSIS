module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '855826904584945684';
        const redTeamRole = message.guild.roles.cache.find(role => role.id === "ZOMRA");
        const yellowTeamRole = message.guild.roles.cache.find(role => role.id === "VAGOS");
        const purpleTeamRole = message.guild.roles.cache.find(role => role.id === "BALLAS");
        const blueTeamRole = message.guild.roles.cache.find(role => role.id === "LOS AZTECAS");
        const whiteTeamRole = message.guild.roles.cache.find(role => role.id === "SLATS");
        const greenTeamRole = message.guild.roles.cache.find(role => role.id === "WLED GADOUR");

        const redTeamEmoji = '🔴';
        const yellowTeamEmoji = '🟡';
        const purpleTeamEmoji = '🟣';
        const blueTeamEmoji = '🔵';
        const whiteTeamEmoji = '⚪';
        const greenTeamEmoji = '🟢';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#ff1493')
            .setTitle('**TABA3 SHKUN ?**')
            .setDescription('*ENZEL ALE LOUN GANG MTAAK *\n\n'
                + `${redTeamEmoji} ZOMRA\n`
                + `${yellowTeamEmoji} VAGOS\n`
                + `${purpleTeamEmoji} BALLAS\n`
                + `${blueTeamEmoji} LOS AZTECAS\n`
                + `${whiteTeamEmoji} SLATS\n`
                + `${greenTeamEmoji} WLED GADOUR`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(redTeamEmoji);
        messageEmbed.react(yellowTeamEmoji);
        messageEmbed.react(purpleTeamEmoji);
        messageEmbed.react(blueTeamEmoji);
        messageEmbed.react(whiteTeamEmoji);
        messageEmbed.react(greenTeamEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).role.add(redTeamRole);
                }
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).role.add(yellowTeamRole);
                }
                if (reaction.emoji.name === purpleTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(purpleTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(blueTeamRole);
                }
                if (reaction.emoji.name === whiteTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(whiteTeamRole);
                }
                if (reaction.emoji.name === greenTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(greenTeamRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === redTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(redTeamRole);
                }
                if (reaction.emoji.name === yellowTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(yellowTeamRole);
                }
                if (reaction.emoji.name === purpleTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(purpleTeamRole);
                }
                if (reaction.emoji.name === blueTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(blueTeamRole);
                }
                if (reaction.emoji.name === whiteTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(whiteTeamRole);
                }
                if (reaction.emoji.name === greenTeamEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(greenTeamRole);
                }
            } else {
                return;
            }
        });
    }
 
}   