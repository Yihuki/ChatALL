import LangChainBot from "@/bots/LangChainBot";
import store from "@/store";
import { ChatMoonshot } from "@langchain/community/chat_models/moonshot";

export default class MoonshotAPIBot extends LangChainBot {
  static _brandId = "moonshot";
  static _className = "MoonshotAPIBot";
  static _logoFilename = "moonshot.webp"; // Place it in public/bots/
  static _model = "moonshot-v1-8k";

  constructor() {
    super();
  }

  async _checkAvailability() {
    let available = false;

    if (store.state.moonshot.apiKey) {
      this.setupModel();
      available = true;
    }
    return available;
  }

  _setupModel() {
    const chatModel = new ChatMoonshot({
      modelName: this.constructor._model ? this.constructor._model : "",
      temperature: store.state.moonshot.temperature,
      apiKey: store.state.moonshot.apiKey,
      streaming: true,
    });
    return chatModel;
  }

  getPastRounds() {
    return store.state.zhipu.pastRounds;
  }
}
