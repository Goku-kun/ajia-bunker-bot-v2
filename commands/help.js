module.exports = {
    name: 'help',
    description: 'prints a help guide',
    execute(message, args) {
        message.channel.send(`
------**Ajia Bunker Bot Guide**------

\`!ajia\`  sends a hello message
\`!ajia server\`  sends the name of the server
\`!ajia test foo\`  foo bar testing
       `);
    },
};
