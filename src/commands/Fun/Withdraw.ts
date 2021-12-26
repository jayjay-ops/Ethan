const eco = require('discord-mongoose-economy');
 const ty = eco.connect('mongodb+srv://jayjay-ops:jayjay-ops@cluster0.orjsg.mongodb.net/test');
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'withdraw',
            description: "withdraw money from bank",
            category: 'fun',
            usage: `${client.config.prefix}withdraw [value]`,
            aliases: ['wit', 'withdraw'],
            baseXp: 10
        })
    }

run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        let username = user === M.sender.jid ? M.sender.username : '🤷🏽‍♂️'
        if (!username) {
            // const contact = this.client.getContact(user)
            // username = contact.notify || contact.vname || contact.name || user.split('@')[0]
            username = user.split('@')[0]
        }
		if (!joined) return void M.reply("Provide the amount you want to withdraw!");
		const query = joined.trim();
const cara = 'cara'
const withdraw = await eco.withdraw(user, cara, query);
    if(withdraw.noten) return void M.reply('You can\'t withdraw what you don\'t have.'); //if user states more than whats in his wallet
    const add = eco.give(user, cara, query);
M.reply(`*${withdraw.amount}* has been added in your wallet.`)
}
}
