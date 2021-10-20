const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "d?"
const fs = require('fs');



client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.fetch = require('node-fetch');

["command", "event"].forEach(handler => {
    require(`./Handlers/${handler}`)(client);
});

client.login("")
