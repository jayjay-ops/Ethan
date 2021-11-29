import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
const r = require('better-tord');

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ ᴅᴀʀᴇ',
            description: 'Gives you random task',
            category: 'games',
            aliases: ['dare', 'dr']
            usage: `${client.config.prefix}dare`,
            
        })
    }

    
    run = async (M: ISimplifiedMessage): Promise<void> => {
const dare = r.get_dare();
		await M.reply(dare);
	};
}
