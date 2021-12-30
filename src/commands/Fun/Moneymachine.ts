const eco = require('discord-mongoose-economy');
 const ty = eco.connect('mongodb+srv://jayjay-ops:jayjay-ops@cluster0.orjsg.mongodb.net/test');
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'donate',
            description: `gift money to a friend's wallet`,
            category: 'general',
            usage: `${client.config.prefix}donate [value]`,
            aliases: ['dn', 'forward', max],
            baseXp: 10
        })
    }

    run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		if (!joined) return void M.reply("Specify an amount, Baka!");
		const query = joined.trim();
        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
  const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
const cara = "cara"
        const add = eco.give(user, cara, query); //If the user doesn't exist in the Database, it makes one. Bank Capacity Will Be 2500(Default)+Amount you specified.
        M.reply("Transaction successful, check your new balance")
}
}
