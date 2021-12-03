/** @format */

/*
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "➣ ɪɴғᴏ",
			description: "Will display the info of the bot",
			category: "bots",
			usage: `${client.config.prefix}info`,
                        aliases: ['about','info'],
			baseXp: 0,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		/*eslint-disable @typescript-eslint/no-explicit-any*/
/*
		const chats: any = this.client.chats
			.all()
			.filter((v) => !v.read_only && !v.archive)
			.map((v) => v.jid)
			.map((jids) => (jids.includes("g.us") ? jids : null))
			.filter((v) => v);
		const pad = (s: any) => (s < 10 ? "0" : "") + s;
		const formatTime = (seconds: any) => {
			const hours = Math.floor(seconds / (60 * 60));
			const minutes = Math.floor((seconds % (60 * 60)) / 60);
			const secs = Math.floor(seconds % 60);
			return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
		};
		const uptime = () => formatTime(process.uptime());
		await M.reply(
			`*━━━❪ 〠 ᵖⁱⁿᵍ ᵇᵒᵗ 〠 ❫━━━*\n\n✑ *❡roups: ${
				chats.length
			}*\n\n✑ *☫ptime: ${uptime()}*`
		);
	};
}
*/



import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "➣ ɪɴғᴏ",
			description: "Will display the info of the bot",
			category: "bots",
			usage: `${client.config.prefix}info`,
                        aliases: ['about','info', 'ping-bot'],
			baseXp: 0,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		/*eslint-disable @typescript-eslint/no-explicit-any*/
		const chats: any = this.client.chats
			.all()
			.filter((v) => !v.read_only && !v.archive)
			.map((v) => v.jid)
			.map((jids) => (jids.includes("g.us") ? jids : null))
			.filter((v) => v);
                const dms = this.client.chats.all().filter((chat) => chat.jid.endsWith('@s.whatsapp.net'))
                       let a = [];
                       for(let jids of dms) {
                       const p = jids.jid
                       a.push(p) 
                     };
		const pad = (s: any) => (s < 10 ? "0" : "") + s;
		const formatTime = (seconds: any) => {
			const hours = Math.floor(seconds / (60 * 60));
			const minutes = Math.floor((seconds % (60 * 60)) / 60);
			const secs = Math.floor(seconds % 60);
			return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
		};
		const uptime = () => formatTime(process.uptime());
		await M.reply(`*━━━❪ 〠 ᵖⁱⁿᵍ ᵇᵒᵗ 〠 ❫━━━*\n\n✑ *ͼhats: ${a.length.toString()}*\n\n✑ *❡roups: ${chats.length}*\n\n✑ *☫ptime: ${uptime()}*`
		);
	};
}


