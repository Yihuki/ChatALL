import LangChainBot from "@/bots/LangChainBot";
import store from "@/store";
import { ChatBaiduWenxin } from "@langchain/community/chat_models/baiduwenxin";

export default class WenxinBot extends LangChainBot {
  static _brandId = "wenxin";
  static _className = "WenxinBot";
  static _logoFilename = "wenxin-qianfan-4-logo.png"; // Place it in public/bots/
  static _model = "ERNIE-4.0-8K";

  constructor() {
    super();
  }

  async _checkAvailability() {
    let available = false;

    if (store.state.wenxin.apiKey) {
      this.setupModel();
      available = true;
    }
    return available;
  }
  _setupModel() {
    const chatModel = new ChatBaiduWenxin({
      modelName: this.constructor._model ? this.constructor._model : "",
      temperature: store.state.wenxin.temperature,
      apiKey: store.state.wenxin.apiKey,
      baiduSecretKey: store.state.wenxin.SecretKey,
      streaming: true,
    });
    return chatModel;
  }

  getPastRounds() {
    return store.state.zhipu.pastRounds;
  }
}
