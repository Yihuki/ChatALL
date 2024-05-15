import Claude3OpenAIAPIBot from "./Claude3OpenAIAPIBot";

export default class Claude3HaikuOpenAIAPIBot extends Claude3OpenAIAPIBot {
  static _className = "Claude3HaikuOpenAIAPIBot"; // Class name of the bot
  static _logoFilename = "claudeapi-haiku-logo.png"; // Place it in public/bots/
  static _isDarkLogo = false; // The main color of logo is dark
  static _model = "claude-3-haiku-20240307";

  constructor() {
    super();
  }
}
