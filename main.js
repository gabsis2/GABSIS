const Discord = require('discord.js');


const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = 'G6-';

const fs = require('fs');
const { stringify } = require('querystring');
const { EventEmitter } = require('stream');



client.commands = new Discord.Collection();




const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on('ready', () => {
    const statuses = [
        () => `in ${client.guilds.cache.size} serveurs`,
        () => `G6-help `,
        () => `BY ! G A B S I S#1978`,
    
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'PLAYING'})
        i = ++i % statuses.length;

    }, 1e4)
    
})

client.once('ready', () => {
    console.log('GABSIS is Online !');
    client.user.setActivity('G6-help | {BY GABSIS !}', { type: 'PLAYING'},)
    .then(Presence => console.log(`Activity set to ${Presence.activities[0].name}`))
    .catch(console.error);
});



// client.on('guildMemberAdd', guildMember =>{
//     // let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Friend');
    
//     const embed = new Discord.MessageEmbed()
//         .setColor('RANDOM')
//         .setAuthor('*Welcome Message*','https://imgur.com/D06I1DN.gif')
//         .setDescription(`**Welcome To Our Server Guy** ♥ \n \n <@${guildMember.user.id}> \n \n \`Have Fun\`♥ \n ♥☺`)
//         .setImage('https://media1.tenor.com/images/857a9fed91255db5d4960ebe32501bbc/tenor.gif')
//         .setThumbnail(guildMember.user.displayAvatarURL({ dynamic : true}))
    
    
//     guildMember.guild.channels.cache.get('701998978522415164').send(`<@${guildMember.user.id}>, ♥`).then(msg => msg.delete({timeout: 5000}));
//     guildMember.guild.channels.cache.get('701998978522415164').send(embed);
    

//     //message.Embed = await message.channel.send(embed);
//     // guildMember.roles.add(welcomeRole);
    
//     // guildMember.guild.channels.cache.get('701998978522415164').send(` ***Welcome*** <@${guildMember.user.id}> Ye **Zabour** \n **Aaml Tala Ale** <#758304227738517555> **o** <#758419203853516840> **o** <#855826904584945684> **O  Reacti **. \n > \`\`\` 'Ahlaaaaa  -  Neeeeees' ❤️  \`\`\` \n https://tenor.com/view/jason-mantzoukas-the-house-greetings-welcome-gif-8225006`);
// });



client.on('message', kmsg => {
    const pmention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (kmsg.content.match(pmention)) {
      return kmsg.reply(` **I am Online ! ** \n \`\`\` MY PREFIX IS: ${prefix} \n Exemple : G6-help \`\`\` `)
    }
});




client.on('message', message => {
        if (message.content.includes('G6-owner')){
            const mentions = message.author;
            
            const embed = new Discord.MessageEmbed()
            .setTitle('Bot Developer Discord Link')
            .setURL('https://discord.gg/ZWPmgmnNz6')
            .setAuthor('! G A B S I S#1978','https://imgur.com/D06I1DN.gif')
            .addField(`*+`,`GABSIS(<@595755770054705152>)`)
            .setDescription('**Contact Owner/s Bot To Help You**')
            .setThumbnail('https://imgur.com/D06I1DN.gif')
            .setTimestamp()
            .setFooter("© ! G A B S I S#1978", "https://imgur.com/D06I1DN.gif")
            mentions.send(embed)
        }else{
            return;
        }
    
});










client.on('message', async message => {
    const isInvite = (guild, code) => new Promise((resolve) =>{
        guild.fetchInvites().then((invites) => {
            resolve(invites.some((value) => value[0] === code))
        })
    });
    const code = message.content.split('https://')  || message.content.includes('discord.gg/')[1];
    
    if (message.content.includes('https://') || message.content.includes('discord.gg/')) {
        if(message.member && !message.member.hasPermission("ADMINISTRATOR")) {
            if (message.member && !message.member.hasPermission("EMBED_LINKS")){ 
                const IsOurInvite = await isInvite(message.guild, code);
                if (!IsOurInvite) {
                    message.delete();
                    const embedInvitationWarning = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setAuthor('Oh No !','https://imgur.com/D06I1DN.gif')
                        .setDescription('***You Has Been Warned For Posting a Link***, \n *Maadesh Thabet Link Ken Ma Tchawer* **Admin** .')
                        .setThumbnail('https://imgur.com/D06I1DN.gif')
                        .setTimestamp()
                        .setFooter("© GABSIS", "https://imgur.com/D06I1DN.gif");
                    message.channel.send(`***Nooooo, ***${message.author}. You Need To Have \`EMBED_LINKS\` *Permission* To Post a Link :warning:`).then(message => message.delete({timeout: 20000}));
                    message.channel.send(embedInvitationWarning).then(message => message.delete({timeout: 20000}));
                };
            };
        }
    }
});






// client.on('message', message => {
//     if (message.member.hasPermission('757543220979695687')){
//     if (message.content === 'salem') {  
//       message.channel.send(`**🙋‍♂️Saleeeeeeem ${message.author}**, *Jawek behyy?*`);
//     }else if (message.content === 'slm') {
//         message.channel.send(`**🙋‍♂️Saleeeeeeem ${message.author}**, *Jawek behyy?*`)
//     }else if (message.content === 'ahla') {
//         message.channel.send(`**🙋‍♂️ahla bik ${message.author}**, *Jawek behyy?*`)
//     }else if (message.content === 'wa') {
//         message.channel.send(`**🙋‍♂️ouaaaaaaaa ${message.author}**, *Jawek behyy?*`)
//     }else if (message.content === 'ouaa') {
//         message.channel.send(`**🙋‍♂️Ouaaaaaa ${message.author}**, *Jawek behyy?*`)
//     }else if (message.content === 'gn') {
//         message.channel.send(`**🙋‍♂️gn ${message.author}**`)
//     }else if (message.content === 'bnj') {
//         message.channel.send(`**🙋‍♂️bnj ${message.author}**, *Jawek behyy?*`)
//     }else if (message.content === 'gm') {
//         message.channel.send(`**🙋‍♂️Good Morning ${message.author}**, *Jawek behyy?*`)
//     }else if (message.content === 'k zebi') {
//         message.channel.send(`**zab ${message.author} :( **, *abaath l 3alem ynayek ye vrooo*`)
//     }else if (message.content === 'hmd') {
//         message.channel.send(`**Nshlh Dyme Labeeeees ${message.author}** :heart: `)
//     }else if (message.content === 'hmdl') {
//         message.channel.send(`**Nshlh Dyme Labeeeees ${message.author}** :heart:`)
//     }else if (message.content === 'hmdlh') {
//         message.channel.send(`**Nshlh Dyme Labeeeees ${message.author}** :heart:`)
//     }else if (message.content === 'cv') {
//         message.channel.send(`**Nshlh Dyme Labeeeees ${message.author}** :heart:`)
//     }else if (message.content === 'cvp') {
//         message.channel.send(`:( **Labes Labes, __Baz Tw Teslek__ ${message.author}** :/`)
//     }
// }});



client.on('message', message => {
    if (message.content.startsWith('G6-hug')) { 
       let targetMember = message.mentions.members.first();
        if(!targetMember) return message.reply('**Lazmek Tagi Shkun ** ***!***');
           // message goes below!
        message.channel.send(`<@${targetMember.user.id}> you just got a hug From ${message.author} ! \n http://media.giphy.com/media/l41YdgwPTnuWO6tEI/giphy.gif`);
        process.setMaxListeners(0);
    }else if (message.content.startsWith('G6-bs')) { 
        let targetMember = message.mentions.members.first();
        if(!targetMember) return message.reply('**Lazmek Tagi Shkun ** ***!***');
            // message goes below!
        message.channel.send(`<@${targetMember.user.id}> you just got a **BiG Slap** From ${message.author} ! \n  http://media.tenor.com/images/1fb5398880c6ca133d8b96c51277db08/tenor.gif`);
        process.setMaxListeners(0);
    }else if (message.content.startsWith('G6-sme')) { 
        let targetMember = message.mentions.members.first();
        if(targetMember) return message.reply('**Lazmek maTagish Shkun ** ***!***');
            // message goes below!
        message.channel.send(`**[ ${message.author} ]**, you just **Slaped YourSelf**  http://78.media.tumblr.com/0b6649b17135bd8659a79080e530635f/tumblr_p9dyrbY5uS1vks592o1_400.gif`);
        process.setMaxListeners(0);
    }else if (message.content.startsWith('G6-ss')) { 
        let targetMember = message.mentions.members.first();
        if(!targetMember) return message.reply('**Lazmek Tagi Shkun ** ***!***');
            // message goes below!
        message.channel.send(`<@${targetMember.user.id}> you just got a **Small Slap** From ${message.author} ! \n . http://thumbs.gfycat.com/BiodegradableThreadbareDotterel-small.gif`);
        process.setMaxListeners(0);
    }
}); 




client.on('guildCreate', guild => {
    
    const embed = new Discord.MessageEmbed()
        .setTitle('NEW SERVER !')
        .addField('Guild INFO', `${guild.name} (${guild.id}) **${guild.memberCount} Members !**`)
        .addField('Owner INFO', `${guild.owner} (${guild.owner.id})`)
        .setFooter(`Currently in ${client.guilds.cache.size} guilds !`)
        .setTimestamp()
        .setColor('GREEN')
    client.channels.cache.get('871125010440388629').send(embed)
})

client.on('guildDelete', guild => {
    
    const embed = new Discord.MessageEmbed()
        .setTitle('Removed From Server !')
        .addField('Guild INFO', `${guild.name} (${guild.id}) **${guild.memberCount} Members !**`)
        .addField('Owner INFO', `${guild.owner} (${guild.owner.id})`)
        .setFooter(`Currently in ${client.guilds.cache.size} guilds !`)
        .setTimestamp()
        .setColor('RED')
    client.channels.cache.get('871125010440388629').send(embed)
})

client.on('guildCreate', guild => {
    let channelToSend;

    guild.channels.cache.forEach((channel) => {
        if (
            channel.type === 'text' &&
            !channelToSend && 
            channel.permissionsFor(guild.me).has('SEND_MESSAGES')
        )
        channelToSend = channel;
    });
    if (!channelToSend);
    const embed = new Discord.MessageEmbed()
        .setTitle(`Thank you for inviting ${client.user.username} BOT !`)
        .setColor('#7FFF00')
        .setAuthor(guild.name, guild.iconURL({dynamic: true}))
        .setDescription(`Use **${prefix}help** To See All The Commands I Have **!** \n \n [Created At : 18/6/2021]`)
        .setTimestamp()
        .setFooter('© ! G A B S I S#1978', client.user.displayAvatarURL());

    channelToSend.send(embed)
})




  


client.on('message', message => {
    if (message.content === 'ping') {  
      message.channel.send(`🏓Hey, ${message.author}. Your Ping Is ** ${Math.round(client.ws.ping)}ms**`);
    }
});
// client.on('message', message => {
    
//         if (message.content === 'gabsis') {  
//             message.channel.send(` 🙋‍♂️Hey, ${message.author}. ***Tw Ki Yshuuf Message Mtaak Tw Yjawbak ♥*** <a:GABSIS:853248873254223922> `);
//         }else if (message.content === 'gab6') {  
//             message.channel.send(` 🙋‍♂️Hey, ${message.author}. ***Tw Ki Yshuuf Message Mtaak Tw Yjawbak ♥*** <a:GABSIS:853248873254223922> `);
//         }else if (message.content === 'gab') {  
//             message.channel.send(` 🙋‍♂️Hey, ${message.author}. ***Tw Ki Yshuuf Message Mtaak Tw Yjawbak ♥*** <a:GABSIS:853248873254223922> `);
//         }else if (message.content === `! G A B S I S`) {  
//             message.channel.send(` 🙋‍♂️Hey, ${message.author}. ***Tw Ki Yshuuf Message Mtaak Tw Yjawbak ♥*** <a:GABSIS:853248873254223922> `);
//         }








// });







// client.on('message', message => {
//     if (message.content === '!') {
//         message.delete();
//         message.channel.send(` <@605388149639741451> Blhy Barra assba🙋‍♂️ `);
//     }
// });

// client.on('message', message => {
//     if (message.content === 'live') {
//         if (message.member.hasPermission('757543220979695687'))

//         message.channel.send(` 🙋‍♂️Hey, ${message.author} . \n GABSIS Mayhelesh live yhabet kn videos, \n o lien chaine louta ⤵️, \n https://www.youtube.com/GABSIS06 . <a:GABSIS:853248873254223922> `);
//     }
// });





// client.on('message', message => {
//     if (message.content === 'shbeha l 7ayet') {  
//         message.channel.send(` **KI ZEB ZEB ZEB ZEB ZEB ZEB ZEB ZEB ZEBY + 9A7BA ** `);
//       }
//     });



client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    // if (command === 'reactionrole') {
    //     client.commands.get('reactionrole').execute(message, args, Discord, client);
    // } 
    

    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    }
    else if (command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }
    else if (command === 'ban'){
        client.commands.get('ban').execute(message, args);
    }
    else if (command === 'unban'){
        client.commands.get('unban').execute(message, args);
    }else if (command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }else if (command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    
    }else if (command === 'help1'){
        client.commands.get('help1').execute(message, args);
    }else if (command === 'insta'){
        client.commands.get('insta').execute(message, args);
    }else if (command === 'yt'){
        client.commands.get('yt').execute(message, args);
    }else if (command === 'strike'){
        client.commands.get('strike').execute(message, args);
    }else if (command === 'strike2'){
        client.commands.get('strike2').execute(message, args);
    }else if (command === 'strike3'){
        client.commands.get('strike3').execute(message, args);
    }else if (command === 'gabsis'){
        client.commands.get('gabsis').execute(message, args);
    }else if (command === 'logogif'){
        client.commands.get('logogif').execute(message, args);
    }else if (command === 'logo'){
        client.commands.get('logo').execute(message, args);
    // }else if (command === 'banner'){
    //     client.commands.get('banner').execute(message, args);
    }else if (command === 'cmds'){
        client.commands.get('cmds').execute(message, args);
    }else if (command === 'sm'){
        client.commands.get('sm').execute(message, args);
    }else if (command === 'suggestions'){
        client.commands.get('suggestions').execute(message, args);
    //} else if (command === 'dm'){
    //     client.commands.get('dm').execute(message, args);
    }else if (command === 'userinfo' || command === 'user' || command === 'ui' || command === 'info' ){
        client.commands.get('userinfo').execute(client, message, args);
    }else if (command === 'serverinfo' || command === 'server' || command === 'si' || command === 'srvr' ){
        client.commands.get('serverinfo').execute(client, message, args);
    }else if (command === 'setup-suggestions'){
        client.commands.get('setup-suggestions').execute(message, args);
    }else if (command === 'help'){
        client.commands.get('help').execute(message, args);
    }else if (command === 'lock'){
        client.commands.get('lock').execute(message, args);
    }else if (command === 'unlock'){
        client.commands.get('unlock').execute(message, args);
    }else if (command === 'modcmds'){
        client.commands.get('modcmds').execute(message, args);
    }






    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }
});




  
  



client.login('ODU1NTQxMjY1MDg4Nzc0MTQ0.YMz-5A.3ILmxwPWG9hZANgYBzS4qC1CFv8');



