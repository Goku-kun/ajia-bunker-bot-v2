// primary command handler: all the commands are handled here and then delegated to other specific handlers for separation of concerns.
function commandHandler(command, args, message) {
    switch (command) {
        case "help":
            helpHandler(message);
            break;
        case "":
            message.channel.send("Hello from the bot!");
            break;
        case "server":
            commandServerHandler(message);
            break;
        case "test":
            commandTestHandler(message, args);
            break;

        default:
            message.channel.send(
                "Command not found. Use `!ajia help` to view the help menu."
            );
    }
}

function commandServerHandler(message) {
    message.channel.send(`The name of the server is \`${message.guild.name}\``);
    return;
}

function helpHandler(message) {
    message.channel.send(`
------**Ajia Bunker Bot Guide**------

\`!ajia\`  sends a hello message
\`!ajia server\`  sends the name of the server
\`!ajia test foo\`  foo bar testing
       `);
}

function commandTestHandler(message, args) {
    if (!args.length) {
        return message.channel.send(`No arguments provided.`);
    }

    if (args[0] == "foo") {
        return message.channel.send(`bar`);
    }

    return message.channel.send(args);
}

module.exports = { commandHandler };
