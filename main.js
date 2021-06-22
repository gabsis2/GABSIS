const Discord = require('discord.js');


const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = 'G6-';

const fs = require('fs');

client.commands = new Discord.Collection();




const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}




client.once('ready', () => {
    console.log('GABSIS is Online !');
    client.user.setActivity('G6-help | {BY GABSIS !}', { type: 'PLAYING'},)
    .then(Presence => console.log(`Activity set to ${Presence.activities[0].name}`))
    .catch(console.error);
});
client.on('guildMemberAdd', guildMember =>{
    let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'Friend');
 
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('701998978522415164').send(` ***Welcome*** <@${guildMember.user.id}> Ye **Zabour** \n **Aaml Tala Ale** <#758304227738517555> **o** <#758419203853516840> **o** <#855826904584945684> **O  Reacti **. \n > \`\`\` 'Ahlaaaaa  -  Neeeeees' ❤️  \`\`\` \n https://tenor.com/view/jason-mantzoukas-the-house-greetings-welcome-gif-8225006`)
});
client.on('message', kmsg => {
    const pmention = new RegExp(`^<@!?${client.user.id}>( |)$`);
    if (kmsg.content.match(pmention)) {
      return kmsg.reply(` \`\`\` MY PREFIX IS: ${prefix} \n Exemple : G6-help \`\`\` `)
    }
});



client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    if (command === 'reactionrole') {
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    } 
    

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
    }else if (command === 'music'){
        client.commands.get('music').execute(message, args);
    }else if (command === 'help'){
        client.commands.get('help').execute(message, args);
    }else if (command === 'insta'){
        client.commands.get('insta').execute(message, args);
    }else if (command === 'yt'){
        client.commands.get('yt').execute(message, args);
    }else if (command === 'discord'){
        client.commands.get('discord').execute(message, args);
    }else if (command === 'strike'){
        client.commands.get('strike').execute(message, args);
    }else if (command === 'strike2'){
        client.commands.get('strike2').execute(message, args);
    }else if (command === 'strike3'){
        client.commands.get('strike3').execute(message, args);
    }
    

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'test'){
        client.commands.get('test').execute(message, args);
    }else if (command == 'ridh'){
        client.commands.get('ridh').execute(message, args);
    }
});




client.login('ODU1NTQxMjY1MDg4Nzc0MTQ0.YMz-5A.Te_liLU9KwcUqlk2zW44ZlwQ6Zg');



