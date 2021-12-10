import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ ʀᴇᴘᴏʀᴛ',
            description: 'reports a bug to the own',
            category: 'general',
            usage: `${client.config.prefix}ethan`,
            aliases: ['report'],
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
       const msg = ""
const mods = this.client.config.mods
for(const numbers of mods){
this.client.sendMessage(numbers,msg,MessageType.text)} 
}
  }
