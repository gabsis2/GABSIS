const axios = require('axios');
const Discord = require('discord.js');
const moment = require('moment');
module.exports = {
    name: 'userinfo',
    description: 'UserInfo Command',
    aliases: ['user', 'info', 'ui'],
    execute(client, message, args){
        const user = message.mentions.users.first();
        const user2 = !message.mentions.users.first();
        if (user2){
            axios.get(`https://discord.com/api/users/${message.author.id}`, {
                headers: {
                    Authorization: `Bot ${client.token}`,
                },
            })
            .then((res) => {
                const { banner, accent_color } = res.data;
                const extension = banner.startsWith("a_") ? '.gif' : '.png';
                    const url = `https://cdn.discordapp.com/banners/${message.author.id}/${banner}${extension}`;

            const embed = new Discord.MessageEmbed()
            .setTitle('Your Avatar Link')
            .setAuthor(`${message.author.username}'s   Banner    =>`,message.author.displayAvatarURL({dynamic : true}),url)
            .addFields({name: 'Joined At:',value: `${moment(message.member.joinedAt).format('D/M/YYYY | h:mm:ss A')} (${(moment(message.member.joinedAt).fromNow())})` ,inline: true})
            .addFields({name: 'Created At:',value: `${moment(message.author.createdAt).format('D/M/YYYY | h:mm:ss A')} (${(moment(message.author.createdAt).fromNow())})` ,inline: false})
            .addField('+*','[*Tnajem Zeda Tabaath* \n **(**G6-userinfo **or** G6-user **or** G6-ui**)** \n *Bsh Tkharejlak Kima Heka*]')
            .setThumbnail(url)
            .setColor('#FF0000')
            .setImage(message.author.displayAvatarURL({size : 256 , dynamic : true}))
            .setURL(message.author.displayAvatarURL({dynamic : true}))
            .setTimestamp()
            .setFooter("© GABSIS", "https://imgur.com/D06I1DN.gif")

            message.reply(embed);
            })
            
        }else if (user) {
            axios.get(`https://discord.com/api/users/${message.author.id}`, {
                headers: {
                    Authorization: `Bot ${client.token}`,
                },
            })
            .then((res) => {
                const { banner, accent_color } = res.data;
                const extension = banner.startsWith("a_") ? '.gif' : '.png';
                const url = `https://cdn.discordapp.com/banners/${message.mentions.users.first().id}/${banner}${extension}`;
            const mention = message.mentions.members.first();

            const embed = new Discord.MessageEmbed()
            .setTitle(` ${message.mentions.users.first().username}'s Avatar Link`)
            .setAuthor(`${message.mentions.users.first().username}'s   Banner    =>`,message.mentions.users.first().displayAvatarURL({dynamic : true}),url)
            .setImage(message.mentions.users.first().displayAvatarURL({size: 256 , dynamic : true} ))
            .addFields({name: 'Joined At:',value: `${moment(mention.joinedAt).format('D/M/YYYY | h:mm:ss A')} (${(moment(mention.joinedAt).fromNow())})` ,inline: true})
            .addFields({name: 'Created At:',value: `${moment(message.mentions.users.first().createdAt).format('D/M/YYYY | h:mm:ss A')} (${(moment(message.mentions.users.first().createdAt).fromNow())})` ,inline: false})
            .setThumbnail(url)
            .setColor('#FF0000')
            .setURL(message.mentions.users.first().displayAvatarURL({dynamic : true}))
            .setTimestamp()
            .setFooter("© ! G A B S I S#1978", "https://imgur.com/D06I1DN.gif")

            return message.reply(embed)
            })
        }
    }
}