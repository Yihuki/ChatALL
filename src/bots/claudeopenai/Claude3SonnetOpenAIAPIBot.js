import Claude3OpenAIAPIBot from "./Claude3OpenAIAPIBot";

export default class Claude3SonnetOpenAIAPIBot extends Claude3OpenAIAPIBot {
  static _className = "Claude3SonnetOpenAIAPIBot"; // Class name of the bot
  static _logoFilename = "claudeapi-sonnet-logo.png"; // Place it in public/bots/
  static _isDarkLogo = false; // The main color of logo is dark
  static _model = "claude-3-sonnet-20240229";

  constructor() {
    super();
  }
}
