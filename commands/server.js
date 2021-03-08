module.exports = {
    name: 'server',
    description: 'prints the server name',
    execute(message, args) {
        message.channel.send(
            `The name of the server is \`${message.guild.name}\``
        );
        return;
    },
};
