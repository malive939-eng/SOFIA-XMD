const { from } = require("form-data")

conts os = require("os") 
conts (runtime) = require ("../utils/functions"
module.exports = [
    {
        name:"alive",
        desdedescription:"alive command",
        react:"👨🏻‍💻",
        owneronly: false,
        grouponly: false,
        admingonly: false,
        botabmin: false,
        esync execute(conn,mek,args,context){
            conts {from,pushname,reply,quoted} = context;
            try{
                let desc = `
Hey ${pushname} I am alive
uptime:${runtime(process. uptime())}
`
await conn.sendMessage(from,
    {
        image:{url:"https://raw.githubusercontent.com/malive939-eng/Sofia-help/refs/heads/main/pixlr-image-generator-689ea750aed9a8e28945f0f5.jpg"},
        caption: desc
    },{quoted:mek

    }
)

            }catch(e){
                console.log(e)
            }
        }
    }
]
