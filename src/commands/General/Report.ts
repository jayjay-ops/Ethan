import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ ʀᴇᴘᴏʀᴛ',
            description: 'reports a bug to the own',
            category: 'bots',
            usage: `${client.config.prefix}ethan`,
            aliases: ['report'],
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        M.reply("Report under construction") 
    /*
       if (!joined) return void M.reply('Please enter a report message!');
       const msg = joined.trim()
       const mods = this.client.config.mods;
         for(const numbers of mods)
           await this.client.sendMessage(numbers,msg,MessageType.text) 
  */
   }
}
