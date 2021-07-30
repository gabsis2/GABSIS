
const Discord = require('discord.js');

    module.exports = {
        name: "unban",
        usage: 'G6-unban <userid> <reason>',
        description: "unbans a member from the server",
        
    
        async execute(message, args, client) {
            if(message.member.hasPermission('BAN_MEMBERS') || message.member.hasPermission('ADMINISTRATOR')){
    
                if(!message.member.hasPermission("BAN_MEMBERS")) return ;
                if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply('**Maeendakesh Permission Bsh Tneh L Ban **!.')
                let userid = args[0];
                if(!userid) return message.reply('**Hot ID ole Tagih Bsh Tnajem Tbanih** !');
                let reason = args.slice(1).join(" ");
                if(!reason) reason = "No Reason Mentioned !";
                if(userid === message.author.id) return message.reply("You cannot unban yourself !");

                let bans = await message.guild.fetchBans();
                if(bans.has(userid)){
                    message.guild.members.unban(userid)
                    message.channel.send(`**Successfully unbanned **${userid}!`);
                }else {
                    message.reply('**ID Mahuush Mawjuud F Server ole Mahuush Mbani** !');

                }    
    
            }else {
                message.delete();
            message.channel.send(`${message.author}\`\`\` \n Maeendakesh Permession Bsh Tneh l Ban l Shkun ! \n \`\`\``).then(message => message.delete({timeout: 4000}));
            }
        } 
    }