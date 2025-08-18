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
SESSION_ID: process.env.SESSION_ID || "SOFIA-XMD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMlBabk9lSUR5RUNtUFlkVWVneUtkZVpzb092TVo3T1V0Tll6andmN0ZYMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNklCOVVGanZSaTFLZ2VqZWhpYUVrc2d0Y2V2dTV2RUxmMVdmY3k1QjBBYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ3SlNZeDlLRHpaWkkraVJGKzNTUWJ2OTJ0b0JJaC9IcHNyNnpaS1NCN1hRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSZHoxMXZHTnBCZGUzeGV1RktNZGZJYzJQaDFIQjBHTEw2d25kRndjbFVjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllBa1krNVVzVHlWSUt2a3BlSVhOQ3A0U3IvcWdmczlybFJ2M3MrODU4Vmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklKMmNqaDQ1dFc5UG9EZ3pOc0pYSVBKcGJhbzBqS3BLcmFyUnJzYzFyR3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOENPVWc4Q2p6a0FtVHE3aEtnT0tOdU1CUWpsekU0cmpiUUVXTkk0REdXYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVzNjODQydUpPUUhDSWZaUUovQzNKM2JxK2MzaGE4WUNsdUdJVXRuckd3MD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhNWTJ0WDRUVzd0bVYyQW1ka1lOemc4L2tDamsxU2tCajJFTHlRY3FKZHo3RWtpdGpvTFZoWE1wSDdXdkJ5N3N6MVNxaStkMlZ2b2RBamdveEcyR2pBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUzLCJhZHZTZWNyZXRLZXkiOiJOZVdiQmlLU2dvT1NWQ0JjU1NxSHJaaU5qRFo0dFpoUmdhWlp0NmdHakE4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzIsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMiwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJDaFNwN25LZlJNMnlOWGpUU19CNE5nIiwicGhvbmVJZCI6IjY5ZTFjOTJmLWU4ZDQtNGM1Yy05ZmJmLTJlYWFjMGNiZmQ1NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNdGhZbTltNWM4WWhRTHNyeVc3eW1BV1BsLzQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTy90KzFVdGQ2VU11NHB4emF4bjNvNUk3dnljPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ikw2ODZGTVo2IiwibWUiOnsiaWQiOiI5NDc0MDIzNzc0Njo2NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZGA8J2RnyDwnZC/8J2RlvCdkabwnZGcIiwibGlkIjoiMjA2MTUwNDI3NDk2NTg0OjY0QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS1BGL0FZUWlxcU54UVlZQXlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRzZ6NGtSaWJpZHovc2p3c21lUG5ncjVPT2duMllTbjBQaStqMy9OQjQzOD0iLCJhY2NvdW50U2lnbmF0dXJlIjoidVd0RFdwMHcwSHZhR25aWXJGTUJSOEhBSjVJbHBJamRjUXF4UHlnTVZRdU5hemJkYlA0UndRbkZ1a0VKN0Z1ZGtaOWVHR0NkbWZuUjBMZTZBbTV5QXc9PSIsImRldmljZVNpZ25hdHVyZSI6IkwyV3QrVElkM0JWaFU0cEpadmIxV0RBdzE1NWVGTTFQV01HOHV4VVVseEVKTGM5MHdOd3YvZThINy9LTXBtbm1VMzA2Mi94bHFmZEpDZFkvMkVaK2pBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NDAyMzc3NDY6NjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUnVzK0pFWW00bmMvN0k4TEpuajU0SytUam9KOW1FcDlENHZvOS96UWVOLyJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0JJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzU1NTM0NjE3LCJsYXN0UHJvcEhhc2giOiIyVjc3cVUiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU1iRSJ9",
PORT: process.env.PORT || "8000"
};
