require("jsonwebtoken");
import LangChainBot from "@/bots/LangChainBot";
import store from "@/store";
import { ChatZhipuAI } from "@langchain/community/chat_models/zhipuai";

export default class ZhipuBot extends LangChainBot {
  static _brandId = "zhipu";
  static _className = "ZhipuBot";
  static _logoFilename = "chatglm-4-logo.png"; // Place it in public/bots/
  static _model = "glm-4";

  constructor() {
    super();
  }

  async _checkAvailability() {
    let available = false;

    if (store.state.zhipu.apiKey) {
      this.setupModel();
      available = true;
    }
    return available;
  }

  _setupModel() {
    const chatModel = new ChatZhipuAI({
      modelName: this.constructor._model ? this.constructor._model : "",
      apiUrl: "https://open.bigmodel.cn/api/paas/v4/chat/completions",
      temperature: store.state.zhipu.temperature,
      zhipuAIApiKey: store.state.zhipu.apiKey,
      streaming: true,
    });
    return chatModel;
  }

  getPastRounds() {
    return store.state.zhipu.pastRounds;
  }
}
