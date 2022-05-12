const rpc = require("discord-rpc")
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', async() => {
   client.setActivity({
	details : "Yes! IM ChinGH#2459",
	state: "Smileeeee",
	startTimestamp: new Date(),
	largeImageKey : "wee",
	largeImageText : "CGH DC",
	smallImageKey : "sus",
	smallImageText: "SUSSY-EVER",
	buttons : [
          {
		label : "Invite CGH Bot" , 
		url : "https://discord.com/api/oauth2/authorize?client_id=837564399833055272&permissions=4063558227&scope=bot%20applications.commands",
	   },
	   {
		label : "CGH Support Server",
		url : "https://discord.gg/ZaExNbkjPt",
	   }
	 ]
    })
})
console.log('\x1b[33mClient is ready. Presence status is ready to use.\x1b[0m');
client.login({ clientId : "837564399833055272" }).catch(console.error);