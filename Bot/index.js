const { Client, GatewayIntentBits } = require("discord.js");
const express = require("express");

// Keep alive server
const app = express();
app.get("/", (req, res) => res.send("Bot aktif!"));
app.listen(3000, () => console.log("Keep alive açık"));

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]
});

const TOKEN = process.env.TOKEN;

client.on("ready", () => {
  console.log(`✅ Bot giriş yaptı: ${client.user.tag}`);
});

client.on("messageCreate", message => {
  if (message.content === "!ping") {
    message.reply("🏓 Pong!");
  }
});

client.login(TOKEN);
