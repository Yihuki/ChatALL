import LangChainBot from "@/bots/LangChainBot";
import store from "@/store";
import { ChatMinimax } from "@langchain/community/chat_models/minimax";

export default class MinimaxBot extends LangChainBot {
  static _brandId = "minimax";
  static _className = "MinimaxBot";
  static _logoFilename = "minimax.png"; // Place it in public/bots/
  static _model = "abab6.5s-chat";

  constructor() {
    super();
  }

  async _checkAvailability() {
    let available = false;

    if (store.state.minimax.apiKey) {
      this.setupModel();
      available = true;
    }
    return available;
  }

  _setupModel() {
    const chatModel = new ChatMinimax({
      proVersion: true,
      modelName: this.constructor._model ? this.constructor._model : "",
      minimaxGroupId: store.state.minimax.GroupId,
      minimaxApiKey: store.state.minimax.apiKey,
      tokensToGenerate: 2048,
      streaming: true,
      botSetting: [
        {
          bot_name: "MM智能助理",
          content:
            "MM智能助理是一款由MiniMax自研的，没有调用其他产品的接口的大型语言模型。MiniMax是一家中国科技公司，一直致力于进行大模型相关的研究。",
        },
      ],
    });
    return chatModel;
  }

  getPastRounds() {
    return store.state.minimax.pastRounds;
  }
}
