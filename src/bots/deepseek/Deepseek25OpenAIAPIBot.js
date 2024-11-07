import DeepseekOpenAIAPIBot from "./DeepseekOpenAIAPIBot";

export default class Deepseek25OpenAIAPIBot extends DeepseekOpenAIAPIBot {
  static _className = "Deepseek25OpenAIAPIBot"; // Class name of the bot
  static _logoFilename = "claudeapi-sonnet-logo.png"; // Place it in public/bots/
  static _isDarkLogo = false; // The main color of logo is dark
  static _model = "deepseek-chat";

  constructor() {
    super();
  }
}
