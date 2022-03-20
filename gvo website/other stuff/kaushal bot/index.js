const Discord = require('discord.js')
const bot = new Discord.Client();
const token = 'NjA4NTM5MjkwMTU4MzY2NzIx.XUpqSQ.kfw7Mdczutu2KSnMGTITuZqkweU'
var masterAddyList;

bot.on('ready',() => {
    console.log('bruh we running now ');
});

bot.on('message', message => {
    if (message.author.bot) return;

    if (message.content === '!help') {
      message.reply({embed: {
            color: 0x0099ff,
                author: {
                    name: 'Commands!',
                    icon_url: bot.user.avatarURL
                },
            description: 'List of different commands available to use!',
            fields: [
                {
                    name: '!jigaddy [Your Address] [Number of Jigged Addresses]',
                    value: 'Jigs address \n Example: !jigAddy 12345 maple street 10',

                },
                {
                    name: '!undft @catchall [number of accounts]',
                    value: 'Creates an Undefeated account using your catchall \n Example: !unfdt @gvo.club 5',

                },
                {
                    name: '!bdga @catchall [number of accounts]',
                    value: 'Creates an Bodega account using your catchall \n Example: !bdga @gvo.club 10',
                },

            ],
            timestamp: new Date(),
              footer: {
                  icon_url: bot.user.avatarURL,
                  text: "©GVOchat"
                }
            }

          });
        }

    // ADDRESS JIG
    if (message.content.substring(0,8) === '!jigaddy') {
        if(cleanNumber(message.content.substring(message.content.length - 2, message.content.length)) === 'no'){
            message.reply({

                "embed": {

                    "color": 156325,
                    "timestamp": new Date(),
                    "footer": {
                        "icon_url": bot.user.avatarURL,
                        "text": "@GVOchat"
                    },


                    "author": {
                        "name": "GVO AIO",
                        "icon_url": bot.user.avatarURL
                    },
                    "fields": [
                        {
                            "name": "BRUH WTF",
                            "value": "Failed to provide number of addresses"
                        }

                    ]
                }
            })
        }else{
        
            console.log(cleanNumber('a1'))
            var alphabet = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ").split("");
            var numOfAddy = cleanNumber(message.content.substring(message.content.length - 2, message.content.length));

            var address = message.content.substring(8, message.content.length - 2);
            var listOfAddy = [];
            var stringOfAddy = '';
            
            for (var i = 0; i < numOfAddy; i++) {
                listOfAddy.push(randomString() + address)
            }
            for (var z = 0; z < listOfAddy.length; z++) {
                stringOfAddy += listOfAddy[z] + '\n'
            }

            message.reply({

                "embed": {

                    "color": 156325,
                    "timestamp": new Date(),
                    "footer": {
                        "icon_url": bot.user.avatarURL,
                        "text": "@GVOchat"
                    },


                    "author": {
                        "name": "GVO AIO",
                        "icon_url": bot.user.avatarURL
                    },
                    "fields": [
                        {
                            "name": "Addresses!",
                            "value": stringOfAddy
                        }

                    ]
                }
            })
        }

    }
    //checks if string provided contains numbers and then returns them as number type :)
    function cleanNumber(string){
        if(/^\d+$/.test(string)){
            return Number(string)
        }else{
            return 'no'
        }
    }
    // gens 4 random letters in a string
    function randomString(){
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var charactersLength = characters.length;
        for ( var i = 0; i < 4; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }



    //undefeated acc gen
    if(message.content.substring(0,6) === '!undft'){
        if(cleanNumber(message.content.substring(message.content.length - 2, message.content.length)) === null){
            message.reply({

                "embed": {

                    "color": 156325,
                    "timestamp": new Date(),
                    "footer": {
                        "icon_url": bot.user.avatarURL,
                        "text": "@GVOchat"
                    },


                    "author": {
                        "name": "GVO AIO",
                        "icon_url": bot.user.avatarURL
                    },
                    "fields": [
                        {
                            "name": "BRUH WTF",
                            "value": "Failed to provide number of addresses"
                        }

                    ]
                }
            })
        }else {
            var catchall = message.content.substring(6, message.content.length - 2)
            console.log(catchall)
            var numOfAcct = cleanNumber(message.content.substring(message.content.length - 2, message.content.length));
        }
    }



    //variant builder



    
});






bot.login(token);
