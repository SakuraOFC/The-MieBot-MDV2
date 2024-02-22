import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';
import { es } from "./lib/idiomas/total-idiomas.js"

global.botnumber = "" // Numero que se vera en la consola ej +595987138033
global.confirmCode = ""

global.owner = [
 ['595987138033', '🌸C𝖱𝖤𝖠𝖣𝖮𝖱A🌸', true], 
 ['595976126756', 'OWNER', true],
 ['595986637644', 'OWNER', true],
 ['595994836199'],
 ['595994825505'],
 ['595992216131'],
 ['595986224522'],
 ['595971253989']]

global.suittag = ['595994825505'];
global.prems = ['595971253989'];

global.lenguajeSK = es //idiomas el idioma predeterminado es español si quieres cambiarlo solo pon tu idioma preferido

global.packname = '𝑻𝒉𝒆-𝑴𝒊𝒆𝑩𝒐𝒕-𝑴𝑫𝑽2';
global.author = '𝑺𝒂𝒌𝒖𝒓𝒂-𝑶𝑭𝑪';
global.wm = '𝑻𝒉𝒆-𝑴𝒊𝒆𝑩𝒐𝒕-𝑴𝑫𝑽2';
global.titulowm = '𝑻𝒉𝒆-𝑴𝒊𝒆𝑩𝒐𝒕-𝑴𝑫𝑽2';
global.titulowm2 = `𝑺𝒂𝒌𝒖𝒓𝒂-𝑶𝑭𝑪`
global.igfg = '𝑺𝒂𝒌𝒖𝒓𝒂-𝑶𝑭𝑪';
global.wait = '*⏳ 𝑈𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜...*';
global.vs = '2.0.0';

global.imagen1 = fs.readFileSync('./Menu2.jpg');
global.imagen2 = fs.readFileSync('./src/nuevobot.jpg');
global.imagen3 = fs.readFileSync('./src/Pre Bot Publi.png');
global.imagen4 = fs.readFileSync('./Menu.png');
global.imagen5 = fs.readFileSync('./src/+18.jpg');
global.imagen6 = fs.readFileSync('./Menu3.png');

//Grupos
global.gp1 = 'https://chat.whatsapp.com/JiV3MmlAynCEMdDkDVQoLu'

global.gp2 = 'https://chat.whatsapp.com/JiV3MmlAynCEMdDkDVQoLu'

global.gp3 = 'https://chat.whatsapp.com/JiV3MmlAynCEMdDkDVQoLu'

global.gp4 = 'https://chat.whatsapp.com/JiV3MmlAynCEMdDkDVQoLu'

global.gp5 = 'https://chat.whatsapp.com/JiV3MmlAynCEMdDkDVQoLu'

global.channel = 'https://whatsapp.com/channel/0029VaNE7Vi4IBhD2aYT8N2O'

global.yt = 'https://www.youtube.com/@Sakura-ofc905'

global.mods = ['595986224522'];

global.support = 'AdrianOficial wa.me/595976126756'

//* *******Tiempo***************
global.d = new Date(new Date + 3600000);
global.locale = 'es';
global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('es', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('es', {month: 'long'});
global.año = d.toLocaleDateString('es', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});
//* ****************************
global.wm2 = `${dia} ${fecha}\nThe-MieBot-MDV2`;
global.gt = '𝑻𝒉𝒆-𝑴𝒊𝒆𝑩𝒐𝒕-𝑴𝑫𝑽2';
global.mysticbot = '𝑻𝒉𝒆-𝑴𝒊𝒆𝑩𝒐𝒕-𝑴𝑫𝑽2';
global.md = 'https://github.com/Sakura-OFC/The-MieBot-MDV2';
global.mysticbot = 'https://github.com/Sakura-OFC/The-MieBot-MDV2';
global.waitt = '*⏳ 𝑈𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜...*';
global.waittt = '*⏳ 𝑈𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜...*';
global.waitttt = '*⏳ 𝑈𝑛 𝑀𝑜𝑚𝑒𝑛𝑡𝑜...*';
global.nomorown = '595994836199';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];
global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';
global.botdate = `*[ 📅 ] Fecha:*  ${moment.tz('America/Mexico_City').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] Hora:* ${moment.tz('America/Mexico_City').format('HH:mm:ss')}`;
global.fgif = {key: {participant: '0@s.whatsapp.net'}, message: {'videoMessage': {'title': wm, 'h': `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./Menu.png')}}};
global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];
//* ************************

const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
