const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });



client.on('ready', () => {
    console.log ('Logged in as $(client.user.tag}: ');

});

client.on('message' , msg => { 
    var a = [
        "```WHY BE THE [[Little Sponge]] WHO HATES ITS [[$4.99]] LIFE WHEN YOU CAN BE A [[BIG SHOT!!!]] [[BIG SHOT!!!!]] [[BIG SHOT!!!!!]]```",
        "```I USED TO BE NOTHING BUT THE E_MAIL GUY, NOW IM THE [[It Burns! Ow! Stop! Help Me! It Burns!]] GUY!```",
        "```DON'T BELIEVE [[Anything You See On TV!]] THE MAN'S A CRIMINAL, I TELL YOU!! A CRIMINAL!!```",
        "```TOO MANY EXCESS VACATION DAYS?? TAKE A GOD DAMN VACATION STRAIGHT TO HELL```",
        "```DON'T FORGET TO [Like and Subscribe] FOR MORE [Hyperlink Blocked]!```",
        "```TAKE THIS DEAL AND YOU WILL [[Die]]!! IT'S THAT GOOD```!!!",
        "```[[Amazed at thi5 amazing transformation? You too can]] HAVE A [[Communion]] WITH [[Unintelligble Laughter]]```",
        "```HOCHI MAMA!!!! I CAN FEEL THAT [Smooth Taste] ALREADY!!```",
        "```EVERY [Big], EVERY [Shot], EVERY [Hyperlink Blocked], ALL YOURS```",
        "```[[Warning! If you consent to the terms and agreements,]] [[OUR STORE is PERMANENTLY Closing Down!!]]```",
        "```HEY HEY HEY! I'VE NEVER SEEN A [HeartShapedObject] LIKE THAT BEFORE!! MY EYES ARE [[Burning]] LIKE [[DVDs of ANY movie at Half-pr1ce!]] I HAVE A VERY SPECIL [Deal] FOR YOU KID!```"
        ]
    if (msg.content === '!spam'){

        var random = Math.floor(Math.random() * 11)
        msg.channel.send(a[random])
        
        
    }
});
client.login('ODkyMDIzNjM3NjgxNTI4ODkz.YVG3wA.W5QvPnyPPWrEtkM-Y4JtnB3jdOI');