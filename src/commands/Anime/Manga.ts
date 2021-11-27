import axios from 'axios'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ ᴍᴀɴɢᴀ',
            description: `Gives you the data of the given manga from MyAnimeList.`,
            aliases: ['mnga', 'manga'],
            category: 'anime',
            usage: `${client.config.prefix}manga [title]`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void (await M.reply(`Please provide the manga title.`))
        const search = joined.trim()
        const res = await axios.get(`https://api.jikan.moe/v3/search/manga?q=${search}`)
        if (!res) return void (await M.reply(`Couldn't find any matching manga title.`))
        const { data } = await axios.get(`https://api.jikan.moe/v3/manga/${res.data.results[0].mal_id}`)
        let text = ''
        text += `🎀 *Title: ${data.title}*\n`
        text += `🎋 *Type: ${data.type}*\n`
        text += `📈 *Status: ${data.status}*\n`
        text += `🌸 *Total Chapters: ${data.chapters}*\n`
        text += `🎗 *Total Volumes: ${data.volumes}*\n`
        text += `🌟 *Score: ${data.score}*\n`
        text += `🏅 *Rank: ${data.rank}*\n`
        text += `💫 *Popularity: ${data.popularity}*\n\n`
        text += `🌐 *URL: ${data.url}*\n\n`
        text += `❄ *Description:* ${data}.synopsis}`
        const buffer = await request.buffer(data.image_url).catch((e) => {
            return void M.reply(e.message)
        })
        while (true) {
            try {
                M.reply(
                    buffer || '✖ An error occurred. Please try again later.',
                    MessageType.image,
                    undefined,
                    undefined,
                    `${text}`,
                    undefined
                ).catch((e) => {
                    console.log(`This error occurs when an image is sent via M.reply()\n Child Catch Block : \n${e}`)
                    // console.log('Failed')
                    M.reply(`✖ An error occurred. Please try again later.`)
                })
                break
            } catch (e) {
                // console.log('Failed2')
                M.reply(`✖ An error occurred. Please try again later.`)
                console.log(`This error occurs when an image is sent via M.reply()\n Parent Catch Block : \n${e}`)
            }
        }
        return void null
    }
}
