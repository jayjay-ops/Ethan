const eco = require('discord-mongoose-economy');
 const ty = eco.connect('');
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'transfer',
            description: "give money",
            category: 'economy',
            usage: `${client.config.prefix}transfer [value]`,
            aliases: ['give', 'share'],
            baseXp: 10
        })
    }

    run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		const texts = joined.trim().split(" ");
		if (texts[0] === "")
			return void M.reply(
				`Use ${this.client.config.prefix}transfer 100 @user`
			);
		const target =
				M.quoted && M.mentioned.length === 0
					? M.quoted.sender
					: M.mentioned[0] || null;
			if (!target || target === M.sender.jid)
   return void M.reply("wht u wanna say")
		        if (M.quoted?.sender && !M.mentioned.includes(M.quoted.sender)) M.mentioned.push(M.quoted.sender)
        while (M.mentioned.length < 2) M.mentioned.push(M.sender.jid)
const cara = 'cara'
const user1 = M.sender.jid
const user2 = target
		const word = texts[0];
		const code = texts[1];
let d = parseInt(word)
if (isNaN(d)) return void M.reply("check your text plz u r using the command in a wrong way")

const balance = await eco.balance(user1, cara); 
let a = (balance.wallet) < parseInt(word)
//Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.	
if(a == true) return void M.reply("you dont have sufficient money to transfer");

		//const texts[1] = M.mentioned[1]

//const cara = 'cara'
        const deduct = await eco.deduct(user1, cara, texts[0]);
        const give = await eco.give(user2, cara, texts[0]);
        M.reply(`Transaction successful \n\n New Balance: ${balance.wallet}`)
}
}





