import LangChainBot from "@/bots/LangChainBot";
import store from "@/store";
import { ChatOpenAI } from "@langchain/openai";

export default class DeepseekOpenAIAPIBot extends LangChainBot {
  static _brandId = "deepseekApi";
  static _className = "DeepseekAPIBot";

  constructor() {
    super();
  }

  async _checkAvailability() {
    let available = false;

    if (store.state.deepseekApi.apiKey) {
      this.setupModel();
      available = true;
    }
    return available;
  }

  _setupModel() {
    const chatModel = new ChatOpenAI({
      configuration: {
        basePath: "https://api.deepseek.com/v1",
      },
      openAIApiKey: store.state.deepseekApi.apiKey,
      modelName: this.constructor._model ? this.constructor._model : "",
      temperature: store.state.deepseekApi.temperature,
      streaming: true,
    });
    return chatModel;
  }

  getPastRounds() {
    return store.state.deepseekApi.pastRounds;
  }
}
