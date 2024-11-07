import GroqAPIBot from "./GroqAPIBot";

export default class Llama370bGroqAPIBot extends GroqAPIBot {
  static _className = "Llama370bGroqAPIBot";
  static _logoFilename = "llama-3-70b-groq-logo.png";
  static _model = "llama-3.2-90b-text-preview";
  constructor() {
    super();
  }
}
