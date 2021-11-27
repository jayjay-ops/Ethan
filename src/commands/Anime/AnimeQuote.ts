import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import axios from 'axios'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ ᴀɴɪᴍᴇǫᴜᴏᴛᴇ',
            description: 'random anime quote.',
            aliases: ['aq', 'animequote'],
            category: 'anime',
            usage: `${client.config.prefix}animequote`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        await axios
            .get(`https://animechan.vercel.app/api/random`)
            .then((response) => {
                // console.log(response);
                const text = `⛩ *Anime:* ${response.data.anime}\n\n*🎎 Character:* ${response.data.character}\n\n*✏ Quote:* ${response.data.quote}`
                M.reply(text)
            })
            .catch((err) => {
                M.reply(`🔍 Error: ${err}`)
            })
    }
}
