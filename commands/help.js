const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, channelLink) {
    const helpMessage = `
  ╔══════════════╗
    *JAMES-MD BOT*  
   Version: *1*
   by ©james
╔══════════════════╗
 *General Commands*:
║  help or .menu
║ ping
║ alive
║ tts <text>
║ owner
║ joke
║ quote
║ fact
║ weather <city>
║ news
║ attp <text>
║ lyrics <song_title>
║ 8ball <question>
║ groupinfo
║ staff or .admins 
║ vv
║ pair or .rent
║ trt <text> <lang>
║ ss <link>
╚═══════════════════╝ 

╔═══════════════════╗
 *Admin Commands*:
║ ban @user
║ promote @user
║ demote @user
║ mute <minutes>
║ unmute
║ delete or .del
║ kick @user
║ warnings @user
║ warn @user
║ antilink
║ antibadword
║ clear
║ tag <message>
║ tagall
║ chatbot
║ resetlink
╚═══════════════════╝

╔═══════════════════╗
 *Owner Commands*:
║ mode
║ autostatus
║ clearsession
║ antidelete
║ cleartmp
║ setpp <reply to image>
╚═══════════════════╝

╔═══════════════════╗
 *Image/Sticker Commands*:
║ blur 
║ simage 
║ sticker 
║ tgsticker 
║ meme
║ take 
║ emojimix 
╚═══════════════════╝  

╔═══════════════════╗
 *Game Commands*:
║ tictactoe @user
║ hangman
║ guess <letter>
║ trivia
║ answer <answer>
║ truth
║ dare
╚═══════════════════╝

╔═══════════════════╗
 *AI Commands*:
║ gpt <question>
║ gemini <question>
╚═══════════════════╝

╔═══════════════════╗
 *Fun Commands*:
║ compliment @user
║ insult @user
║ flirt 
║ character @user
║ wasted @user
║ ship @user
║ simp @user
║ stupid @user [text]
╚═══════════════════╝

╔═══════════════════╗
 *Textmaker*:
║ metallic <text>
║ ice <text>
║ snow <text>
║ impressive <text>
║ matrix <text>
║ light <text>
║ neon <text>
║ devil <text>
║ purple <text>
║ thunder <text>
║ leaves <text>
║ 1917 <text>
║ arena <text>
║ hacker <text>
║ sand <text>
║ blackpink <text>
║ glitch <text>
║ fire <text>
╚═══════════════════╝

╔═══════════════════╗
 *Downloader*:
║ play <song_name>
║ song <song_name>
║ instagram <link>
║ facebook <link>
║ tiktok <link>
╚═══════════════════╝

╔═══════════════════╗
 *Github Commands:*
║ git
║ github
║ sc
║ script
║ repo
╚═══════════════════╝

Join our channel for updates:`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363351424590490@newsletter',
                        newsletterName: 'james md updates',
                        serverMessageId: -1
                    }
                }
            });
        } else {
            console.error('Bot image not found at:', imagePath);
            await sock.sendMessage(chatId, { 
                text: helpMessage,
                contextInfo: {
                    forwardingScore: 1,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363351424590490@newsletter',
                        newsletterName: 'james md updates',
                        serverMessageId: -1
                    } 
                }
            });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
