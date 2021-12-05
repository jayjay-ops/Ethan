
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➩ ʜᴇʟᴘ9',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help9 (command_name)`,
            dm: true,
            aliases: ['help9','h9']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Ethan2.mp4'
        ]
        let ethan = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: ethan }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-Ⓟ︎Ⓞ︎Ⓡ︎Ⓝ︎Ⓞ︎ 🎐
──────────────
⛲ ${this.client.config.prefix}ʙʟᴏᴡᴊᴏʙ
⛲ ${this.client.config.prefix}ᴀɴᴀʟ
⛲ ${this.client.config.prefix}ʜᴇɴᴛᴀɪ
⛲ ${this.client.config.prefix}ᴍᴀɪᴅ
⛲ ${this.client.config.prefix}ᴋɪᴛsᴜɴᴇ
⛲ ${this.client.config.prefix}sᴇx-ɴᴇᴋᴏ
⛲ ${this.client.config.prefix}ᴍᴀsᴛᴜʀʙᴀᴛɪᴏɴ
⛲ ${this.client.config.prefix}ᴘᴀᴘᴇʀ
⛲ ${this.client.config.prefix}ᴘᴜssʏ
⛲ ${this.client.config.prefix}sᴇx-ᴡᴀɪғᴜ
⛲ ${this.client.config.prefix}ʀᴇᴄᴏᴍᴍᴇɴᴅ
⛲ ${this.client.config.prefix}ᴛʜɪɢʜs
⛲ ${this.client.config.prefix}ᴛʀᴀᴘ
⛲ ${this.client.config.prefix}sᴇx-ʟᴏʟɪ

──────────────` }
        )
    }
}


