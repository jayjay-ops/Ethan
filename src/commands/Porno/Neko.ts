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
            command: '➣ sᴇx-ɴᴇᴋᴏ',
            description: 'Will send you random nsfw neko image.',
            aliases: ['n-neko', 'sex-neko'],
            category: 'porno',
            usage: `${client.config.prefix}sex-neko`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        // fetch result of https://api.waifu.pics/nsfw/neko from the API using axios
        const { data } = await axios.get('https://api.waifu.pics/nsfw/neko')
        if ( !(await this.client.getGroupData(M.from)).nsfw)
            return void M.reply(
                `Cannot Display NSFW content before enabling. Use ${this.client.config.prefix}activate nsfw to activate nsfw`
            )
        const buffer = await request.buffer(data.url).catch((e) => {
          // if ( !(await this.client.getGroupData(M.from)).nsfw)
           // return void M.reply(
                //`Cannot Display NSFW content before enabling. Use ${this.client.config.prefix}activate nsfw to activate nsfw`
            //)
            return void M.reply(e.message)
        })
        while (true) {
            try {
                M.reply(
                    buffer || 'Could not fetch image. Please try again later',
                    MessageType.image,
                    undefined,
                    undefined,
                    `Well... 🌟\n`,
                    undefined
                ).catch((e) => {
                    console.log(`This error occurs when an image is sent via M.reply()\n Child Catch Block : \n${e}`)
                    // console.log('Failed')
                    M.reply(`Could not fetch image. Here's the URL: ${data.url}`)
                })
                break
            } catch (e) {
                // console.log('Failed2')
                M.reply(`Could not fetch image. Here's the URL : ${data.url}`)
                console.log(`This error occurs when an image is sent via M.reply()\n Parent Catch Block : \n${e}`)
            }
        }
        return void null
    }
}
