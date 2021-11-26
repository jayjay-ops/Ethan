import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { IParsedArgs, ISimplifiedMessage } from '../../typings'
import axios from 'axios'
import request from '../../lib/request'
import { MessageType, Mimetype } from '@adiwajshing/baileys'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'pypi',
            description: `Gives you info about python package/lib`,
            aliases: ['pypi', 'py'],
            category: 'educative',
            usage: `${client.config.prefix}pypi [name]`,
            baseXp: 50
        })
    }

    run = async (M: ISimplifiedMessage, { joined }: IParsedArgs): Promise<void> => {
        if (!joined) return void (await M.reply(`Please provide the package name`))
        const pypi = joined.trim()
        await axios
            .get(`https://api.abirhasan.wtf/pypi?query=${pypi}`)
            .then((response) => {
                const text = `🚀 Package Name : ${response.data.PackageName}\n 🎉 About : ${response.data.About}\n 👋 HomePage : ${response.data.HomePage}\n 🌐 PyPi : ${response.data.PyPi}\n 😉 Command : ${response.data.PipCommand}\n  `
                M.reply(text)
            })
            .catch((err) => {
                M.reply(`Sorry, couldn't find package *${pypi}*\n📝 *Note:* Well....`)
            })
    }
}
