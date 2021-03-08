module.exports = {
    name: 'test',
    description: 'testing foo bar',
    execute(message, args) {
        if (!args.length) {
            return message.channel.send(`No arguments provided.`);
        }

        if (args[0] == 'foo') {
            return message.channel.send(`bar`);
        }

        return message.channel.send(args);
    },
};
