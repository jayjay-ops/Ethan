import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import {  IParsedArgs, ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ ʙʀᴏᴀᴅᴄᴀsᴛ',
            description: 'Tags all users in group chat',
            aliases: ['broadcast', 'announcement','bc'],
            category: 'dev',
            usage: `${client.config.prefix}broadcast`,
            modsOnly: true,
            baseXp: 0
        })
    }

run = async (M: ISimplifiedMessage,  { joined }: IParsedArgs): Promise<void> => {
        
        const term = joined.trim();
        const chats:any= this.client.chats.all().filter(v => !v.read_only && !v.archive).map(v => v.jid).map(jids => jids.includes("g.us")? jids : null).filter(v=>v);
        for(let i =0;i<chats.length;i++){
        const text = `*📮 🄱🅁🄾🄰🄳🄲🄰🅂🅃* \n\n${term}\n\n *『 📬  𝒇𝒓𝒐𝒎 𝒐𝒘𝒏𝒆𝒓 🕵️ 』*`
        this.client.sendMessage(chats[i], text,MessageType.text,{contextInfo : {mentionedJid : M.groupMetadata?.participants.map((user) => user.jid) }})
        }
    }
}
