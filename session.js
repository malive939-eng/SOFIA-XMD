//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：4.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░                                           
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 4.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "SOFIA-XMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ081dng0MjIvK1Urcmdhb2VjSWllamd4QzRpa0U0Q3dFazdyMUMrMTBVYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEVNQjFMMEIxVk13TnBiOVZSck82Vm9kNjh6VnVXTmo0YmpEbkd1TG9HTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0SHFoVG52T0srbW44aGNGOHkvZGY3U2xiODlXREJPWTdWS3A2Qi9RR25BPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRcVByaHQ5dzNIdHMrTlJjc2t4OEZnVGFxUGI0Zmt3Q1dSZ3ZJV252TlhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlHS1YwOW5rUU1BeTNXQzZMWFB1cGdxc3VXWXNQeXZFbVB3ckgzSGRWVXM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5yU0lRcmdrSUg4S3FqS2hmbTE4bE9xTUpsdDZDemNITEdkQWk2TnVFazA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0Nyd2dtcHo2TUtQQzJCRjdETmhNUHhnYjNsN0p2cWRDRlJGZ3JVNFlWMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHJtNktFRitFa24wRmFOVXRlRXE0RS82QWI1WlBsYmlON0wyVmVVa0ZCZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJOVTB2c1ViSjB0Y2Y1aXM4WE5LTUowTE5PTGZRdjhaNkh3WndNb29JdUZTTFFjajl1VWhnQUc3STBXZlU1U0RNVHRGbFh1Z2o5Q3ovUFlhdWYzM2lBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUzLCJhZHZTZWNyZXRLZXkiOiJTeHc2WnQ2ZTVBazIwV0ZoRk5Wc3RmWHYzMHlvVUFtUVU4bis2OHZhU0ljPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI1TnQ1MVhvLVRydXg4YWlxRFFIYXZBIiwicGhvbmVJZCI6IjQ4ZGExZjkwLWM3OWQtNDUxMS1hY2JhLTZjN2M5NjFhYjRhMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXcmM1TnZ5dnhIUUZRU1FwY3hXUUVnQXhtbkE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidWdZdGg5Qyt3ODJqTk5YYXI1OGJMWFNQVWJnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikw3QUdGSENUIiwibWUiOnsiaWQiOiI5NDc0MDIzNzc0Njo2NkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZGA8J2RnyDwnZC/8J2RlvCdkabwnZGcIiwibGlkIjoiMjA2MTUwNDI3NDk2NTg0OjY2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1BGL0FZUW9xbVd4UVlZQlNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRzZ6NGtSaWJpZHovc2p3c21lUG5ncjVPT2duMllTbjBQaStqMy9OQjQzOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiaUNxRnd2RGdORW0xMkgwVGFvMzBPbm8xSG5aOVlkVldGcDZ2cnBlTDZHUzllWElLSXB4ZkRSUmhJMlc2SDNlL0VpK3gwQis2RU9hL1F0M0NvQnp5Q2c9PSIsImRldmljZVNpZ25hdHVyZSI6ImV3T1BVQTZDK0FpUkNxNmxhcVFxMTRnc21kK25zcXYvc0srZ3Q3YjlaWkZ6T2hMTitnNjFyYm5jamF6alNRL2lYWUxKSUVMZkwveEZMeFBQZVI4bWh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDAyMzc3NDY6NjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUnVzK0pFWW00bmMvN0k4TEpuajU0SytUam9KOW1FcDlENHZvOS96UWVOLyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NjgxOTY3LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1iRyJ9",
PORT: process.env.PORT || "8000"
};
