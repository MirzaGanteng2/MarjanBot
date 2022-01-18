ppimg = await zero.getProfilePicture(
`${anu.participants[0].split("@")[0]}@c.us`
)
} catch {
ppimg =
"https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
}
let buff = await getBuffer(
`https://gatauajg.yogipw.repl.co/api/demote?name=${anu_user.notify}&msg=selamat%20menjadi%20admin&mem=5&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
)
teks = `@${num.split("@")[0]} Telah didemote`
zero.sendMessage(mdata.id, teks, MessageType.text)
}
} catch (e) {
console.log(e)
}
})
   
zero.on("group-update", async (anu) => {
metdata = await zero.groupMetadata(anu.jid);
if (anu.announce == "false") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗢𝗽𝗲𝗻𝗲𝗱 ] -\n\n𝑮𝒓𝒐𝒖𝒑 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊 𝑩𝒖𝒌𝒂 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏\n𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑺𝒆𝒎𝒖𝒂 𝑴𝒆𝒎𝒃𝒆𝒓 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒊𝒓𝒊𝒎 𝑷𝒆𝒔𝒂𝒏`;
zero.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ Group Opened ] - In ${metdata.subject}`);
} else if (anu.announce == "true") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗖𝗹𝗼𝘀𝗲𝗱 ] -\n\n𝑮𝒓𝒐𝒖𝒑 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊 𝑻𝒖𝒕𝒖𝒑 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏\n𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑯𝒂𝒏𝒚𝒂 𝑨𝒅𝒎𝒊𝒏 𝒀𝒂𝒏𝒈 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒊𝒓𝒊𝒎 𝑷𝒆𝒔𝒂𝒏`;
zero.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ Group Closed ] - In ${metdata.subject}`);
} else if (!anu.desc == "") {
tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\n𝑫𝒆𝒔𝒌𝒓𝒊𝒑𝒔𝒊 𝑮𝒓𝒐𝒖𝒑 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊𝒖𝒃𝒂𝒉 𝑶𝒍𝒆𝒉 𝑨𝒅𝒎𝒊𝒏 @${
anu.descOwner.split("@")[0]
}\n𝑫𝒆𝒔𝒌𝒓𝒊𝒑𝒔𝒊 𝑩𝒂𝒓𝒖 : ${anu.desc}`;
zero.sendMessage(metdata.id, teks, MessageType.text, {
contextInfo: { mentionedJid: [tag] },
});
console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗗𝗲𝘀𝗰𝗿𝗶𝗽𝘁𝗶𝗼𝗻 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝑰𝒏 ${metdata.subject}`);
} else if (anu.restrict == "false") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\n𝑬𝒅𝒊𝒕 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒇𝒐 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊𝒃𝒖𝒌𝒂 𝑼𝒏𝒕𝒖𝒌 𝑴𝒆𝒎𝒃𝒆𝒓\n𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑺𝒆𝒎𝒖𝒂 𝑴𝒆𝒎𝒃𝒆𝒓 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒆𝒅𝒊𝒕 𝑰𝒏𝒇𝒐 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒊`;
zero.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝑰𝒏 ${metdata.subject}`);
} else if (anu.restrict == "true") {
teks = `- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] -\n\n𝑬𝒅𝒊𝒕 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒇𝒐 𝑻𝒆𝒍𝒂𝒉 𝑫𝒊𝒕𝒖𝒕𝒖𝒑 𝑼𝒏𝒕𝒖𝒌 𝑴𝒆𝒎𝒃𝒆𝒓\n𝑺𝒆𝒌𝒂𝒓𝒂𝒏𝒈 𝑯𝒂𝒏𝒚𝒂 𝑨𝒅𝒎𝒊𝒏 𝑮𝒓𝒐𝒖𝒑 𝒀𝒂𝒏𝒈 𝑫𝒂𝒑𝒂𝒕 𝑴𝒆𝒏𝒈𝒆𝒅𝒊𝒕 𝑰𝒏𝒇𝒐 𝑮𝒓𝒐𝒖𝒑 𝑰𝒏𝒊`;
zero.sendMessage(metdata.id, teks, MessageType.text);
console.log(`- [ 𝗚𝗿𝗼𝘂𝗽 𝗦𝗲𝘁𝘁𝗶𝗻𝗴 𝗖𝗵𝗮𝗻𝗴𝗲 ] - 𝙄𝙣 ${metdata.subject}`);
}
})

antical = true
zero.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
zero.sendMessage(call, `*Sorry ${zero.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => zero.blockUser(call, "add"))
})


zero.on('CB:Blocklist', json => {
if (blocked.length > 2) return
for (let i of json[1].blocklist) {
blocked.push(i.replace('c.us','s.whatsapp.net'))
}
})
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
 
function nocache(module, cb = () => { }) {
console.log('Module', `'${module}'`, 'Sekarang Sedang Diawasi Untuk Perubahan')
fs.watchFile(require.resolve(module), async () => {
await uncache(require.resolve(module))
cb(module)
})
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
 
function uncache(module = '.') {
return new Promise((resolve, reject) => {
try {
delete require.cache[require.resolve(module)]
resolve()
} catch (e) {
reject(e)
}
})
}

starts()
