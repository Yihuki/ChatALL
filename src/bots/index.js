// Bots
import GeminiAPIBot from "@/bots/google/GeminiAPIBot";
import OpenAIAPI35Bot from "@/bots/openai/OpenAIAPI35Bot";
import OpenAIAPI4Bot from "@/bots/openai/OpenAIAPI4Bot";
import OpenAIAPI4oBot from "@/bots/openai/OpenAIAPI4oBot";
import DevBot from "@/bots/DevBot";
import QwenBot from "@/bots/QwenBot";
import MinimaxBot from "@/bots/MinimaxBot";
import XinghuoBot from "@/bots/XinghuoBot";
import ZhipuBot from "@/bots/ZhipuBot";

const all = [
  OpenAIAPI35Bot.getInstance(),
  OpenAIAPI4Bot.getInstance(),
  OpenAIAPI4oBot.getInstance(),
  GeminiAPIBot.getInstance(),
  QwenBot.getInstance(),
  MinimaxBot.getInstance(),
  XinghuoBot.getInstance(),
  ZhipuBot.getInstance(),
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
  api: [
    bots.getBotByClassName("OpenAIAPI35Bot"),
    bots.getBotByClassName("OpenAIAPI4Bot"),
    bots.getBotByClassName("OpenAIAPI4oBot"),
    bots.getBotByClassName("GeminiAPIBot"),
    bots.getBotByClassName("QwenBot"),
    bots.getBotByClassName("MinimaxBot"),
    bots.getBotByClassName("XinghuoBot"),
    bots.getBotByClassName("ZhipuBot"),
  ],
};
export default bots;
