
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➩ ʜᴇʟᴘ1',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help1 (command_name)`,
            dm: true,
            aliases: ['help1','h1']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Ethan2.mp4'
        ]
        let ethan = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: ethan }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-Ⓖ︎Ⓔ︎Ⓝ︎Ⓔ︎Ⓡ︎Ⓐ︎Ⓛ︎ 🎐
──────────────
⛲ ${this.client.config.prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
⛲ ${this.client.config.prefix}xᴘ
⛲ ${this.client.config.prefix}ʀᴀɴᴋ
⛲ ${this.client.config.prefix}ᴡᴀʟʟᴇᴛ
⛲ ${this.client.config.prefix}ᴘʀᴏғɪʟᴇ
⛲ ${this.client.config.prefix}ᴍᴏᴅs/ᴏᴡɴᴇʀ
⛲ ${this.client.config.prefix}ɪɴᴠɪᴛᴇʟɪɴᴋ
⛲ ${this.client.config.prefix}ʜᴇʟᴘ
⛲ ${this.client.config.prefix}ʜɪ
⛲ ${this.client.config.prefix}ᴊᴏɪɴ-ᴍʏɢʀᴏᴜᴘ
⛲ ${this.client.config.prefix}ᴅᴇʟᴇᴛᴇ
⛲ ${this.client.config.prefix}ɢɪᴛʜᴜʙ
⛲ ${this.client.config.prefix}ʀᴜʟᴇs
⛲ ${this.client.config.prefix}ɢᴏᴏɢʟᴇ
⛲ ${this.client.config.prefix}ᴛʀᴀɴsʟᴀᴛᴇ
⛲ ${this.client.config.prefix}ᴡɪᴋɪᴘᴇᴅɪᴀ
⛲ ${this.client.config.prefix}ɪɴғᴏ
⛲ ${this.client.config.prefix}ɢᴇᴛɢɪғ

──────────────` }
        )
    }
}




/*

//-- owner bot
case 'owner':
case 'besitzer':
    
    owner = await fs.readFileSync('./images/menu.jpg').toString('base64')
    capt = "𝙲𝚑𝚒𝚕𝚕𝚘𝚌𝚝𝚒 ✯"
    const been = {
    text: `𝑇ℎ𝑖𝑠 𝑖𝑠 𝑚𝑦 𝑜𝑤𝑛𝑒𝑟. 𝐶ℎ𝑎𝑡 𝑤𝑖𝑡ℎ ℎ𝑖𝑚 𝑖𝑓 𝑦𝑜𝑢 𝑤𝑎𝑛𝑡.`,
}
replyimg(been, text, capt, owner)
break




import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
const fs = require('fs')

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➩ ʜᴇʟᴘ1',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help1 (command_name)`,
            dm: true,
            aliases: ['help1','h1']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = await fs.readFileSync(['./assets/images/thumb.jpg']).toString('base64');
        let ethan = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: ethan }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.image,
            caption: `-Ⓖ︎Ⓔ︎Ⓝ︎Ⓔ︎Ⓡ︎Ⓐ︎Ⓛ︎ 🎐
──────────────
⛲ ${this.client.config.prefix}ᴡᴀʟʟᴘᴀᴘᴇʀ
⛲ ${this.client.config.prefix}xᴘ
⛲ ${this.client.config.prefix}ʀᴀɴᴋ
⛲ ${this.client.config.prefix}ᴡᴀʟʟᴇᴛ
⛲ ${this.client.config.prefix}ᴘʀᴏғɪʟᴇ
⛲ ${this.client.config.prefix}ᴍᴏᴅs/ᴏᴡɴᴇʀ
⛲ ${this.client.config.prefix}ɪɴᴠɪᴛᴇʟɪɴᴋ
⛲ ${this.client.config.prefix}ʜᴇʟᴘ
⛲ ${this.client.config.prefix}ʜɪ
⛲ ${this.client.config.prefix}ᴊᴏɪɴ-ᴍʏɢʀᴏᴜᴘ
⛲ ${this.client.config.prefix}ᴅᴇʟᴇᴛᴇ
⛲ ${this.client.config.prefix}ɢɪᴛʜᴜʙ
⛲ ${this.client.config.prefix}ʀᴜʟᴇs
⛲ ${this.client.config.prefix}ɢᴏᴏɢʟᴇ
⛲ ${this.client.config.prefix}ᴛʀᴀɴsʟᴀᴛᴇ
⛲ ${this.client.config.prefix}ᴡɪᴋɪᴘᴇᴅɪᴀ
⛲ ${this.client.config.prefix}ɪɴғᴏ
⛲ ${this.client.config.prefix}ɢᴇᴛɢɪғ

──────────────` }
        )
    }
}





*/


