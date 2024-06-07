const config = require('../config')
const searchheading = (type)=>{
    if(type === 'TVShow'){
        const text = '*▣━|𝚃𝚅-𝚂𝙷𝙾𝚆 𝚂𝙴𝙰𝚁𝙲𝙷 𝚂𝚈𝚂𝚃𝙴𝙼|━▣*'
        return text
} else if(type === 'Movie'){
    
    const text = '*▣━|𝙼𝙾𝚅𝙸𝙴 𝚂𝙴𝙰𝚁𝙲𝙷 𝚂𝚈𝚂𝚃𝙴𝙼|━▣*'
        return text
    }
}
const mvandtvdownloaderheading = (type) => {
    if(type === 'TVShow'){
       return '*▣━|𝚃𝚅-𝚂𝙷𝙾𝚆 𝚂𝙴𝙰𝚁𝙲𝙷 𝚂𝚈𝚂𝚃𝙴𝙼|━▣*'
    } else if(type === 'Movie'){
        return '*▣━|𝙼𝙾𝚅𝙸𝙴 𝚂𝙴𝙰𝚁𝙲𝙷 𝚂𝚈𝚂𝚃𝙴𝙼|━▣*'
     }
}
const linestartwithtext = (text) => {
    return `*╭──「 ${text} 」──►*`
}
const noresults = (type,site)=>{
    if(type === 'TVShow'){
        type = 'TVShows'
    }else if(type === 'Movie'){
        type = 'Movies'
    }
    if(site==='sinhalasub.lk'){
        site = 'sinhalasub.lk'
    }else if(site==='cinesubz.co'){
        site = 'cinesubz.co'
    }
    return `No ${type} found for this on ${site}`
}
const seasonwithnumber = (num) => {
    return `> *──「 SEASON ${num} 」──*`
}
module.exports = {

    // for all functions in server.js
    linestatr : "*╭──────────►*",
    linestartwithtext,
    lineend : "*╰───────────►*",
    numberandtextspliter : "*|❮*",
    numberstart : " *|* ",
    stringpadstartlimit : 2, // before change this ask from me "wa.me/94766632281?text=moviebot,mg.js,stringpadstartlimit,value"
    
    // for sea and sear functions in server.js
    searchheading,
    noresults,
    yoursearch : "📖 𝚈𝚘𝚞𝚛 𝚂𝚎𝚊𝚛𝚌𝚑 : ",
    sinhalasubsiteindicator : " [si]",
    cinesubzsiteindicator : " [ci]",
    sinhalasubsearch : "> *「 Sinhalasub.lk 」*",
    cinesubzsearch : "> *「 Cinesubz.co 」*",

    // for movi and tvsh and epi download functions in server.js
    mvandtvdownloaderheading,
    mvinfo : "ᴍᴏᴠɪᴇ ɪɴꜰᴏ",
    mvtitle : "",
    mvreleased : "◈ Rᴇʟᴇᴀꜱᴇ ᴅᴀᴛᴇ",
    mvcountry : "◈ Cᴏᴜɴᴛʀʏ",
    mvlink : "◈ Uʀʟ",
    mvruntime : "◈ Rᴜɴᴛɪᴍᴇ",
    mvdirector : "◈ Dɪʀᴇᴄᴛᴏʀ",
    selectdownloadquality : "*Please select the quality you wants to download by replying these numbers.*",
    selectepisode : "*Please select the episodes you want to download by replying these numbers*",
    Informations : "Informations",
    Images : "Images",
    seasonwithnumber,
    tvinfo : "ᴛᴠ ꜱʜᴏᴡ ɪɴꜰᴏ",
    tvlink : "◈ Uʀʟ",
    tvseasons : "◈ Sᴇᴀꜱᴏɴ ɴᴏ",

    // for all files 
    jointitleandqualitydl: 'with Sinhala Subtitles | ',
    footer:`${config.FOOTERNAME}`,
    megaerr: "*Sorry I can't send this type documents*",
    downloadusinglink:"*Please download using following link*",
    dllink:"Link:",
    imagenotfound: 'https://telegra.ph/file/8dd30f52e0e1b3d8f72c9.jpg',
    imagesearch: 'https://telegra.ph/file/dcf25dd5c3564f71cf759.jpg',
    imageconnect:'https://telegra.ph/file/1f7cb4b2e5ce9cdfb94bf.jpg',
    menulogo: 'https://telegra.ph/file/e8eb561f394d4a0c214f7.jpg',
    alivelogo: `https://telegra.ph/file/1f7cb4b2e5ce9cdfb94bf.jpg`,
    connectmg:'*DIMENSION-X | BOT CONNECTED !*',
    restartmg: '```Restarting...!```',
    replithostname: 'Replit',
    herokuhostname: 'Heroku',
    koyebhostname: 'Koyeb',
    mode : 'Private',
    systemhead:'*DIMENSION-X | SYSTEM INFO*',
    onlyowner: "This cmd is only for bot owner!!",
    onlygroup:'This cmd is only for grouo',
    wagrouplinknotfound:  "Where is group link" ,
    notextfordel : "Give me a message for delete",
    invalidwagrouplink:"Link Invalid, Please Send a valid whatsapp Group Link!",
    groupjoinsuccess: "Successfuly joined ✅",
    groupjoinerror: "Error in Joining Group ❗",
    testingping:'Testing Ping...',
    needbotadmins: "Bot must have admin in this group!!",
    nouserforpromote: "Which user am I need to promote??",
    nouserforkick: "Which user am I need to kick??",
    nouserforadd: "Which user am I need to add??",
    userremoved: "*User has been kicked out of the group!*",
    nouserfordemote: "Which user am I need to demote??",
    activatbotingroup: "Bot activated for this group",
    deactivatbotingroup: "Bot deactivated for this group",
    devoffsetting: "This setting turned off by devoloper",
    sudoadded:"Bot activated for this user",
    sudoremoved: "Bot deactivated for this user",
    databasereset: "Downloads database has reset",
    datelimit:"datelimit applied for this user",
    menuhead:"*DIMENSION-X*"
    }