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

client.login("ODcwNjUwODQ5MTA0Mzg4MTI2.YQP2yg.-Sc-BOM0aK5sPbbcp-isSO_0PwU")
