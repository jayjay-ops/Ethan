import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'
import { readFileSync} from 'fs';

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '➣ sʟᴏᴛ',
            description: 'random quote.',
            aliases: ['spin','slot'],
            category: 'games',
            usage: `${client.config.prefix}slot`,
            baseXp: 30
        })
    }
    //Read slot.json file
    run = async (M: ISimplifiedMessage): Promise<void> => {
         const xp = await this.client.getUser(user)).Xp
         const _slot = JSON.parse(this.client.assets.get('slot'))

}









		const _slotme = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
		const slotme7 = _slotme[7]	//--- money	
	
		const slotdesign = _slotme[11]	//--- account design
		
		const _userxpslot = JSON.parse(fs.readFileSync(`./data/xp/${sender.split("@")[0]}.xp.json`));	
		const userxpslot = _userxpslot[0]	//--- xp
		let oldxp = Number(userxpslot);

	if (slotme7 < 7) return reply(`${slotdesign} ﹝You have not enough money to play. Your money: ${slotme7}$﹞`) 
		  
		const slot1 = _slot[Math.floor(Math.random() * _slot.length)]
		const slot2 = _slot[Math.floor(Math.random() * _slot.length)]
		const slot3 = _slot[Math.floor(Math.random() * _slot.length)]
		const slot4 = _slot[Math.floor(Math.random() * _slot.length)]
		const slot5 = _slot[Math.floor(Math.random() * _slot.length)]
		const slot6 = _slot[Math.floor(Math.random() * _slot.length)]
		const slot7 = _slot[Math.floor(Math.random() * _slot.length)]
		const slot8 = _slot[Math.floor(Math.random() * _slot.length)]
		const slot9 = _slot[Math.floor(Math.random() * _slot.length)]
	
	
if 	(slotme7 < 99) {
	
				let ps = Number(slotme7);

				if ((slot1 == slot2) && slot2 == slot3) {	

				let os = Number(250);
				let ops = ps + os; 
				fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${slotme7}`, ops);
					
					fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Done!');
					})
				})

						const delayslot = ms => new Promise(resolve => setTimeout(resolve, ms))
						await delayslot(3000) /// waiting 1 second.

		const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
		const slotme8 = _slotme8[7]	//--- money	

        let addxp = Number(50);
		let newxp = oldxp + addxp; 

		fs.readFile(`./data/xp/${sender.split("@")[0]}.xp.json`, 'utf-8', function(err, data) {
			if (err) throw err;
			
			var newValue = data.replace(`${userxpslot}`, newxp);
			
			fs.writeFile(`./data/xp/${sender.split("@")[0]}.xp.json`, newValue, 'utf-8', function(err, data) {
				if (err) throw err;
				console.log('Gained xp!');
			})
		})


  reply(`${slotdesign} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ ♕︎ 𝙹𝚊𝚌𝚔𝚙𝚘𝚝 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`)  
}  
  
else if (slot1 == slot2) {	

			let os = Number(14);
			let ops = ps + os; 
			fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
				if (err) throw err;
				
				var newValue = data.replace(`${slotme7}`, ops);
				
				fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
					if (err) throw err;
					console.log('Done!');
				})
			})

					const delayslot = ms => new Promise(resolve => setTimeout(resolve, ms))
					await delayslot(3000) /// waiting 1 second.

					const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
					const slotme8 = _slotme8[7]	//--- money	

					let addxp = Number(10);
					let newxp = oldxp + addxp; 

					fs.readFile(`./data/xp/${sender.split("@")[0]}.xp.json`, 'utf-8', function(err, data) {
						if (err) throw err;
						
						var newValue = data.replace(`${userxpslot}`, newxp);
						
						fs.writeFile(`./data/xp/${sender.split("@")[0]}.xp.json`, newValue, 'utf-8', function(err, data) {
							if (err) throw err;
							console.log('Gained xp!');
						})
					})

	reply(`${slotdesign} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`)  
}

else if (slot2 == slot3) {	

			let os = Number(14);
			let ops = ps + os; 
			fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
				if (err) throw err;
				
				var newValue = data.replace(`${slotme7}`, ops);
				
				fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
					if (err) throw err;
					console.log('Done!');
				})
			})

				const delayslot = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delayslot(3000) /// waiting 1 second.

				const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
				const slotme8 = _slotme8[7]	//--- money	

				let addxp = Number(10);
				let newxp = oldxp + addxp; 

				fs.readFile(`./data/xp/${sender.split("@")[0]}.xp.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${userxpslot}`, newxp);
					
					fs.writeFile(`./data/xp/${sender.split("@")[0]}.xp.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Gained xp!');
					})
				})

reply(`${slotdesign} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`)   
}

else if (slot1 == slot3) {	

				let os = Number(14);
				let ops = ps + os; 
				fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${slotme7}`, ops);
					
					fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Done!');
					})
				})

					const delayslot = ms => new Promise(resolve => setTimeout(resolve, ms))
					await delayslot(3000) /// waiting 1 second.

					const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
					const slotme8 = _slotme8[7]	//--- money	

					let addxp = Number(10);
					let newxp = oldxp + addxp; 

					fs.readFile(`./data/xp/${sender.split("@")[0]}.xp.json`, 'utf-8', function(err, data) {
						if (err) throw err;
						
						var newValue = data.replace(`${userxpslot}`, newxp);
						
						fs.writeFile(`./data/xp/${sender.split("@")[0]}.xp.json`, newValue, 'utf-8', function(err, data) {
							if (err) throw err;
							console.log('Gained xp!');
						})
					})

reply(`${slotdesign} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`) 

}

 else {
	
			let os = Number(4);
			let ops = ps - os; 
			fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
				if (err) throw err;
				
				var newValue = data.replace(`${slotme7}`, ops);
				
				fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
					if (err) throw err;
					console.log('Done!');
				})
			})

				const delayslot = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delayslot(3000) /// waiting 1 second.

				const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
				const slotme8 = _slotme8[7]	//--- money	

				let addxp = Number(2);
				let newxp = oldxp + addxp; 

				fs.readFile(`./data/xp/${sender.split("@")[0]}.xp.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${userxpslot}`, newxp);
					
					fs.writeFile(`./data/xp/${sender.split("@")[0]}.xp.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Gained xp!');
					})
				})
	 
reply(`${slotdesign} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝙽𝚘 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`)  
}
}

else if 	(slotme7 > 99) {
	
					let ps = Number(slotme7);

				if ((slot1 == slot2) && slot2 == slot3) {	

				let os = Number(250);
				let ops = ps + os; 
				fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${slotme7}`, ops);
					
					fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Done!');
					})
				})

						const delayslot = ms => new Promise(resolve => setTimeout(resolve, ms))
						await delayslot(3000) /// waiting 1 second.

		const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
		const slotme8 = _slotme8[7]	//--- money	

		let addxp = Number(50);
		let newxp = oldxp + addxp; 

		fs.readFile(`./data/xp/${sender.split("@")[0]}.xp.json`, 'utf-8', function(err, data) {
			if (err) throw err;
			
			var newValue = data.replace(`${userxpslot}`, newxp);
			
			fs.writeFile(`./data/xp/${sender.split("@")[0]}.xp.json`, newValue, 'utf-8', function(err, data) {
				if (err) throw err;
				console.log('Gained xp!');
			})
		})

  reply(`${slotdesign} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ ♕︎ 𝙹𝚊𝚌𝚔𝚙𝚘𝚝 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`)  
}  
  
else if (slot1 == slot2) {	

			let os = Number(14);
			let ops = ps + os; 
			fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
				if (err) throw err;
				
				var newValue = data.replace(`${slotme7}`, ops);
				
				fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
					if (err) throw err;
					console.log('Done!');
				})
			})

					const delayslot = ms => new Promise(resolve => setTimeout(resolve, ms))
					await delayslot(3000) /// waiting 1 second.

					const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
					const slotme8 = _slotme8[7]	//--- money	

					let addxp = Number(10);
					let newxp = oldxp + addxp; 

					fs.readFile(`./data/xp/${sender.split("@")[0]}.xp.json`, 'utf-8', function(err, data) {
						if (err) throw err;
						
						var newValue = data.replace(`${userxpslot}`, newxp);
						
						fs.writeFile(`./data/xp/${sender.split("@")[0]}.xp.json`, newValue, 'utf-8', function(err, data) {
							if (err) throw err;
							console.log('Gained xp!');
						})
					})

	reply(`${slotdesign} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`)  
}

else if (slot2 == slot3) {	

			let os = Number(14);
			let ops = ps + os; 
			fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
				if (err) throw err;
				
				var newValue = data.replace(`${slotme7}`, ops);
				
				fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
					if (err) throw err;
					console.log('Done!');
				})
			})

				const delayslot = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delayslot(3000) /// waiting 1 second.

				const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
				const slotme8 = _slotme8[7]	//--- money	

				let addxp = Number(10);
				let newxp = oldxp + addxp; 

				fs.readFile(`./data/xp/${sender.split("@")[0]}.xp.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${userxpslot}`, newxp);
					
					fs.writeFile(`./data/xp/${sender.split("@")[0]}.xp.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Gained xp!');
					})
				})

reply(`${slotdesign} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`)   
}

else if (slot1 == slot3) {	

				let os = Number(14);
				let ops = ps + os; 
				fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
					if (err) throw err;
					
					var newValue = data.replace(`${slotme7}`, ops);
					
					fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
						if (err) throw err;
						console.log('Done!');
					})
				})

					const delayslot = ms => new Promise(resolve => setTimeout(resolve, ms))
					await delayslot(3000) /// waiting 1 second.

					const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
					const slotme8 = _slotme8[7]	//--- money	

					let addxp = Number(10);
					let newxp = oldxp + addxp; 

					fs.readFile(`./data/xp/${sender.split("@")[0]}.xp.json`, 'utf-8', function(err, data) {
						if (err) throw err;
						
						var newValue = data.replace(`${userxpslot}`, newxp);
						
						fs.writeFile(`./data/xp/${sender.split("@")[0]}.xp.json`, newValue, 'utf-8', function(err, data) {
							if (err) throw err;
							console.log('Gained xp!');
						})
					})

reply(`${slotdesign} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝚂𝚖𝚊𝚕𝚕 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`) 

}

 else {
	
			let os = Number(10);
			let ops = ps - os; 
			fs.readFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, 'utf-8', function(err, data) {
				if (err) throw err;
				
				var newValue = data.replace(`${slotme7}`, ops);
				
				fs.writeFile(`./${sender.split("@")[0]}@s.whatsapp.net.json`, newValue, 'utf-8', function(err, data) {
					if (err) throw err;
					console.log('Done!');
				})
			})

				const delayslot = ms => new Promise(resolve => setTimeout(resolve, ms))
                await delayslot(3000) /// waiting 1 second.

				const _slotme8 = JSON.parse(fs.readFileSync(`./${sender.split("@")[0]}@s.whatsapp.net.json`));	
				const slotme8 = _slotme8[7]	//--- money	

				let addxp = Number(2);
				let newxp = oldxp + addxp; 

					fs.readFile(`./data/xp/${sender.split("@")[0]}.xp.json`, 'utf-8', function(err, data) {
						if (err) throw err;
						
						var newValue = data.replace(`${userxpslot}`, newxp);
						
						fs.writeFile(`./data/xp/${sender.split("@")[0]}.xp.json`, newValue, 'utf-8', function(err, data) {
							if (err) throw err;
							console.log('Gained xp!');
						})
					})
	 
reply(`${slotdesign} 𝚂𝚕𝚘𝚝\n\n${slot4}${slot5}${slot6}\n- - - - - - - - - \n${slot1}${slot2}${slot3} ☜︎ 𝙽𝚘 𝚠𝚒𝚗 ♕︎\n- - - - - - - - - \n${slot7}${slot8}${slot9}\n\n𝚖𝚘𝚗𝚎𝚢 𝚕𝚎𝚏𝚝 ${slotme8}$`)  
}
}


break
