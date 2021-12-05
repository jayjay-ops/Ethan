
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➩ ʜᴇʟᴘ3',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help3 (command_name)`,
            dm: true,
            aliases: ['help3','h3']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Ethan2.mp4'
        ]
        let ethan = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: ethan }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-Ⓕ︎Ⓤ︎Ⓝ︎-Ⓖ︎Ⓐ︎Ⓜ︎Ⓔ︎Ⓢ︎ 🎐
──────────────
⛲ ${this.client.config.prefix}ᴀᴅᴠɪᴄᴇ
⛲ ${this.client.config.prefix}ᴊᴀɪʟ
⛲ ${this.client.config.prefix}ᴛʀɪɢɢᴇʀ
⛲ ${this.client.config.prefix}ʏᴏᴜᴛᴜʙᴇ-ᴛʀᴇɴᴅ
⛲ ${this.client.config.prefix}ᴡᴀɴᴛᴇᴅ
⛲ ${this.client.config.prefix}ᴛʀɪᴠɪᴀ
⛲ ${this.client.config.prefix}ᴡʜʏ
⛲ ${this.client.config.prefix}ᴘᴜᴘᴘʏ
⛲ ${this.client.config.prefix}ʀᴇᴀᴄᴛ
⛲ ${this.client.config.prefix}ᴄʜᴇss
⛲ ${this.client.config.prefix}ᴛʀᴜᴛʜ
⛲ ${this.client.config.prefix}ᴅᴀʀᴇ
⛲ ${this.client.config.prefix}ǫᴜᴏᴛᴇ
⛲ ${this.client.config.prefix}sʜɪᴘ
⛲ ${this.client.config.prefix}sᴛᴇᴀʟ
⛲ ${this.client.config.prefix}ʀɪᴘ

──────────────` }
        )
    }
}


