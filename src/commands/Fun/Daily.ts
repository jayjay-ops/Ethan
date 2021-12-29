const eco = require('discord-mongoose-economy');

 const ty = eco.connect('mongodb+srv://jayjay-ops:jayjay-ops@cluster0.orjsg.mongodb.net/test');

import MessageHandler from '../../Handlers/MessageHandler'

import BaseCommand from '../../lib/BaseCommand'

import WAClient from '../../lib/WAClient'

import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {

    constructor(client: WAClient, handler: MessageHandler) {

        super(client, handler, {

            command: 'daily',

            description: "gives you your daily coins",

            category: 'fun',

            usage: `${client.config.prefix}daily (@tag)`,

            aliases: ['daily', 'reward'],

            baseXp: 10

        })

    }

    run = async (M: ISimplifiedMessage): Promise<void> => {

        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)

  const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid

const cara = "cara"

        const daily  = await eco.daily(user, cara, 1000); //give 500 for daily, can be changed

    if(daily.cd) return void M.reply(`You already claimed daily for today, come back in ${daily.cdL}`); //cdL is already formatted cooldown Left

    M.reply(`you claimed 🪙${daily.amount} for daily`);

}

}

