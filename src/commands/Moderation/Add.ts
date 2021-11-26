import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage , IParsedArgs} from '../../typings'
export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            adminOnly: true,
            command: 'ᴀᴅᴅ',
            description: 'adds participant to group chats',
            category: 'moderation',
            usage: `${client.config.prefix}add [@mention | tag]`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage,parsedArgs: IParsedArgs): Promise<void> => {
        const number = parsedArgs.joined.replace(/\s/g,'').replace(/\+/g,'')
        // let text = '*Action*\n\n'
        try{
        if (!M.groupMetadata?.admins?.includes(this.client.user.jid))
            return void M.reply(`❌ Failed to ${this.config.command} as I'm not an admin`)
        if (!number.length) return void M.reply(`Please write the user's number you want to ${this.config.command}`)
        this.client.isOnWhatsApp(`${number}@s.whatsapp.net`)
        if(!this.client.groupAdd(M.from,[`${number}@s.whatsapp.net`])) return void M.reply(`the person you are trying to add is not on whatsapp`)
        await M.reply(`successfully added the person`, undefined, undefined, [...M.mentioned, M.sender.jid])
        }catch{
            M.reply(`something went wrong`)
        }
    }
}
