var Discord = require("discord.js");
var client = new Discord.Client();
var config = require("./config.json")


client.on("ready", () => {
    console.log("The Bot is ready")
});


client.on("message", message => {
    if (message.content === "Hello") return message.channel.send("Hi IM Bob")
})


client.login(config.token)