const dotenv = require('dotenv');
const Discord = require('discord.js');
const fs = require('fs');
const { prefix, TOKEN } = require('./config.json');

dotenv.config();
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs
    .readdirSync('./commands')
    .filter((file) => file.endsWith('.js'));

// fetches all the filenames inside the commands folder and importing those modules for dynamic execution
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', function messageResponder(message) {
    if (
        message.content.substr(0, prefix.length + 1) != '!ajia ' ||
        message.author.bot
    ) {
        return;
    }

    var args = message.content.slice(prefix.length).trim().split(/ +/);
    var commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) {
        message.channel.send(
            'Command not found. Use `!ajia help` to view the help menu.'
        );
        return;
    }

    const command = client.commands.get(commandName);

    try {
        command.execute(message, args);
    } catch (error) {
        console.log(error.message);
        message.reply(
            `There was an error executing the \`${commandName}\` command.`
        );
    }
});

// only runs once the bot is alive.
client.once('ready', function readCallback() {
    console.log('Ready');
});

client.login(TOKEN);
