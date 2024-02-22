const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = true;
  m.reply('*[🚫]𝗖𝗵𝗮𝘁 𝗕𝗮𝗻𝗲𝗮𝗱𝗼 𝗖𝗼𝗻 𝗘𝘅𝗶𝘁𝗼,𝗡𝗼 𝗣𝗼𝗱𝗿𝗮𝗻 𝗨𝘀𝗮𝗿 𝗮𝗹 𝗯𝗼𝘁 𝗵𝗮𝘀𝘁𝗮 𝗾𝘂𝗲 𝘀𝗲𝗮 𝗱𝗲𝘀𝗯𝗮𝗻𝗲𝗮𝗱𝗼*');
};
handler.help = ['banchat'];
handler.tags = ['owner'];
handler.command = /^banchat$/i;
handler.rowner = true;
export default handler;
