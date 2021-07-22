const Discord = require('discord.js');


const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION" ]});

const prefix = 'G6-';

const fs = require('fs');
const { stringify } = require('querystring');

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
        () => `BY !                    G A B S I S#1978`,
        () => `Insta : gabsis._`
    ]
    let i = 0
    setInterval(() => {
        client.user.setActivity(statuses[i](), {type: 'PLAYING'})
        i = ++i % statuses.length
    }, 1e4)
})


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
    if (message.content === 'salem') {  
      message.channel.send(`**🙋‍♂️Saleeeeeeem ${message.author}**, *Jawek behyy?*`);
    }else if (message.content === 'slm') {
        message.channel.send(`**🙋‍♂️Saleeeeeeem ${message.author}**, *Jawek behyy?*`)
    }else if (message.content === 'ahla') {
        message.channel.send(`**🙋‍♂️ahla bik ${message.author}**, *Jawek behyy?*`)
    }else if (message.content === 'wa') {
        message.channel.send(`**🙋‍♂️ouaaaaaaaa ${message.author}**, *Jawek behyy?*`)
    }else if (message.content === 'ouaa') {
        message.channel.send(`**🙋‍♂️Ouaaaaaa ${message.author}**, *Jawek behyy?*`)
    }else if (message.content === 'gn') {
        message.channel.send(`**🙋‍♂️gn ${message.author}**`)
    }else if (message.content === 'bnj') {
        message.channel.send(`**🙋‍♂️bnj ${message.author}**, *Jawek behyy?*`)
    }else if (message.content === 'gm') {
        message.channel.send(`**🙋‍♂️Good Morning ${message.author}**, *Jawek behyy?*`)
    }else if (message.content === 'k zebi') {
        message.channel.send(`**zab ${message.author} :( **, *abaath l 3alem ynayek ye vrooo*`)
    }else if (message.content === 'hmd') {
        message.channel.send(`**Nshlh Dyme Labeeeees ${message.author}** :heart: `)
    }else if (message.content === 'hmdl') {
        message.channel.send(`**Nshlh Dyme Labeeeees ${message.author}** :heart:`)
    }else if (message.content === 'hmdlh') {
        message.channel.send(`**Nshlh Dyme Labeeeees ${message.author}** :heart:`)
    }else if (message.content === 'cv') {
        message.channel.send(`**Nshlh Dyme Labeeeees ${message.author}** :heart:`)
    }else if (message.content === 'cvp') {
        message.channel.send(`:( **Labes Labes, __Baz Tw Teslek__ ${message.author}** :/`)
    }
  });
  


client.on('message', message => {
    if (message.content === 'ping') {  
      message.channel.send(`🏓Hey, ${message.author}. Your Ping Is ** ${Math.round(client.ws.ping)}ms**`);
    }
  });
client.on('message', message => {
    if (message.content === 'gabsis') {  
      message.channel.send(` 🙋‍♂️Hey, ${message.author}. ***Tw Ki Yshuuf Message Mtaak Tw Yjawbak ♥*** <a:GABSIS:853248873254223922> `);
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
    }else if (command === 'gabsis'){
        client.commands.get('gabsis').execute(message, args);
    }else if (command === 'logogif'){
        client.commands.get('logogif').execute(message, args);
    }else if (command === 'logo'){
        client.commands.get('logo').execute(message, args);
    }else if (command === 'banner'){
        client.commands.get('banner').execute(message, args);
    }else if (command === 'cmds'){
        client.commands.get('cmds').execute(message, args);
    }else if (command === 'sm'){
        client.commands.get('sm').execute(message, args);
    }
    

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    } else if (command == 'test'){
        client.commands.get('test').execute(message, args);
    }else if (command == 'ridh'){
        client.commands.get('ridh').execute(message, args);
    }
});




  
  



client.login('ODU1NTQxMjY1MDg4Nzc0MTQ0.YMz-5A.HK7BaU8vM6U_ARRI93oow_MUyVk');



