const eco = require('discord-mongoose-economy');
 const ty = eco.connect('mongodb+srv://jayjay-ops:jayjay-ops@cluster0.orjsg.mongodb.net/test');
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'incbankstorage',
            description: "Increase your bank storage",
            category: 'fun',
            usage: `${client.config.prefix}incbankstorage [value]`,
            aliases: ['inc', 'ibs'],
            baseXp: 10
        })
    }

run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {
		if (!joined) return void M.reply("💴 *Bank-capacity* 💳\n\n1 | *1000* = ¥100\n\n2 | *100000* = ¥1000\n\n3 | *10000000* = ¥10000000\n\nEx- /inc 1 OR /inc 1000");
if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        let username = user === M.sender.jid ? M.sender.username : ''
let cara = 'cara'
let value = joined.trim();

let k = parseInt(value)
const balance = await eco.balance(user, cara);
switch (value) {
  case '1000':
  case '1':
  if (k > balance.wallet ) return void M.reply("Check your wallet");
    const deduct1 = await eco.deduct(user, cara, 100);
    const add1 = eco.giveCapacity(user, cara, 1000); 
    await M.reply(`1000 coins storage has been added in ${username} bank`)
     
    break
case '100000':
case '2':
if (k < balance.wallet) return void M.reply("Check your wallet");
    const deduct2 = await eco.deduct(user, cara, 1000);
    const add2 = eco.giveCapacity(user, cara, 100000); 
    await M.reply(`100000 coins storage has been added in ${username} bank`)
     
    break
  case '10000000':
  case '3':
  if (k < balance.wallet) return void M.reply("Check your wallet");
    const deduct3 = await eco.deduct(user, cara, 10000);
    const add3 = eco.giveCapacity(user, cara, 10000000); 
    await M.reply(`10000000 coins storage has been added in ${username} bank`)
     
    break
  default:
   await M.reply('*What are you trying to do*.')
}
}
}




