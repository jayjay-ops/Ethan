
/*
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ICommand, IParsedArgs, ISimplifiedMessage } from '../../typings'
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import request from '../../lib/request'


export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ ʜᴇʟᴘ',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            aliases: ['help', 'h'],
        })
    }

    run = async (M: ISimplifiedMessage, parsedArgs: IParsedArgs): Promise<void> => {
            const n = [
            './assets/videos/Ethan2.mp4'
            ]
            let ethan = n[Math.floor(Math.random() * n.length)]
            if (!parsedArgs.joined) {
            const commands = this.handler.commands.keys()
            const categories: { [key: string]: ICommand[] } = {}
            for (const command of commands) {
                const info = this.handler.commands.get(command)
                if (!command) continue
                if (!info?.config?.category) continue
                if (Object.keys(categories).includes(info.config.category)) categories[info.config.category].push(info)
                else {
                    categories[info.config.category] = []
                    categories[info.config.category].push(info)
                }
            }
            let text = `\n漫~*'¨¯¨'*舞~舞*'¨¯¨·~漫\n\n❝ 𝑒𝑡𝒉𝑎𝑛 𝐵𝑜𝑡 𝑎𝑡 𝑦𝑜𝑢𝑟 𝑠𝑒𝑟𝑣𝑖𝑐𝑒 ❞\n\n漫~*'¨¯¨'*舞~舞*'¨¯¨·~漫\n\n\n『 𝐬𝒖𝒑𝒑𝒐𝒓𝒕 𝒖𝒔 𝒃𝒚 𝒇𝒐𝒍𝒍𝒐𝒘𝒊𝒏𝒈 𝒖𝒔 𝒐𝒏 𝒊𝒏𝒔𝒕𝒂𝒈𝒓𝒂𝒎 ➬ https://www.instagram.com/jayjay_ops 』\n\n\n\n`
            const keys = Object.keys(categories).sort((a, b) => a.localeCompare(b))
            for (const key of keys)
                text += `${this.emojis[keys.indexOf(key)]} \`\`\`⊰⊱┈─╌❊ ${this.client.util.capitalize(key)} ❊╌─┈⊰⊱\`\`\`\n\n ${categories[
                    key
                ]
                    .map((command) => command.config?.command)
                    .join('\n ')}\n\n\n`
            return void this.client.sendMessage(M.from, { url: ethan }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `${text}  
*╭─「 B☺︎︎T 」*
*│❏ Name ➪* *${M.sender.username}*
*│❏ Prefix ➪ ${this.client.config.prefix}*
*│❏ Bot-Name ➪ ❥︎Ethan-B☺︎︎t*
*│❏ Owner ➪ use ${this.client.config.prefix}mods*
*╰─☘︎───☘︎──☘︎───☘︎──☘︎──☘︎*\n\n
*◈ ━━━━ ⸙▌█║▌║▌║▌║▌║█╝⸙ ━━━━ ◈*\n

⚠️ *Note: Use ${this.client.config.prefix}help <command_name> to view the command info*` }
           )
        }
        const key = parsedArgs.joined.toLowerCase()
        const command = this.handler.commands.get(key) || this.handler.aliases.get(key)
        if (!command) return void M.reply(`No Command of Alias Found | "${key}"`)
        const state = await this.client.DB.disabledcommands.findOne({ command: command.config.command })
        M.reply(
            `🛸 *Command:* ${this.client.util.capitalize(command.config?.command)}\n🔮 *Status:* ${
                state ? 'Disabled' : 'Available'
            }\n🏷️ *Category:* ${this.client.util.capitalize(command.config?.category || '')}${
                command.config.aliases && command.config.command !== 'react'
                    ? `\n💡 *Aliases:* ${command.config.aliases.map(this.client.util.capitalize).join(', ')}`
                    : ''
            }\n👥 *Group Only:* ${this.client.util.capitalize(
                JSON.stringify(!command.config.dm ?? true)
            )}\n♻️ *Usage:* ${command.config?.usage || ''}\n\n♐ *Description:* ${command.config?.description || ''}`
        )
    }

    emojis = ['', '', '', '', '', '', '', '', '', '', '', '']
}

*/



import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ ʜᴇʟᴘ',
            description: 'Displays the help menu or shows the info of the command provided',
            category: 'general',
            usage: `${client.config.prefix}help (command_name)`,
            dm: true,
            aliases: ['help','h']
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            './assets/videos/Ethan2.mp4'
        ]
        let ethan = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: ethan }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `\n

┌───『 𝓗𝓪𝓷𝓭𝓸𝓾𝓽 』───
│⊶ 𝑼𝒔𝒆 ${this.client.config.prefix}𝒉𝒆𝒍𝒑 𝒕𝒐 𝒔𝒆𝒆 𝒄𝒐𝒎𝒎𝒂𝒏𝒅𝒔
│⊶ 𝑹𝒆𝒂𝒅 𝑩𝒐𝒕𝒕𝒐 𝒓𝒖𝒍𝒆𝒔 𝒃𝒆𝒇𝒐𝒓𝒆 𝒖𝒔𝒆
│⊶ © 𝑪𝒐𝒑𝒚𝒓𝒊𝒈𝒉𝒕 𝒌𝒂𝒐𝒊
│⊶ 𝑹𝒆𝒑𝒐𝒓𝒕 𝒂 𝒃𝒖𝒈 ${this.client.config.prefix}𝐨𝐰𝐧𝐞𝐫
└──☘︎─────☘︎────☘︎────☘︎

─────────────────────
❥︎ Ⓖ︎𝗲𝗻𝗲𝗿𝗮𝗹 

🎐 ${this.client.config.prefix}𝙷𝚎𝚕𝚙1


❥︎ Ⓐ︎𝗻𝗶𝗺𝗲 

🎐 ${this.client.config.prefix}𝙷𝚎𝚕𝚙2


❥︎ Ⓕ︎𝘂𝗻-Ⓖ︎𝗮𝗺𝗲𝘀 

🎐 ${this.client.config.prefix}𝙷𝚎𝚕𝚙3


❥︎ Ⓜ︎𝗲𝗱𝗶𝗮 

🎐 ${this.client.config.prefix}𝙷𝚎𝚕𝚙4


❥︎ Ⓜ︎𝗼𝗱𝗲𝗿𝗮𝘁𝗶𝗼𝗻 

🎐 ${this.client.config.prefix}𝙷𝚎𝚕𝚙5


❥︎ Ⓔ︎𝗱𝘂𝗰𝗮𝘁𝗶𝘃𝗲 

🎐 ${this.client.config.prefix}𝙷𝚎𝚕𝚙6


❥︎ Ⓓ︎𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 

🎐 ${this.client.config.prefix}𝙷𝚎𝚕𝚙7


❥︎ Ⓑ︎𝗼𝘁𝘀 

🎐 ${this.client.config.prefix}𝙷𝚎𝚕𝚙8


❥︎ Ⓟ︎𝗼𝗿𝗻𝗼 

🎐 ${this.client.config.prefix}𝙷𝚎𝚕𝚙9


─────────────────────
*╭─「 B☻︎TT☻︎ 」*
*│⊶ 𝙽𝚊𝚖𝚎 ➻* *${M.sender.username}*
*│⊶ 𝙿𝚛𝚎𝚏𝚒𝚡 ➻ ${this.client.config.prefix}*
*│⊶ 𝙱𝚘𝚝-𝙽𝚊𝚖𝚎 ➻ ᗴthan-B☻︎t*
*│⊶ 𝙾𝚠𝚗𝚎𝚛 ➻ use ${this.client.config.prefix}owner*
*╰─❥︎───⊶──❥︎───⊶──❥︎──⊶*

❛ 𝑝𝑙𝑒𝑎𝑠𝑒 𝐷𝑜𝑛'𝑡 𝑘𝑖𝑙𝑙 𝑚𝑦 𝑣𝑖𝑏𝑒𝑠 ❦︎ ❜

`}
        )
    }
}



