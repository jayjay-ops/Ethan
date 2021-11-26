/* import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: `requestjoin`,
            description: 'users request bot to join group',
            category: 'config',
            dm: true,
            usage: `${client.config.prefix}requestjoin,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void (await M.reply(`📮 I will be more than happy to join!\nBut you must ask my Developer first\n\n👨🏽‍💻 ➪ wa.me/+2349051064375`))
    }
}
*/

import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'requestjoin',
            description: 'Generally used to check if bot is Up',
            category: 'config',
            usage: `${client.config.prefix}requestjoin`,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        return void (await M.reply(`📮 ${M.sender.username}, I will be more than happy to join!\nBut you must ask my Developer first\n\n👨🏽‍💻 ➪ wa.me/+2349051064375`))
    }
}
