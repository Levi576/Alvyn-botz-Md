//═══════════════════════════════════════════════════════//
//
//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀
//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 
//
//════════════════════════════//

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
// Register here : https://zenzapis.xyz\\

global.APIKeys = {
	'https://zenzapis.xyz': 'Your Apikey',
}

//customize settings\\
global.owner = ['+6285172446692']
global.premium = ['+6285172446692']
global.ownernomer = '+6285172446692'
global.ownername = 'levi'
global.botname = '𝐒𝐀𝐃𝐁𝐎𝐓-𝐌𝐃'
global.footer = '© levi'
global.ig = 'https://instagram.com/vynutzxx22?igshid=YmMyMTA2M2Y='
global.region = 'berau, Kalimantan timur'
global.sc = 'https://github.com/alvyn-vengeance/Alvyn-botz-Md'
global.myweb = 'https://chat.whatsapp.com/EvbHEi6YbSv7p97mJLB59B'
global.packname = '𝐒𝐀𝐃𝐁𝐎𝐓-𝐌𝐃'
global.author = 'levi'
global.sessionName = 'session'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '❏'
global.mess = {
    success: '✅ *Selesai*',
    admin: '🙅 *Fitur Khusus Admin Group!*',
    botAdmin: '🙏 *Bot Harus Menjadi Admin Terlebih Dahulu!*',
    owner: '🙅 *Fitur Khusus Owner Bot*',
    group: '👥 *Fitur hanya bisa digunakan didalam Grup, Silahkan Join Grup Bot : https://chat.whatsapp.com/EvbHEi6YbSv7p97mJLB59B*',
    private: '👤 *Fitur Digunakan Hanya Untuk Private Chat!*',
    bot: '❎ *Fitur Khusus Pengguna Nomor Bot*',
    wait: '⏳ *Loading...*',
    error: 'Error! Mungkin Limit Apikey Sudah Habis\nCoba Lagi Besok',
    endLimit: '⚠️ *Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12*',
}
    global.limitawal = {
    premium: "Infinity",
    free: 10,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('./GojoMedia/keqing.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
