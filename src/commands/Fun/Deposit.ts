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
            command: 'deposit ',
            description: "Deposit money in bank",
            category: 'fun',
            usage: `${client.config.prefix}deposit [value]`,
            aliases: ['dep', 'deposit'],
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
		if (!joined) return void M.reply("Provide the amount you want to deposit!");
		const text = joined.trim();
const cara = 'cara'
const deposit = await eco.deposit(user, cara, text);
    if(deposit.noten) return void M.reply('You can\'t deposit what you don\'t have.'); //if user states more than whats in his wallet
    M.reply(`Deposited ${deposit.amount} to your bank.`)
}
}
