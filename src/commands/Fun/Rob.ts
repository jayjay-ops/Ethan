import { MessageType } from '@adiwajshing/baileys'
import request from '../../lib/request'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'
const eco = require('discord-mongoose-economy');
const ty = eco.connect('mongodb+srv://jayjay-ops:jayjay-ops@cluster0.orjsg.mongodb.net/test');


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'rob',
            aliases: ['rob', 'thief'],
            description: 'rob your friend ',
            category: 'fun',
            dm: true,
            usage: `${client.config.prefix}rob`
        })
    }
    // static count = 0
    
    run = async (M: ISimplifiedMessage): Promise<void> => {
          const typ = [
			"ran",
			"rob",
			"catch",
		];
const random = typ[Math.floor(Math.random() * typ.length)];
if (M.quoted?.sender && !M.mentioned.includes(M.quoted.sender)) M.mentioned.push(M.quoted.sender)
        while (M.mentioned.length < 2) M.mentioned.push(M.sender.jid)
const target =
				M.quoted && M.mentioned.length === 0
					? M.quoted.sender
					: M.mentioned[0] || null;
			if (!target || target === M.sender.jid)
   return void M.reply("whom you wanna rob")
        const user1 = M.mentioned[0]
        const user2 = target
const cara = "cara"
const balance1 = await eco.balance(user1, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
const balance2 = await eco.balance(user2, cara); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
const bas1 = (balance1.wallet) > 500
const bas2 = (balance2.wallet) > 500
if ( (bas1) == true ) {
  if ( (bas2) == true ) {
let tpy = random
switch (tpy) {
  case 'ran':
  await M.reply (' *your victim escaped, no lost nor gain.*')
    break
  case 'rob':
  const deduct1 = await eco.deduct(user1, cara, balance2.wallet);
  const give = await eco.give(user2, cara, balance2.wallet);
  await M.reply('Robbery operation successfully.')
    break
    case 'catch':
    const deduct2 = await eco.deduct(user2, cara, balance1.wallet);
  await M.reply('*Sorry fbi👮 got u now pay us in $ .*')
    break
};
}else {
 await M.reply("*sorry, you dont have enough to pay incase you get caught.*")
};
}else {
 await M.reply("*sorry, your victim is poor let go.*")
};
}
}
