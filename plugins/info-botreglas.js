/*import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'*/
let handler = async (m, { conn, usedPrefix, command}) => {


let Reglas = ` ⚠️𝗥𝗘𝗦𝗣𝗘𝗧𝗔 𝗟𝗔𝗦 𝗥𝗘𝗚𝗟𝗔𝗦⚠️\n
1: ¡Nᴏ Lʟᴀᴍᴀʀ Aʟ Bᴏᴛ!,
2: ¡Nɪɴɢᴜɴ Mᴏᴛɪᴠᴏ Asᴇʀʟᴇ Sᴘᴀᴍ!,
3: ¡Cᴏɴᴛᴀᴄᴛᴀ A Lᴏs Cʀᴇᴀᴅᴏʀᴇs Sɪ Vᴇs Uɴ Eʀʀᴏʀ!,
4: ¡Nᴏ Esᴄʀɪʙᴀs Aʟ Pʀɪᴠᴀᴅᴏ Dᴇʟ Bᴏᴛ!,
5: ¡Rᴇsᴘᴇᴛᴀ Lᴏs Tᴇʀᴍɪɴᴏs Dᴇʟ Bᴏᴛ!,
6: ¡Nᴏ Iɴsᴜʟᴛᴇs Eʟ Bᴏᴛ!
${md}
`.trim()
await conn.sendFile(m.chat, imagen1, 'gata.mp4', Reglas)
}
handler.customPrefix = /reglas|Reglas|reglasbot, botreglas|uso, usobot|uso del bot/i
handler.command = new RegExp
handler.register = true
handler.exp = 70
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}