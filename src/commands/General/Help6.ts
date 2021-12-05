
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➩ ʜᴇʟᴘ6',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help6 (command_name)`,
            dm: true,
            aliases: ['help6','h6']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Ethan2.mp4'
        ]
        let ethan = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: ethan }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-Ⓔ︎Ⓓ︎Ⓤ︎Ⓒ︎Ⓐ︎Ⓣ︎Ⓘ︎Ⓥ︎Ⓔ︎ 🎐
──────────────
⛲ ${this.client.config.prefix}ʙɪᴏᴅᴀᴛᴀ
⛲ ${this.client.config.prefix}ᴄᴀʟᴄᴜʟᴀᴛᴇ
⛲ ${this.client.config.prefix}ᴄᴏᴜɴᴛʀʏ
⛲ ${this.client.config.prefix}ᴄʀʏᴘᴛᴏ
⛲ ${this.client.config.prefix}ᴅᴇғɪɴᴇ
⛲ ${this.client.config.prefix}ᴅɪᴄᴛɪᴏɴᴀʀʏ/ᴍᴇᴀɴɪɴɢ
⛲ ${this.client.config.prefix}ɪɢ-ᴘʀᴏғɪʟᴇ
⛲ ${this.client.config.prefix}ᴡᴇᴀᴛʜᴇʀ
⛲ ${this.client.config.prefix}ᴄᴏᴠɪᴅ
⛲ ${this.client.config.prefix}ᴇʟᴇᴍᴇɴᴛs
⛲ ${this.client.config.prefix}ᴘʏᴘɪ

──────────────` }
        )
    }
}


