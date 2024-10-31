import ClaudeOpenAIAPIBot from "./ClaudeOpenAIAPIBot";

export default class Claude35SonnetOpenAIAPIBot extends ClaudeOpenAIAPIBot {
  static _className = "Claude35SonnetOpenAIAPIBot"; // Class name of the bot
  static _logoFilename = "claudeapi-sonnet-logo.png"; // Place it in public/bots/
  static _isDarkLogo = false; // The main color of logo is dark
  static _model = "claude-3-5-sonnet-20240620";

  constructor() {
    super();
  }
}
