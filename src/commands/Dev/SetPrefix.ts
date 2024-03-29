import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ sᴇᴛᴘʀᴇғɪx',
            description: 'Will replace the old prefix with the given term',
            category: 'dev',
            dm: true,
            usage: `${client.config.prefix}setprefix [new_prefix]`,
            modsOnly: true,
            aliases: ['setprefix','changeprefix'],
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        const newprefix = joined.trim().split(' ')[0].toLowerCase()
        if (!newprefix)
            return void (await M.reply(
                `Please provide the new prefix.\n\n*Example: ${this.client.config.prefix}setprefix $`
            ))
        this.client.config.prefix = newprefix
        const text = `ðŸŽ€ *Successfully changed the prefix to ${newprefix}.*`
        M.reply(text)
    }
}
