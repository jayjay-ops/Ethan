import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import { MessageType } from "@adiwajshing/baileys"

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ ʜɪ',
            description: 'Generally used to check if bot is Up',
            category: 'general',
            usage: `${client.config.prefix}hi`,
            aliases: ['hi', 'hello'],
            baseXp: 0
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const buttons = [
  {buttonId: `${this.client.config.prefix}hi`, buttonText: {displayText: "Hi"}, type: 1}
]
        const buttonMessage = {
    contentText: "Bot Alive ",
    footerText: "© kaoi",
    buttons: buttons,
    headerType: 1
  }
    await this.client.sendMessage(M.from, buttonMessage as any, MessageType.buttonsMessage)

    return void (await M.reply(`🤵 Hello ${M.sender.username}!`))
    }
}
