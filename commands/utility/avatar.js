module.exports = {
    name: 'avatar',
    description: 'sends back avatar of the user or the bot or the server',
    async execute(message, args) {
        if (args.includes('bot')) {
            try {
                let iconURL = message.client.user.avatarURL({
                    format: 'png',
                    dynamic: true,
                    size: 512,
                });
                message.channel.send(iconURL || 'Coming soon');
            } catch (error) {
                console.log(error.message);
            }
            return;
        }
        if (args.includes('server')) {
            try {
                let stringURL = await message.guild.iconURL({
                    format: 'png',
                    dynamic: true,
                    size: 512,
                });
                message.channel.send(stringURL);
            } catch (error) {
                message.reply('Guild has no Icon.');
                console.log(error.message);
            } finally {
                return;
            }
        }
        try {
            let authorAvatarURL = await message.author.displayAvatarURL({
                format: 'png',
                dynamic: true,
                size: 512,
            });
            message.channel.send(authorAvatarURL);
        } catch (error) {
            message.reply('You have no Avatar set.');
            console.log(error.message);
        } finally {
            return;
        }
    },
};
