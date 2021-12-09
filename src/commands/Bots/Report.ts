import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ ʀᴇᴘᴏʀᴛ',
            description: 'reports a bug to the own',
            category: 'bots',
            usage: `${client.config.prefix}ethan`,
            aliases: ['report'],
            baseCoin: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        await this.client.sendMessage(
            client.config.mods.jid,
            `*Report message*\n`,
            MessageType.text
        )
        return void M.reply('Report sent to owner'); //.catch((reason: Error) => M.reply(`an error occurred, Reason: ${reason}`))
    }
}
