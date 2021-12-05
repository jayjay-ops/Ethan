
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➩ ʜᴇʟᴘ4',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help4 (command_name)`,
            dm: true,
            aliases: ['help4','h4']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Ethan2.mp4'
        ]
        let ethan = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: ethan }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-Ⓜ︎Ⓔ︎Ⓓ︎Ⓘ︎Ⓐ︎ 🎐
──────────────
⛲ ${this.client.config.prefix}ʙʟᴜʀ
⛲ ${this.client.config.prefix}ᴅᴏᴡɴʟᴏᴀᴅ-ɪɢ
⛲ ${this.client.config.prefix}ᴋᴀʀᴀᴏᴋᴇ
⛲ ${this.client.config.prefix}ʟʏʀɪᴄs
⛲ ${this.client.config.prefix}ᴘɪɴᴛᴇʀᴇsᴛ
⛲ ${this.client.config.prefix}ᴘʟᴀʏ
⛲ ${this.client.config.prefix}ʀᴇᴛʀɪᴇᴠᴇ
⛲ ${this.client.config.prefix}sᴄʀᴇᴇɴsʜᴏᴛ
⛲ ${this.client.config.prefix}sᴘᴏᴛɪғʏ
⛲ ${this.client.config.prefix}sᴛɪᴄᴋᴇʀ
⛲ ${this.client.config.prefix}sᴜʙʀᴇʙ
⛲ ${this.client.config.prefix}ʏᴛᴀᴜᴅɪᴏ
⛲ ${this.client.config.prefix}ʏᴛsᴇᴀʀᴄʜ
⛲ ${this.client.config.prefix}ʏᴛᴠɪᴅᴇᴏ

──────────────` }
        )
    }
}


