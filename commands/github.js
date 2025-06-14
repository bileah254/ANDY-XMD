async function githubCommand(sock, chatId) {
    const repoInfo = `*andy xmd*



*📢 Official Channel:*

https://whatsapp.com/channel/0029Vb5QadiKLaHkk0yUWT1b
_thank you_`;

    try {
        await sock.sendMessage(chatId, {
            text: repoInfo,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363351424590490@newsletter',
                    newsletterName: 'andy xmd',
                    serverMessageId: -1
                }
            }
        });
    } catch (error) {
        console.error('Error in github command:', error);
        await sock.sendMessage(chatId, { 
            text: '❌ Error fetching repository information.' 
        });
    }
}

module.exports = githubCommand; 
