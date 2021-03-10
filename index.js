const dotenv = require('dotenv');
const Discord = require('discord.js');
const fs = require('fs');
const { prefix, TOKEN } = require('./config.js');

const intents = new Discord.Intents([
    Discord.Intents.NON_PRIVILEGED,
    'GUILD_MEMBERS',
]);
const client = new Discord.Client({ ws: { intents } });
client.commands = new Discord.Collection();

const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
    const commandFiles = fs
        .readdirSync(`./commands/${folder}`)
        .filter((file) => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(`./commands/${folder}/${file}`);
        client.commands.set(command.name, command);
    }
}

client.on('message', function messageResponder(message) {
    if (
        (message.content.substr(0, prefix.length + 1) != '!ajia ' &&
            message.content.substr(0, 3) != '!a ') ||
        message.author.bot
    ) {
        return;
    }
    if (message.content.substr(0, 3) == '!a ') {
        var args = message.content.slice(3).trim().split(/ +/);
    } else {
        var args = message.content.slice(prefix.length).trim().split(/ +/);
    }
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
