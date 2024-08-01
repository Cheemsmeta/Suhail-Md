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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_28_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTg2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjksXG4gICAgICAgIDc5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTk5LFxuICAgICAgICA4OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDQyLFxuICAgICAgICA0MyxcbiAgICAgICAgODksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5LFxuICAgICAgICA5NyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzYsXG4gICAgICAgIDcwLFxuICAgICAgICAyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDkwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA0LFxuICAgICAgICAyNCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxLFxuICAgICAgICAyOCxcbiAgICAgICAgMTExLFxuICAgICAgICAxNyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NixcbiAgICAgICAgMTUzLFxuICAgICAgICA4NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MyxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNixcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDgxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjcsXG4gICAgICAgIDEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDQsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDMwLFxuICAgICAgICAyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDk2LFxuICAgICAgICAxODgsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzOSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTExLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNyxcbiAgICAgICAgMjcsXG4gICAgICAgIDY1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDk5LFxuICAgICAgICA1LFxuICAgICAgICA1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDk3LFxuICAgICAgICAyMzksXG4gICAgICAgIDM3LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDQsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDU5LFxuICAgICAgICAxODEsXG4gICAgICAgIDg2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDMwLFxuICAgICAgICA5NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDM0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjI2LFxuICAgICAgICA0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTUsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTIxLFxuICAgICAgICA3NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDQxLFxuICAgICAgICA5NyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NixcbiAgICAgICAgMjM5LFxuICAgICAgICA4NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTksXG4gICAgICAgIDIzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDUzLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlpNSVB5dHdiMEQyWFpZWWRid3YwYmR2UWJsVG9uMklPU3NYYmZVc3dIRGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjIzODk1MjA5NDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjE0MzZBMDMzMDY2RkVFMEU5MzdEOUYwMzBEQ0U1NTlCXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMDM4NzY4NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIyMzg5NTIwOTQ2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1MEMyNkNGOUMzOTYzRjQ1NzA2ODlFQUMxMDgwRkU1QlwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAzODc2ODVcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiLVBQODB1TmZSSGE2MEt5MGdoZTYzZ1wiLFxuICBcInBob25lSWRcIjogXCJmNWMzYTdiNi1jMjE5LTQxMDEtODhhNy1jNDhmMDk4ZjRkYTVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTYsXG4gICAgICAxNDEsXG4gICAgICA1MCxcbiAgICAgIDk5LFxuICAgICAgMjE1LFxuICAgICAgMTA2LFxuICAgICAgMjQ2LFxuICAgICAgMjE4LFxuICAgICAgMjQ1LFxuICAgICAgMTUwLFxuICAgICAgMTEwLFxuICAgICAgOTEsXG4gICAgICAyMTgsXG4gICAgICAyMDEsXG4gICAgICAxOTYsXG4gICAgICAyMDksXG4gICAgICAxMDYsXG4gICAgICAxMTIsXG4gICAgICAxMjYsXG4gICAgICA2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDMsXG4gICAgICAyMjMsXG4gICAgICA1MyxcbiAgICAgIDE1OCxcbiAgICAgIDE2LFxuICAgICAgMjM0LFxuICAgICAgNDUsXG4gICAgICAzLFxuICAgICAgMTA0LFxuICAgICAgODUsXG4gICAgICAyNTAsXG4gICAgICAyMjAsXG4gICAgICAxMjQsXG4gICAgICAxMzAsXG4gICAgICAxNjQsXG4gICAgICAxODEsXG4gICAgICAxMDcsXG4gICAgICA2OSxcbiAgICAgIDE4OCxcbiAgICAgIDExXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkdRQjI4SkpBXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjM4OTUyMDk0Njo4MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDAxNDA3OTc5MzE2MjA6ODFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiU3ltcGEgU3ltcGFcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOTzQ4TElFRU4yUXJMUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInQ4TEt4K0VQMDN6b1RUWjUyVHZTb1c0VG5kTEpSYi9kL0FvSyt4cjlYbTQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieml5MkEzdFNRTFNwZTB2eUhhSDdPMS9Vc0hFRENjamtHd3VjTXpPQTd5dXpRbFE1bzlHRThMTjRXTk1nQ29mYUFaUGpFS3FkTnV0REZYWk9HTFhGQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVFl2MW9KMzVGL3Z3M1FUQWROZEtoaThhNUowQ3pOYUVSbXJYSHp1eWljbm1FRVVDM3ZneU8zYVYwMnZ6K0tweHpzU0Q4eTk5QlRxV09xNHJ6TkFWQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjIzODk1MjA5NDY6ODFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM4NzY4MSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdhK1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2ErLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaElBeGZKejdoWEgzRjNRLzJIV28xS2RvbHg2NkpMNnFGQ2RJTUdMTjNJMD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTgwNDQxNjgzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzODc2ODM3OThcIn0iCn0="  // PUT your SESSION_ID 


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
