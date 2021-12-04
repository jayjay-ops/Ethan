import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import { readFileSync} from 'fs';

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ sʟᴏᴛ',
            description: 'random quote.',
            aliases: ['spin','slot'],
            category: 'games',
            usage: `${client.config.prefix}slot`,
            baseXp: 30
        })
    }
    //Read slot.json file
    run = async (M: ISimplifiedMessage): Promise<void> => {
         const slot = readFileSync(this.client.assets.get('slot'));
         const exp = (await this.client.getUser(user)).Xp;
         //const userxpslot = exp[0]
         //let oldxp = userxpslot;
        if (${exp} < 1000)
           M.reply("not enough experince to play")
}



//if (xp < 1000)


