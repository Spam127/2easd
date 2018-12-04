const Discord = require("discord.js");
const client = new Discord.Client();



client.on("ready", () => {
console.log('By : m7md');
client.user.setPresence({
  status: 'dnd',
  game: { 
     type: 0,
     name: 'رويال القنة بذاتها',
     details: `رويال القمة والعظمة`,
     url: 'http://twitch.tv/M7md_Salih',
     state: `رويال القمة والعظمة`,
    application_id: '377479790195769345',
     assets: {
        small_image: `377480550207717376`,
        small_text: 'رويال القمة والعظمة',
        large_image: `377480353259978752`,
        large_text: `رويال القمة والعظمة` }

  }
    });
});
اقولها

client.login("NTE4MDA2NjUzMjQxNTI0MjQ1.Duf5wA.8SMIEJYJVQYfrGrUwjEbAzOBhqg");