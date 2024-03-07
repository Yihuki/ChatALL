import LangChainBot from "@/bots/LangChainBot";
import store from "@/store";
import { ChatIflytekXinghuo } from "@langchain/community/chat_models/iflytek_xinghuo/web";

export default class XinghuoBot extends LangChainBot {
  static _brandId = "xinghuo";
  static _className = "XinghuoBot";
  static _logoFilename = "spark-logo.png"; // Place it in public/bots/
  static _model = "spark-3.5";

  constructor() {
    super();
  }

  async _checkAvailability() {
    let available = false;

    if (store.state.xinghuo.apiKey) {
      this.setupModel();
      available = true;
    }
    return available;
  }

  _setupModel() {
    const chatModel = new ChatIflytekXinghuo({
      domain: "generalv3.5",
      iflytekAppid: store.state.xinghuo.appid,
      temperature: store.state.xinghuo.temperature,
      iflytekApiKey: store.state.xinghuo.apiKey,
      iflytekApiSecret: store.state.xinghuo.apiSecret,
      streaming: true,
      version: "v3.5",
    });
    return chatModel;
  }

  getPastRounds() {
    return store.state.xinghuo.pastRounds;
  }
}
