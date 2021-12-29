import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { IParsedArgs, ISimplifiedMessage } from "../../typings";
import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { Sticker, Categories, StickerTypes } from 'wa-sticker-formatter'
import axios from 'axios'
const eco = require('discord-mongoose-economy');
const ty = eco.connect('mongodb+srv://jayjay-ops:jayjay-ops@cluster0.orjsg.mongodb.net/test');


export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "gamble",
			aliases: ["gr"],
			description: "You can gamble. ",
			category: "fun",
			usage: `${client.config.prefix}gamble <value> <direction>\n\nExample: ${client.config.prefix}gamble 100 right`,
			baseXp: 40,
		});
	}

	run = async (
		M: ISimplifiedMessage,
		{ joined }: IParsedArgs
	): Promise<void> => {

const texts = joined.trim().split(" ");
		if (texts[0] === "")
			return void M.reply(
				`Use ${this.client.config.prefix}gamble (100 right)`
			);
		const opp = texts[1];// your value
		const value = texts[0].toLowerCase();
if (!value) return void M.reply("Give me the value, Baka!");
		if (!opp) return void M.reply("Give me the direction, Baka!");
let gg = parseInt(value)
if (isNaN(gg)) return void M.reply("check your text plz u r using the command in a wrong way")

        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
		const cara = 'cara'
const balance = await eco.balance(user, cara); 
let g = (balance.wallet) > parseInt(value)
if(g == false) return void M.reply("you cant baka check your wallet ");
let k = 49
let a = (k) > parseInt(value)
//Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.	
if(a == true) return void M.reply("you cant baka do with more than 50");
                //if(balance.wallet < value) return void M.reply('no enough money');
const F = ["left", "right"]
const r = F[Math.floor(Math.random () * F.length)]
switch (r) {
  case 'right':
  let right = "https://www.freeiconspng.com/thumbs/arrow-icon/right-arrow-icon-27.png"
  	let stcker: any = await new Sticker(right, {
			pack: "sticker",
			author: "BY cara",
			quality: 90,
			type: "crop",
			categories: ["🎊"],
		});
await M.reply(
			await stcker.build(),
			MessageType.sticker,
			Mimetype.webp,)
    break
  case 'left':
  let left = "https://www.pngarts.com/files/2/Left-Arrow-PNG-Download-Image.png"
  	let stiker: any = await new Sticker(left, {
			pack: "sticker",
			author: "BY cara",
			quality: 90,
			type: "crop",
			categories: ["🎊"],
		});
await M.reply(
			await stiker.build(),
			MessageType.sticker,
			Mimetype.webp,)
    break
};
if ( r == opp){
const give = await eco.give(user, cara, value);
M.reply(`📈 *You won ${value}*`)
}else{
const deduct = await eco.give(user, cara, value);
M.reply(`📉 *you won ${value}*`)
}
}
}
