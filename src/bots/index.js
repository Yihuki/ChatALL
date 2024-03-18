// Bots
import GeminiBot from "@/bots/GeminiBot";
import OpenAIAPI35Bot from "@/bots/openai/OpenAIAPI35Bot";
import OpenAIAPI4Bot from "@/bots/openai/OpenAIAPI4Bot";
import DevBot from "@/bots/DevBot";
import QwenBot from "@/bots/QwenBot";
import MinimaxBot from "@/bots/MinimaxBot";
import XinghuoBot from "@/bots/XinghuoBot";

const all = [
  OpenAIAPI35Bot.getInstance(),
  OpenAIAPI4Bot.getInstance(),
  GeminiBot.getInstance(),
  QwenBot.getInstance(),
  MinimaxBot.getInstance(),
  XinghuoBot.getInstance(),
];

const disabled = [
  "ClaudeBot",
  "AlpacaBot",
  "HuggingChatBot",
  "Falcon180bBot",
  "ChatGLM6bBot",
  "ChatGLM36bBot",
  "CodeLlamaBot",
  "Vicuna7bBot",
  "Wizardlm13bBot",
];

if (process.env.NODE_ENV !== "production") {
  all.push(DevBot.getInstance());
}

const bots = {
  all,
  getBotByClassName(className) {
    return all.find((bot) => bot.getClassname() === className);
  },
};

disabled.forEach((className) => {
  const bot = bots.getBotByClassName(className);
  bot?.disable();
});

export const botTags = {
  free: [],
  paid: [],
  openSource: [],
  api: [
    bots.getBotByClassName("OpenAIAPI35Bot"),
    bots.getBotByClassName("OpenAIAPI4Bot"),
    bots.getBotByClassName("GeminiBot"),
    bots.getBotByClassName("QwenBot"),
    bots.getBotByClassName("MinimaxBot"),
    bots.getBotByClassName("XinghuoBot"),
  ],
  madeInChina: [],
};
export default bots;
