const dotenv = require("dotenv");
const Discord = require("discord.js");
const { prefix, TOKEN } = require("./config.json");
const { commandHandler } = require("./handlerFile.js");

dotenv.config();
const client = new Discord.Client();

client.on("message", function messageResponder(message) {
    if (!message.content.startsWith(`${prefix}`) || message.author.bot) return;

    var args = message.content.slice(prefix.length).trim().split(/ +/);
    var command = args.shift().toLowerCase();

    commandHandler(command, args, message);
});

// only runs once the bot is alive.
client.once("ready", function readCallback() {
    console.log("Ready");
});

client.login(TOKEN);
