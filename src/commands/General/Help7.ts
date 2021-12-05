
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➩ ʜᴇʟᴘ7',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help7 (command_name)`,
            dm: true,
            aliases: ['help7','h7']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Ethan2.mp4'
        ]
        let ethan = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: ethan }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `-Ⓓ︎Ⓔ︎Ⓥ︎Ⓔ︎Ⓛ︎Ⓞ︎Ⓟ︎Ⓔ︎Ⓡ︎ 🎐
──────────────
⛲ ${this.client.config.prefix}ʙᴀɴ
⛲ ${this.client.config.prefix}ʙʀᴏᴀᴅᴄᴀsᴛ
⛲ ${this.client.config.prefix}ᴇᴠᴀʟ
⛲ ${this.client.config.prefix}ᴅɪsᴀʙʟᴇ
⛲ ${this.client.config.prefix}ᴇɴᴀʙʟᴇ
⛲ ${this.client.config.prefix}ᴊᴏɪɴ
⛲ ${this.client.config.prefix}ʟᴇᴀᴠᴇ
⛲ ${this.client.config.prefix}sᴇᴛᴘʀᴇғɪx
⛲ ${this.client.config.prefix}sᴛᴀᴛᴜs
⛲ ${this.client.config.prefix}ᴜɴʙᴀɴ

──────────────` }
        )
    }
}


