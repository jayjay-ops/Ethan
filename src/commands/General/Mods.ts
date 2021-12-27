

import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ ᴍᴏᴅs',
            description: "Displays the Moderators' contact info",
            category: 'general',
            usage: `${client.config.prefix}mods`,
            aliases: ['moderators', 'mod', 'owner', 'mods'],
            baseXp: 20
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
          M.reply(text)
    }
}


/*

import { MessageType, MessageOptions, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ ᴍᴏᴅs',
            description: "Displays the Moderators' contact info",
            category: 'general',
            usage: `${client.config.prefix}mods`,
            aliases: ['moderators', 'mod', 'owner', 'mods'],
            baseXp: 20
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        if (!this.client.config.mods || !this.client.config.mods[0]) return void M.reply('*No Mods Set*')
        const mods = this.client.config.mods;
        const vcard = 'BEGIN:VCARD\n' // metadata of the contact card
            + 'VERSION:3.0\n' 
            + 'FN:Jeff\n' // full name
            + 'ORG:Ashoka Uni;\n' // the organization of the contact
            + 'TEL;type=CELL;type=VOICE;waid=911234567890:+91 12345 67890\n' // WhatsApp ID + phone number
            + 'END:VCARD'
        await this.client.sendMessage(mods, {displayname: "owner", vcard: vcard}, MessageType.contact)
    }
}


*/


