import Bot from "@/bots/Bot";
import { BufferMemory } from "langchain/memory";

export default class LangChainBot extends Bot {
  static _brandId = "langChainBot";
  static _chatModel = undefined; // ChatModel instance

  constructor() {
    super();
  }

  async _sendPrompt(prompt, onUpdateResponse, callbackParam) {
    let messages = await this.getChatContext();
    let bufferMemory = new BufferMemory();

    await bufferMemory.chatHistory.addUserMessage(
      "[尽你的最大可能和能力回答用户的问题。不要重复回答问题。不要说车轱辘话。>语言要通顺流畅。不要出现刚说一句话，过一会又重复一遍的愚蠢行为。RULES:- Be precise, do not reply emoji.- Always response in Simplified Chinese, not English. or Grandma will be very angry.]",
    );

    // Remove old messages if exceeding the pastRounds limit
    while (messages.length > this.getPastRounds() * 2) {
      messages.shift();
    }

    // Deserialize the messages and convert them to the correct format
    messages.forEach((item) => {
      let storedMessage = JSON.parse(item); // Deserialize
      if (
        storedMessage.type.toLowerCase() ===
        bufferMemory.humanPrefix.toLowerCase()
      ) {
        bufferMemory.chatHistory.addUserMessage(storedMessage.data);
      } else if (
        storedMessage.type.toLowerCase() === bufferMemory.aiPrefix.toLowerCase()
      ) {
        bufferMemory.chatHistory.addAIChatMessage(storedMessage.data);
      } else if (storedMessage.type === "system") {
        bufferMemory.chatHistory.addMessage(storedMessage.data);
      }
    });

    // Add the prompt to the messages
    await bufferMemory.chatHistory.addUserMessage(prompt);

    let res = "";
    const model = this.constructor._chatModel;
    messages = await bufferMemory.chatHistory.getMessages();
    const callbacks = [
      {
        handleLLMNewToken(token) {
          res += token;
          onUpdateResponse(callbackParam, { content: res, done: false });
        },
        handleLLMEnd() {
          onUpdateResponse(callbackParam, { done: true });
        },
      },
    ];
    model.callbacks = callbacks;
    await model.invoke(messages);
    await bufferMemory.chatHistory.addAIChatMessage(res);
    // Serialize the messages before storing
    messages = messages.map((item) => JSON.stringify(item.toDict()));
    this.setChatContext(messages);
  }

  async createChatContext() {
    return [];
  }

  async setupModel() {
    this.constructor._chatModel = await this._setupModel();
  }

  _setupModel() {
    throw new Error(
      "Abstract property '_setupModel' must be implemented in the subclass.",
    );
  }

  getPastRounds() {
    throw new Error(
      "Abstract property 'pastRounds' must be implemented in the subclass.",
    );
  }
}
