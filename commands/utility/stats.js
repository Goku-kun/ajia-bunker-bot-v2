const Discord = require('discord.js');
module.exports = {
    name: 'stats',
    description: 'get server statistics',
    async execute(msg, args) {
        const Embed = new Discord.MessageEmbed();
        Embed.setTitle(`Server Stats`);
        const fetchedMembers = await msg.guild.members.fetch();
        let totalOnline = 0;
        for (let [key, value] of fetchedMembers) {
            if (value.user.presence.status == 'online') {
                totalOnline += 1;
            }
        }
        Embed.addField('Online Members', totalOnline);
        Embed.addField('Offline Members', msg.guild.memberCount - totalOnline);
        Embed.addField('Total Members', msg.guild.memberCount);
        msg.channel.send(Embed);
    },
};
