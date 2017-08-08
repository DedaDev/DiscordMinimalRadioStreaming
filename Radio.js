const { Client } = require('discord.js');
const client = new Client();
var request = require('request');

let serverID = "" // server id (turn on developer mode on your discord, right click on server icon > copy id)
let channelID = "" //your channel id (turn on developer mode on your discord, right click on voice chanel > copy id)
let streamURL = "http://rockradio.kbcnet.rs:8025/;*.mp3" //link to the stream
let token = "" //your token

client.on('ready', () => {
	client.guilds.get(serverID).channels.get(channelID).join()
	.then(con => {
			con.playStream(request(streamURL))
	})
});
client.login(token);
