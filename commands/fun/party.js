module.exports = {
    name: 'p',
    description: 'Sends back a party parrot.',
    execute(message, args) {
        let finalMessage = '';
        const parrots = [
            'https://cultofthepartyparrot.com/parrots/hd/dadparrot.gif',
            'http://cultofthepartyparrot.com/parrots/parrot.gif',
            'http://cultofthepartyparrot.com/parrots/fiestaparrot.gif',
            'http://cultofthepartyparrot.com/parrots/explodyparrot.gif',
            'http://cultofthepartyparrot.com/parrots/slomoparrot.gif',
            'http://cultofthepartyparrot.com/parrots/hd/dealwithitparrot.gif',
            'http://cultofthepartyparrot.com/parrots/tripletsparrot.gif',
        ];
        if (!args.length) {
            message.channel.send(
                parrots[Math.floor(Math.random() * parrots.length)]
            );
            return;
        }
        if (args.includes('shark') || args.includes('s')) {
            message.channel.send(
                'http://emojis.slackmojis.com/emojis/images/1450738632/246/leftshark.png'
            );
        }
        if (args.includes('dog') || args.includes('doge')) {
            message.channel.send(
                'https://cultofthepartyparrot.com/guests/congadoge.gif'
            );
        }
        if (args.includes('soviet') || args.includes('russia')) {
            message.channel.send(
                'https://cultofthepartyparrot.com/parrots/sovjetparrot.gif'
            );
        }
        if (args.includes('boom') || args.includes('explode')) {
            message.channel.send(parrots[3]);
        }
        if (args.includes('cool') || args.includes('awesome')) {
            message.channel.send(parrots[5]);
        }

        if (args.includes('parrot')) {
            message.channel.send(
                parrots[Math.floor(Math.random() * parrots.length)]
            );
        }
        //message.channel.send(parrots[0]);
        //message.channel.send(parrots[1]);
        //message.channel.send(parrots[2]); mark mark
        //message.channel.send(parrots[3]); mark mark
        //message.channel.send(parrots[4]);
        //message.channel.send(parrots[5]);
        //message.channel.send(parrots[6]); mark mark
        //message.channel.send(parrots[7]);
        //message.channel.send(parrots[8]); mark mark
        //message.channel.send(parrots[9]); mark mark
        //message.channel.send(parrots[10]);
        //message.channel.send(parrots[11]);
    },
};

//function choosePartyParrot(arg) {

//}
