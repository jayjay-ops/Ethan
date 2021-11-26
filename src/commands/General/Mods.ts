import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'ᴍᴏᴅs',
            description: "Displays the Moderators' contact info",
            category: 'general',
            usage: `${client.config.prefix}mods`,
            aliases: ['moderators', 'mod', 'owner'],
            baseXp: 40
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (!this.client.config.mods || !this.client.config.mods[0]) return void M.reply('*No Mods Set*')
        const filteredMap = this.client.config.mods.map((mod) => this.client.getContact(mod)).filter((user) => user)
        let text = '🧛‍♂️ *༄☯︎𝐰𝐧𝐞𝐫 ➪ 𝐢𝐧𝐟𝐨꧂* 💬\n\n'
        filteredMap.forEach(
            (user, index) =>
                (text += `#${index + 1}\n *🤴 𝑵𝒂𝒎𝒆: ${
                    user.notify || user.vname || user.name || 'null'
                }*\n\n *☎️ 𝑪𝒐𝒏𝒕𝒂𝒄𝒕: https://wa.me/+${user?.jid?.split('@')[0]}*\n\n`)
        )
        text += `\n👽 *𝐁𝐨𝐭 ➪ 𝐢𝐧𝐟𝐨* 💬\n\n𝑵𝒂𝒎𝒆 ➪ 𝐸𝑡ℎ𝑎𝑛-𝐵☻︎𝑡\n\n𝑪𝒐𝒏𝒕𝒂𝒄𝒕 ➪ wa.me/+2349026336891\n\n𝑨𝒄𝒕𝒊𝒗𝒆-𝑺𝒕𝒂𝒕𝒖𝒔 ➪ 𝑂𝑛𝑙𝑖𝑛𝑒 𒊹︎︎︎ `
        return void M.reply(text)
    }
}
