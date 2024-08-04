const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_03_55_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzksXG4gICAgICAgIDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTksXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDM1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNSxcbiAgICAgICAgODgsXG4gICAgICAgIDMyLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQ3LFxuICAgICAgICA3NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxNDksXG4gICAgICAgIDIzMCxcbiAgICAgICAgNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDMyLFxuICAgICAgICAzMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDgxLFxuICAgICAgICA2MixcbiAgICAgICAgOTcsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDk5LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTA2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOSxcbiAgICAgICAgMTcyLFxuICAgICAgICA4OSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM5LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNixcbiAgICAgICAgNCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxLFxuICAgICAgICAyMzAsXG4gICAgICAgIDk0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzMixcbiAgICAgICAgNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDY5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjcsXG4gICAgICAgIDczLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDk1LFxuICAgICAgICAyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA4MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgOSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDAsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTksXG4gICAgICAgIDIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDU0LFxuICAgICAgICAxOTksXG4gICAgICAgIDcsXG4gICAgICAgIDExLFxuICAgICAgICAxODAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDczLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzLFxuICAgICAgICAzMixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMTlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyOCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDExMyxcbiAgICAgICAgOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzksXG4gICAgICAgIDYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTA1LFxuICAgICAgICAyMTAsXG4gICAgICAgIDM5LFxuICAgICAgICAxMzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQ4LFxuICBcImFkdlNlY3JldEtleVwiOiBcInhObDNmOEVzdVdkTmZXM2VxdFplS1d1aWNnOGFtMWVCa0tvRW55c21YVjg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjIzOTA2MzM4MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjU2QzcwOTYyNkVCMzQxNUY4MjI3NjI4MEYxNDZGNkJCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjc0MzcyMVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogNjEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogNjEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsUmRUSUFvbFRvU2tmVTFabmtZdkdBXCIsXG4gIFwicGhvbmVJZFwiOiBcImFhYjZmMGEzLWU0NzUtNDkyNi1iMTkyLTEzM2YxOThiOTAzYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMixcbiAgICAgIDExMyxcbiAgICAgIDI0MixcbiAgICAgIDY0LFxuICAgICAgMixcbiAgICAgIDIxNSxcbiAgICAgIDE2OCxcbiAgICAgIDI0LFxuICAgICAgNTMsXG4gICAgICA2OCxcbiAgICAgIDE5NyxcbiAgICAgIDE1NixcbiAgICAgIDIxMyxcbiAgICAgIDM1LFxuICAgICAgNTYsXG4gICAgICAxMzksXG4gICAgICAxNzIsXG4gICAgICAxNjMsXG4gICAgICAxODksXG4gICAgICAxNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMyxcbiAgICAgIDM5LFxuICAgICAgMjUwLFxuICAgICAgMTU3LFxuICAgICAgMjM5LFxuICAgICAgMjAzLFxuICAgICAgMjEsXG4gICAgICA3OSxcbiAgICAgIDg1LFxuICAgICAgMjE5LFxuICAgICAgOTEsXG4gICAgICAxMDQsXG4gICAgICA3MyxcbiAgICAgIDE0MSxcbiAgICAgIDQ4LFxuICAgICAgNDAsXG4gICAgICA0MyxcbiAgICAgIDIwOCxcbiAgICAgIDE1NSxcbiAgICAgIDI0N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzTkpMSDc3QVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjIzOTA2MzM4MTc6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIk1lcmNyZWRpXCIsXG4gICAgXCJsaWRcIjogXCIyNzE3NDc0NDY3ODQwODo5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tiRGlKVUhFSi8zdTdVR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiL21HMkRkYVpVTFJDaFVDcVQxSmZ0ckhNay93UUhQY2MzVlRHM3hRditoND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJUd1ZQSWhlV3RMQllkUGQvSnpDeTBYWHQzVUl1ME9JZWt5TkM4RzlNaEQrRWNOZEQyTGFYL1czTTdBa3dUajE5WlM1WDRwSDN6ZDY1aGpoTUY4L1lDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2UDVueU40T044OGNvbVBpekljS0lCMjh1WHV1dFlKd1Q1TE04bnByV2N4bU9lQlh5cEdvTDJSa0V3ditPY2hXd3g1WUZ4SnpxUkhlaGF4ZVF2UUloUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjM5MDYzMzgxNzo5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAzMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzQzNzE2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQzdJXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFDN0kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJ3RE42U3pwMWxEMHYxeCtaRm1vT1l2aFNQYUl6WGd4eVJEOFh6WjlkbUc4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE5MjMyMjgwNjksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjIwNzMzMDEzMDhcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
