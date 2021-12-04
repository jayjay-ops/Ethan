import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'help2',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'anime',
            usage: `${client.config.prefix}help2 (command_name)`,
            dm: true,
            aliases: ['h2']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Ethan2.mp4'
        ]
        let ethan = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: ethan }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-Ⓐ︎Ⓝ︎Ⓘ︎Ⓜ︎Ⓔ︎Ⓢ︎ 🎑
──────────────
🧧 ${this.client.config.prefix}ᴀɴɪᴍᴇǫᴜᴏᴛᴇ
🧧 ${this.client.config.prefix}ᴀɴɪᴍᴇ-ᴡᴀʟʟᴘᴀᴘᴇʀ
🧧 ${this.client.config.prefix}ᴀɴɪᴍᴇᴄʜᴀʀ
🧧 ${this.client.config.prefix}ɢᴇɴsʜɪɴᴄʜᴀʀᴀᴄᴛᴇʀ
🧧 ${this.client.config.prefix}ᴍᴀɴɢᴀ
🧧 ${this.client.config.prefix}ᴘᴏᴋᴇᴍᴏɴ
🧧 ${this.client.config.prefix}ᴡᴀɪғᴜ
🧧 ${this.client.config.prefix}ᴡᴀɪғᴜ2
🧧 ${this.client.config.prefix}ᴄʀᴏssᴘʟᴀʏ
🧧 ${this.client.config.prefix}ʜᴜsʙᴀɴᴅᴏ
🧧 ${this.client.config.prefix}ʟᴏʟɪ
🧧 ${this.client.config.prefix}ɴᴇᴋᴏ

──────────────` }
        )
    }
}


