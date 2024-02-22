let media = './Menu7.png'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '💦', key: m.key } })
let str = `𖣔✫𝐺𝑅𝑈𝑃𝑂 𝑂𝐹𝐼𝐶𝐼𝐴𝐿✫𖣔

▢ 𝘚𝘢𝘬𝘶𝘳𝘢𝘉𝘰𝘵𝘓𝘪𝘵𝘦 | 𝘖𝘍𝘊
${gp1}

🌤𝐶𝐴𝑁𝐴𝐿 𝑂𝐹𝐼𝐶𝐼𝐴𝐿

▢ Canal The-MieBot-MDV2
${channel}`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.command = /^grupos|linksk|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler