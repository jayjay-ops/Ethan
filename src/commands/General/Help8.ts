
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➩ ʜᴇʟᴘ8',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help8 (command_name)`,
            dm: true,
            aliases: ['help8','h8']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Ethan2.mp4'
        ]
        let ethan = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: ethan }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-Ⓑ︎Ⓞ︎Ⓣ︎Ⓢ︎ 🎐
──────────────
⛲ ${this.client.config.prefix}ᴇᴛʜᴀɴ
⛲ ${this.client.config.prefix}ɢᴜɪᴅᴇ
⛲ ${this.client.config.prefix}ɪɴғɪɴɪᴛʏ
⛲ ${this.client.config.prefix}ᴋᴀᴏɪ
⛲ ${this.client.config.prefix}ᴠᴏɪᴅ
⛲ ${this.client.config.prefix}ᴇɴᴛʀᴏᴘʏ

──────────────` }
        )
    }
}


