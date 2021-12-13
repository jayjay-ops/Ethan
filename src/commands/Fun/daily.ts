












if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
let gold = 10000
await this.client.setGold(user,
gold);
M.reply("10000 has been added to your account")
}
