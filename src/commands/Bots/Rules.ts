import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'
// import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ ʀᴜʟᴇs',
            description: `Get rules list`,
            aliases: ['rules'],
            category: 'bots',
            usage: `${client.config.prefix}rules`,
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // fetch result of https://waifu.pics/api/sfw/waifu from the API using axios
        return void M.reply( await request.buffer(`https://i.pinimg.com/564x/96/eb/e1/96ebe1427aa8505cf56b110a620503a3.jpg`),
        MessageType.image,
                    undefined,
                    undefined,
                    `_*❛ ╾╼🎀[Rules]🎀╾╼ ❜*_\n\n\n*➻* _Don't ask for script_\n\n*➻* _use !ethan to get the Official group link and support link_\n\n*➻* _If you want to chat with Ethan you can use *!bot/chat (your text)* both are different ai chat bots_\n\n*➻* _If you want to add Ethan-Bot in your group then contact the owner by *!owner/!mods*_ \n\n*➻* _Dont use wrong command, use the command given in the *help list*_ \n\n*➻* _Dont spam the bot with commands if the bot is not responding, its means the bot maybe offline or facing internet issue._ \n\n*➻* _Dont Dm the bot_ \n\n\n*IF YOU DONT FOLLOW THE RULES THEN YOU WILL BE BAN SOON* 🚫  `,
                    undefined
                ).catch((reason: any) =>
            M.reply(`✖ An error occurred. Please try again later.`))
    }
}
