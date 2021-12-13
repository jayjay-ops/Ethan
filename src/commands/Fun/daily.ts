import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ daily',
            description: "claim daily cojn 🌟",
            category: 'fun',
            usage: `${client.config.prefix}daily`,
            aliases: ['daily', 'claim'],
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        let coin = 1000
        await this.client.setCoin(user,coin);
              M.reply("1000 has been added to your account")
        
    }
}
