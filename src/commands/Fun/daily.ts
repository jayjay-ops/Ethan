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

       if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
            const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
            let gold = 10000
            await this.client.setGold(user,gold);
                M.reply("10000 has been added to your account")
}
}
