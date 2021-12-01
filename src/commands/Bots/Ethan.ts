import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ ᴇᴛʜᴀɴ',
            description: 'Display the info',
            category: 'bots',
            usage: `${client.config.prefix}ethan`,
            aliases: ['ethan'],
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void M.reply(
            `*❗🄴🅃🄷🄰🄽-🄱🄾🅃*\n\n *📮【About】:* 𝑨𝒖𝒕𝒐𝒎𝒂𝒕𝒆𝒅 𝑯𝒆𝒍𝒑𝒇𝒖𝒍/𝑭𝒖𝒏 𝑩𝒐𝒕 𝒕𝒐 𝒎𝒂𝒌𝒆 𝒍𝒊𝒇𝒆 𝒆𝒂𝒔𝒊𝒆𝒓 𝒐𝒏 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑\n\n*🏅【Support】:* https://www.instagram.com/jayjay_ops\n\n*🛸【Group】:* https://chat.whatsapp.com/EBUKlcbfc3692tllAcEAP7 \n`
        ).catch((reason: Error) => M.reply(`an error occurred, Reason: ${reason}`))
    }
}



/* import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ ᴇᴛʜᴀɴ',
            description: 'Display the info',
            category: 'bots',
            usage: `${client.config.prefix}ethan`,
            aliases: ['ethan'],
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        await this.client.sendMessage(
            M.sender.jid,
            `*❗🄴🅃🄷🄰🄽-🄱🄾🅃*\n\n *📮【About】:* 𝑨𝒖𝒕𝒐𝒎𝒂𝒕𝒆𝒅 𝑯𝒆𝒍𝒑𝒇𝒖𝒍/𝑭𝒖𝒏 𝑩𝒐𝒕 𝒕𝒐 𝒎𝒂𝒌𝒆 𝒍𝒊𝒇𝒆 𝒆𝒂𝒔𝒊𝒆𝒓 𝒐𝒏 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑\n\n*🏅【Support】:* https://www.instagram.com/jayjay_ops\n\n*🛸【Group】:* https://chat.whatsapp.com/EBUKlcbfc3692tllAcEAP7 \n`,
            MessageType.text
        )
        return void M.reply('Sent you the support info in personal message'); //.catch((reason: Error) => M.reply(`an error occurred, Reason: ${reason}`))
    }
}
*/
