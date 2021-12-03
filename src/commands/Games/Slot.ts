import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ sʟᴏᴛ',
            description: 'random quote.',
            aliases: ['spin','slot'],
            category: 'games',
            usage: `${client.config.prefix}slot`,
            baseXp: 30
        })
    }
