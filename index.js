const rpc = require("discord-rpc") //Install discord-rpc package
const client = new rpc.Client({ transport: 'ipc' })

client.on('ready', async() => {
   client.setActivity({
	details : "Text here",
	state: "Text here",
	startTimestamp: new Date(),
	largeImageKey : "Text here / Image String URL",
	largeImageText : "Text here",
	smallImageKey : "Text here / Image String URL",
	smallImageText: "Text here",
	buttons : [
          {
		label : "Text here" , 
		url : "String url text",
	   },
	   {
		label : "Text here",
		url : "String URL text",
	   }
	 ]
    })
})
console.log('\x1b[33mClient is ready. Presence status is ready to use.\x1b[0m');
client.login({ clientId : "your bot id here" }).catch(console.error);
