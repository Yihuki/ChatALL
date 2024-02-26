import LangChainBot from "@/bots/LangChainBot";
import store from "@/store";
import { ChatAlibabaTongyi } from "@langchain/community/chat_models/alibaba_tongyi";

export default class QwenBot extends LangChainBot {
  static _brandId = "qwen";
  static _className = "QwenBot";
  static _logoFilename = "qwen-logo.png"; // Place it in public/bots/
  static _model = "qwen-max";

  constructor() {
    super();
  }

  async _checkAvailability() {
    let available = false;

    if (store.state.qwen.apiKey) {
      this.setupModel();
      available = true;
    }
    return available;
  }

  _setupModel() {
    const chatModel = new ChatAlibabaTongyi({
      modelName: this.constructor._model ? this.constructor._model : "",
      temperature: store.state.qwen.temperature,
      alibabaApiKey: store.state.qwen.apiKey,
      streaming: true,
    });
    return chatModel;
  }

  getPastRounds() {
    return store.state.qwen.pastRounds;
  }
}
