import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ ᴡᴀʟʟᴇᴛ',
            description: "Displays user bot financial status  🌟",
            category: 'general',
            usage: `${client.config.prefix}wallet`,
            aliases: ['wallet','bank'],
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        let username = user === M.sender.jid ? M.sender.username : '🤷🏽‍♂️'
        if (!username) {
            // const contact = this.client.getContact(user)
            // username = contact.notify || contact.vname || contact.name || user.split('@')[0]
            username = user.split('@')[0]
        }
        return void (await M.reply(`*👛 ${username}'s wallet*\n\n🪙 *ᑕOIᑎ ➪* ${(await this.client.getUser(user)).Coin || 0}\n🌟 *᙭ᑭ ➪* ${(await this.client.getUser(user)).Xp || 0}`
    },
}
