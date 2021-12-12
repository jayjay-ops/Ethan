import { MessageType } from '@adiwajshing/baileys'
import request from '../../lib/request'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'rob',
            aliases: ['rob', 'rob'],
            description: 'rob your friend ',
            category: 'fun',
            dm: true,
            usage: `${client.config.prefix}rob`
        })
    }
    // static count = 0
    
    run = async (M: ISimplifiedMessage): Promise<void> => {
var typ = ["ran","rob","catch"];
const random = typ[Math.floor(Math.random() * typ.length)];
if (M.quoted?.sender && !M.mentioned.includes(M.quoted.sender)) M.mentioned.push(M.quoted.sender)
        while (M.mentioned.length < 2) M.mentioned.push(M.sender.jid)
        const user1 = M.mentioned[0]
        const user2 = M.mentioned[1]
if ((await this.client.getUser(user1)).Xp || 0>500) {
  if ((await this.client.getUser(user2)).Xp || 0>500) {
let tpy = random
switch (tpy) {
  case 'ran':
  await M.reply (' the victim ran away')
    break
  case 'rob':
  await M.reply('You successfully robbed  .')
    break
    case 'catch':
  await M.reply('Sorry you got caught and paid $50 .')
    break
};
}else {
 await M.reply("sorry, you dont have sufficient Xp to rob")
};
}else {
 await M.reply("sorry, the user dont have sufficient coins for you to rob")
};
}
}
