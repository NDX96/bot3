const moment = require("moment-timezone");
const fs = require("fs");

moment.tz.setDefault("Asia/Jakarta").locale("id");

let setting = JSON.parse(fs.readFileSync('./config.json'))
const { getLimit, getBalance, cekGLimit } = require("../lib/limit")

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)

function toCommas(x) {
	x = x.toString()
	var pattern = /(-?\d+)(\d{3})/;
     while (pattern.test(x))
	   x = x.replace(pattern, "$1.$2");
	return x;
}

exports.allmenu = (sender, prefix, pushname, isOwner, isPremium, balance, limit, limitCount, glimit, gcount, ucapanWaktu) => {
	return `${ucapanWaktu} ${pushname !== undefined ? pushname : 'Kak'}
baca listnya yang bener ya>:)

${readmore}

${prefix}menu
${prefix}owner
${prefix}script
${prefix}donasi
${prefix}speed
${prefix}runtime
${prefix}cekprem
${prefix}listprem
${prefix}sticker
${prefix}stickerwm
${prefix}takesticker
${prefix}toimg
${prefix}tovid
${prefix}tomp3
${prefix}upload
${prefix}getquotedmsg
${prefix}tagall
${prefix}hidetag
${prefix}play
${prefix}tiktok
${prefix}ytmp4
${prefix}ytmp3
${prefix}getvideo
${prefix}getmusic
${prefix}quote
${prefix}randomfakta
${prefix}cecan
${prefix}cogan
${prefix}waifu
${prefix}pinterest
${prefix}ytsearch
${prefix}tebakgambar
${prefix}kuis
${prefix}nyerah
${prefix}topbalance
${prefix}buylimit
${prefix}buyglimit
${prefix}transfer
${prefix}limit
${prefix}balance
${prefix}linkgrup
${prefix}setnamegc
${prefix}setdesc
${prefix}group
${prefix}revoke
${prefix}delete
${prefix}promote
${prefix}demote
${prefix}add
${prefix}kick
${prefix}antilink
${prefix}welcome
> evalcode
x evalcode-2
$ executor
${prefix}exif
${prefix}self
${prefix}public
${prefix}leave
${prefix}join
${prefix}addprem
${prefix}delprem
${prefix}resetlimit
${prefix}broadcast

Library : *Baileys-MD*.
Prefix : ( ${prefix} )
Tanggal Server : ${moment.tz('Asia/Jakarta').format('DD/MM/YY')}
Waktu Server : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB

User Status : ${isOwner ? 'Owner' : isPremium ? 'Premium' : 'Free'}
Limit Harian : ${isOwner ? '-' : isPremium ? 'Unlimited' : getLimit(sender, limitCount, limit)}
Limit Game : ${isOwner ? '-' : cekGLimit(sender, gcount, glimit)}
Balance : $${toCommas(getBalance(sender, balance))}
`
}