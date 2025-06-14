const settings = require("../settings");
async function aliveCommand(sock, chatId) {
    try {
        const message = `*🤖 𝙵𝙰𝙻𝙰 𝙸 𝙲𝙰𝙽𝚃 𝚂𝙻𝙴𝙴𝙿 𝙾𝙺𝙴𝚈 𝙸 𝙰𝙼 𝚃𝙷𝙴 𝙹𝙰𝙼𝙴𝚂 𝙼𝙳 𝙱𝙾𝚃 *\n\n` +
                       `*Version:*𝚃𝚆𝙾\n` +
                       `*𝚂𝚃𝙰𝚃𝚄𝚂:* 𝙾𝙽𝙻𝙸𝙽𝙴\n` +
                       `Type *.menu* for full command list`;

        await sock.sendMessage(chatId, {
            text: message,
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363351424590490@newsletter',
                    newsletterName: 'JAMES MD',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' });
    }
}

module.exports = aliveCommand;