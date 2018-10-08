const commando = require('discord.js-commando');

class dropcommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'wherewedropping',
            group: 'random',
            memberName: 'wherewedropping',
            description: 'Tells you where to drop'
        });

    }

    async run(message, args) {
        var roll = Math.floor(Math.random() * 8) + 1;

        if (roll == 1){
            message.reply("Drop Tilted!")
        }
        if (roll == 2){
            message.reply("Drop Salty!")
        }
        if (roll == 3){
            message.reply("Drop Retail!")
        }
        if (roll == 4){
            message.reply("Drop Lucky!")
        }
        if (roll == 5){
            message.reply("Drop Greasy!")
        }
        if (roll == 6){
            message.reply("Drop Anarchy!")
        }
        if (roll == 7){
            message.reply("Drop Fatal!")
        }
        if (roll == 8){
            message.reply("Drop Pleasant!")
        }

    }
 }

module.exports = dropcommand;