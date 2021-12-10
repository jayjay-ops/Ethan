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
            baseCoin: 10
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
       const msg: string = ""
const mods = this.client.config.mods
for(const numbers of mods){
this.client.sendMEssage(numbers,msg,MessageType.text)} 
}



/*
const chitoge: any = joined.trim().split("|");
		const term: string = chitoge[0];
		const amount: number = chitoge[1];
		if (term === "")
			return void M.reply(
				`Give me the wallpaper term and page to search, Baka!`
			);

*/
