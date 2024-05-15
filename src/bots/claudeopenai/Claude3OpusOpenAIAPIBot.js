import Claude3OpenAIAPIBot from "./Claude3OpenAIAPIBot";

export default class Claude3OpusOpenAIAPIBot extends Claude3OpenAIAPIBot {
  static _className = "Claude3OpusOpenAIAPIBot"; // Class name of the bot
  static _logoFilename = "claudeapi-opus-logo.png"; // Place it in public/bots/
  static _isDarkLogo = false; // The main color of logo is dark
  static _model = "claude-3-opus-20240229";

  constructor() {
    super();
  }
}
