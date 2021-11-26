import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'ᴘᴏᴋᴇᴍᴏɴ',
            description: `Gives you the data of the given pokemon.`,
            aliases: ['pkmn'],
            category: 'anime',
            usage: `${client.config.prefix}pokemon [name/id]`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {

        if (!joined) return void M.reply('Please provide the pokemon name or id you wanna search.')
        const o = joined.trim()
        console.log(o)
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${o}`)
        if (data === undefined) {
                return void M.reply('Invalid pokemon name or id.')
            }
        let i = ''
        i += `💫 *Name: ${data.name}*\n`
        i += `〽️ *Pokedex ID: ${data.id}\n`
        i += `⚖ *Weight: ${data.weight}*\n`
        i += `🔆 *Height: ${data.height}*\n`
        i += `🌟 *Base Experience: ${data.base_experience}*\n`
        i += `📛 *Abilities: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name}*\n`
        i += `🎀 *Type: ${data.types[0].type.name}*\n`
        i += `✳ *HP: ${data.stats[0].base_stat}*\n`
        i += `⚔ *Attack: ${data.stats[1].base_stat}*\n`
        i += `🔰 *Defense: ${data.stats[2].base_stat}*\n`
        i += `☄ *Special Attack: ${data.stats[3].base_stat}*\n`
        i += `🛡 *Special Defense:${data.stats[4].base_stat}*\n`
        i += `🎐 *Speed: ${data.stats[5].base_stat}*\n`
        const buffer = await request.buffer(data.sprites.front_default).catch((e) => {
        })
        while (true) {
            try {
                M.reply(
                    buffer || '✖ An error occurred. Please try again later',
                    MessageType.image,
                    undefined,
                    undefined,
                    `${i}`,
                    undefined
                ).catch((err) => {
                    console.log(`${err}`)
                    M.reply(`✖ An error occurred. Please try again later.`)
                })
                break
            } catch (err) {
                M.reply(`✖ An error occurred. Please try again later.`)
                console.log(`${err}`)
            }
        }
        return void null
    }
}
