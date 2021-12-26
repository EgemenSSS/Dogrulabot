const Discord = require("discord.js");
const client = new Discord.Client({
    fetchAllMembers: true
});
const ayarlar = require("./ayarlar.json");
client.queue = new Map();
const chalk = require("chalk");
const fs = require("fs");
const Jimp = require("jimp");
const db = require("quick.db");
const moment = require("moment");
require("./util/eventLoader")(client);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};
//EMİRHAN SARAÇ

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);

    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});
//EMİRHAN SARAÇ


//EMİRHAN SARAÇ


client.on("guildMemberAdd", async member => {

let zorluk = await db.fetch(`captchazorluk.${member.guild.id}`)  
if(!zorluk) return
let user = client.users.get(member.id)
if(user.bot) return
  
 let kanal = await db.fetch(`captchaKanal.${member.guild.id}`)   
let rol = await db.fetch(`captcharol.${member.guild.id}`)  

  
let kolay = ["https://resimhub.com/1/jWqXwa.png", "https://resimhub.com/1/9WrXxZ.png","https://resimhub.com/1/zaJlJG.png",
             "https://resimhub.com/1/AW0QdG.png", "https://resimhub.com/1/LGNJRG.png","https://resimhub.com/1/LGNJRG.png",
             "https://resimhub.com/1/Da8y8W.png","https://resimhub.com/1/pazXqG.png"
            ]


let orta = ["https://resimhub.com/1/zaJj9a.png",
  "https://resimhub.com/1/AW0j3Z.png",
            "https://resimhub.com/1/4Gvdna.png", "https://resimhub.com/1/pZPDJZ.png", "https://resimhub.com/1/EW3p9G.png", "https://resimhub.com/1/bW4xXW.png", 
            "https://resimhub.com/1/MW2Ela.png","https://resimhub.com/1/wGnXma.png","https://resimhub.com/1/LGA82W.png",
            "https://resimhub.com/1/dGXBJa.png","https://resimhub.com/1/daeXkZ.png"
           ]


let zor = ["https://resimhub.com/1/7GlXqG.png","https://resimhub.com/1/va7R5Z.png", "https://resimhub.com/1/AZOQ6W.png","https://resimhub.com/1/6GmXEW.png","https://resimhub.com/1/qGLNEa.png","https://resimhub.com/1/BaY10a.png","https://resimhub.com/1/pGjX9a.png",
           "https://resimhub.com/1/jWdXYW.png","https://resimhub.com/1/nZE4PG.png","https://resimhub.com/1/9WrXlZ.png","https://resimhub.com/1/jWqX5a.png","https://resimhub.com/1/bW4xLW.png","https://resimhub.com/1/EW3p5G.png","https://resimhub.com/1/pZPDnZ.png",
           "https://resimhub.com/1/4GvdPa.png","https://resimhub.com/1/va7RoZ.png"
          ]

 let s;
if(zorluk === "kolay") s = kolay  
if(zorluk === "orta") s = orta
if(zorluk === "zor") s = zor 
  
   let sonuc = (s[Math.floor(Math.random() * s.length)])
 let filtre = mes => mes.author.id === user.id;   
let beklenen;
  //KOLAY CAPTCHA
if(sonuc === "https://resimhub.com/1/LGNJRG.png") beklenen = "qdb"   
if(sonuc === "https://resimhub.com/1/Da8y8W.png") beklenen = "srd"   
if(sonuc === "https://resimhub.com/1/LGNJRG.png") beklenen = "koa"  
if(sonuc === "https://resimhub.com/1/pazXqG.png") beklenen = "cuq"   
if(sonuc === "https://resimhub.com/1/AW0QdG.png") beklenen = "cvi"   
if(sonuc === "https://resimhub.com/1/zaJlJG.png") beklenen = "sub"   
if(sonuc === "https://resimhub.com/1/9WrXxZ.png") beklenen = "rvs"   
if(sonuc === "https://resimhub.com/1/jWqXwa.png") beklenen = "dwi"   

  //ORTA CAPTCHA
  
  
    if(sonuc === "https://resimhub.com/1/zaJj9a.png") beklenen = "xnp"   


  if(sonuc === "https://resimhub.com/1/AW0j3Z.png") beklenen = "xnp"   
if(sonuc === "https://resimhub.com/1/4Gvdna.png") beklenen = "yluof"   
if(sonuc === "https://resimhub.com/1/pZPDJZ.png") beklenen = "tuewa"   
if(sonuc === "https://resimhub.com/1/EW3p9G.png") beklenen = "saptn"   
if(sonuc === "https://resimhub.com/1/bW4xXW.png") beklenen = "gjegu"   
if(sonuc === "https://resimhub.com/1/MW2Ela.png") beklenen = "ygse"   
if(sonuc === "https://resimhub.com/1/wGnXma.png") beklenen = "ncmg"   
if(sonuc === "https://resimhub.com/1/LGA82W.png") beklenen = "aadf"   
if(sonuc === "https://resimhub.com/1/dGXBJa.png") beklenen = "wwwy"   
if(sonuc === "https://resimhub.com/1/daeXkZ.png") beklenen = "osoft"   
  
  
  //ZOR CAPTCHA
  if(sonuc === "https://resimhub.com/1/7GlXqG.png") beklenen = "hvoyoohd"   
  if(sonuc === "https://resimhub.com/1/va7R5Z.png") beklenen = "jpjphytn"   
if(sonuc === "https://resimhub.com/1/AZOQ6W.png") beklenen = "xjxwh"   
if(sonuc === "https://resimhub.com/1/qGLNEa.png") beklenen = "wwuljyndın"   
if(sonuc === "https://resimhub.com/1/6GmXEW.png") beklenen = "ıxdbksoo"   
if(sonuc === "https://resimhub.com/1/BaY10a.png") beklenen = "ccggvxssz"   
if(sonuc === "https://resimhub.com/1/pGjX9a.png") beklenen = "svgngn"   
if(sonuc === "https://resimhub.com/1/nZE4PG.png") beklenen = "zngangzd"   
if(sonuc === "https://resimhub.com/1/jWdXYW.png") beklenen = "gmmcsax"   
if(sonuc === "https://resimhub.com/1/9WrXlZ.png") beklenen = "saffoo"   
if(sonuc === "https://resimhub.com/1/jWqX5a.png") beklenen = "fasassf"   
if(sonuc === "https://resimhub.com/1/EW3p5G.png") beklenen = "rcttyq"   
if(sonuc === "https://resimhub.com/1/bW4xLW.png") beklenen = "qcmty"   
if(sonuc === "https://resimhub.com/1/pZPDnZ.png") beklenen = "yevunqy"   
if(sonuc === "https://resimhub.com/1/4GvdPa.png") beklenen = "nmnnbqwb"   
if(sonuc === "https://resimhub.com/1/va7RoZ.png") beklenen = "trtwrcnrv"    
  
let embed = new Discord.RichEmbed()   
.setTitle(member.guild.name + ' Sunucusuna Hoşgeldin!')
.setDescription(`Lütfen captcha kodunu buraya gönderin.

**Merhaba!** Sunucuya girmeden önce bir captcha tamamlamanız gerekir.

**Neden?**
Bu, sunucuyu karşı korumak için yapılır!
Self botlara karşı önlem olarak kullanılabilir.

** Captcha'nız:**.`)
.setFooter('Egemen_SSS', client.user.avatarURL)
.setImage(sonuc)
.setTimestamp()
.setURL('https://discord.gg/vQWkwqWVgj')
.setColor('BLUE')      
user.send(embed).then(s => {
       
s.channel.awaitMessages(filtre, {
          max: 1,
        })
       
  .then(collected => {
 if(collected.first().content === beklenen) {
let embed = new Discord.RichEmbed()   
.setTitle('Başarılı!')
.setDescription('**'+member.guild.name+'** Sunucusuna başarıyla giriş yaptınız.')
.setThumbnail(user.avatarURL)
.setFooter('Egemen_SSS', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/vQWkwqWVgj')
.setColor('GREEN')    
 user.send(embed)
member.guild.members.get(user.id).addRole(rol)
        let kayıt1 = new Discord.RichEmbed()   
.setTitle('Kayıt Başarılı!')
.setDescription('**'+user.tag+'** Adlı kullanıcı başarıyla kayıt oldu.')
.setThumbnail(user.avatarURL)
.setFooter('Egemen_SSS', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/vQWkwqWVgj')
.setColor('GREEN')   
         if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt1)  

 return
 } else {
   
user.send('**Deneme başarısız oldu.** Kalan 2 denemeniz var')   
           let kayıt = new Discord.RichEmbed()   
                         .setTitle('Deneme Başarısız!')
.setDescription(''+user.tag+' Kodu yanlış girdi! **1/3** Denemesi kaldı!')
.setThumbnail(user.avatarURL)
.setFooter('Egemen_SSS', client.user.avatarURL)
.setTimestamp()
.setColor('RED')   
             if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt)  

s.channel.awaitMessages(filtre, {
          max: 1,
        })
   .then(collected => {
 if(collected.first().content === beklenen) {
let embed = new Discord.RichEmbed()   
.setTitle('Teşekkürler!')
.setDescription('**'+member.guild.name+'** Sunucusuna başarıyla giriş yaptınız.')
.setThumbnail(user.avatarURL)
.setFooter('Egemen_SSS', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/vQWkwqWVgj')
.setColor('GREEN')    
 user.send(embed)
member.guild.members.get(user.id).addRole(rol)
        let kayıt1 = new Discord.RichEmbed()   
.setTitle('Kayıt Başarılı!')
.setDescription('**'+user.tag+'** Adlı kullanıcı başarıyla kayıt oldu.')
.setThumbnail(user.avatarURL)
.setFooter('Egemen_SSS', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/vQWkwqWVgj')
.setColor('GREEN')   
         if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt1)  

 return
   
 } else {
user.send('**Deneme başarısız oldu.** Kalan 1 denemeniz var')
              let kayıt = new Discord.RichEmbed()  
              .setTitle('Deneme Başarısız!')
.setDescription(''+user.tag+' Kodu yanlış girdi! **2/3** Denemesi kaldı!')
.setThumbnail(user.avatarURL)
.setFooter('Egemen_SSS', client.user.avatarURL)
.setTimestamp()
.setColor('RED')   
             if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt)  

s.channel.awaitMessages(filtre, {
          max: 1,
        })
   .then(collected => {
   if(collected.first().content === beklenen) {
let embed = new Discord.RichEmbed()   
.setTitle('Teşekkürler!')
.setDescription('**'+member.guild.name+'** Sunucusuna başarıyla giriş yaptınız.')
.setThumbnail(user.avatarURL)
.setFooter('Egemen_SSS', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/vQWkwqWVgj')
.setColor('GREEN')    
 user.send(embed)
member.guild.members.get(user.id).addRole(rol)
     let kayıt1 = new Discord.RichEmbed()   
.setTitle('Kayıt Başarılı!')
.setDescription('**'+user.tag+'** Adlı kullanıcı başarıyla kayıt oldu.')
.setThumbnail(user.avatarURL)
.setFooter('Egemen_SSS', client.user.avatarURL)
.setTimestamp()
.setURL('https://discord.gg/vQWkwqWVgj')
.setColor('GREEN')   
         if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt1)  
     return
   
 } else {
let embed = new Discord.RichEmbed()   
.setTitle('Bu Kötü!')
.setDescription('Maalesef 3 hakkınızı da yanlış girdiniz.Sunucuya giriş yapmanız engellendi.')
.setThumbnail(user.avatarURL)
.setFooter('Egemen_SSS', client.user.avatarURL)
.setTimestamp()
.setColor('RED')    
 user.send(embed)  
        let kayıt = new Discord.RichEmbed()   
.setTitle('Kayıt Başarısız!')
.setDescription('**'+user.tag+'** Kodu yanlış girdi! **3/3** Kayıt Başarısız!')
.setThumbnail(user.avatarURL)
.setFooter('Egemen_SSS', client.user.avatarURL)
.setTimestamp()
.setColor('RED')   
             if (!member.guild.channels.get(kanal)) return console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}]  Kullandı`)
    else member.guild.channels.get(kanal).send(kayıt)  
   setTimeout(function() {
   member.kick()
  }, 2500)
 }
})
 }
})
   
 
 }  
    
  })
  

  
})  
   
   
}) 
//EMİRHAN SARAÇ
//EMİRHAN SARAÇ
client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

client.login(ayarlar.token);
//EMİRHAN SARAÇ
