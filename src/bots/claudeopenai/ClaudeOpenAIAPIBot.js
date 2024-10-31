import LangChainBot from "@/bots/LangChainBot";
import store from "@/store";
import { ChatOpenAI } from "@langchain/openai";

export default class ClaudeOpenAIAPIBot extends LangChainBot {
  static _brandId = "claudeApi";
  static _className = "ClaudeAPIBot";

  constructor() {
    super();
  }

  async _checkAvailability() {
    let available = false;

    if (store.state.claudeApi.apiKey) {
      this.setupModel();
      available = true;
    }
    return available;
  }

  _setupModel() {
    const chatModel = new ChatOpenAI({
      configuration: {
        basePath: store.state.claudeApi.alterUrl
          ? store.state.claudeApi.alterUrl
          : "",
      },
      openAIApiKey: store.state.claudeApi.apiKey,
      modelName: this.constructor._model ? this.constructor._model : "",
      temperature: store.state.claudeApi.temperature,
      streaming: true,
    });
    return chatModel;
  }

  getPastRounds() {
    return store.state.claudeApi.pastRounds;
  }
}
