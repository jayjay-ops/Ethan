const eco = require('discord-mongoose-economy');
const ty = eco.connect('mongodb+srv://jayjay-ops:jayjay-ops@cluster0.orjsg.mongodb.net/test');
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import request from '../../lib/request'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'wallet',
            description: "Displays User's wallet 💰",
            category: 'fun',
            usage: `${client.config.prefix}wallet (@tag)`,
            aliases: ['bank', 'wallet'],
            baseXp: 10
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
const cara = "cara"
const balance = await eco.balance(user, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.

await M.reply(`Wallet: ${balance.wallet}\nBank: ${balance.bank}/${balance.bankCapacity}`);
}
}
