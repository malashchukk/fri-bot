import { userInfo } from "os";
import { stringify } from "querystring";
import { Telegraf, Markup } from "telegraf";

// const BOT_TOKEN = 5929657545:AAGJmhCQ57wCcH20KJkvZDGj3q6CQWaVbRg;
const bot = new Telegraf("5929657545:AAGJmhCQ57wCcH20KJkvZDGj3q6CQWaVbRg");
// console.log(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply("hey"));
const menu = Markup.inlineKeyboard([
  Markup.button.callback("data1", "data-1s"),
]);
bot.hears("qs", (ctx) => {
  ctx.reply("Welcome, chose discount:", menu);
});
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply("👍"));

bot.action("data-1", (ctx) => ctx.reply("data1"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
// let text;
// bot.hears(text, (ctx) => ctx.reply(text));
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
