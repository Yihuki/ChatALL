<template>
  <CommonBotSettings
    :settings="settings"
    :brand-id="brandId"
    mutation-type="setWenxin"
    :watcher="watcher"
  ></CommonBotSettings>
</template>

<script>
import Bot from "@/bots/WenxinBot";
import CommonBotSettings from "@/components/BotSettings/CommonBotSettings.vue";
import { Type } from "./settings.const";

const settings = [
  {
    type: Type.Text,
    name: "apiKey",
    title: "Wenxin.apiKey",
    description: "settings.secretPrompt",
    placeholder: "...",
  },
  {
    type: Type.Text,
    name: "SecretKey",
    title: "Wenxin.SecretKey",
    description: "settings.secretPrompt",
    placeholder: "...",
  },
  {
    type: Type.Slider,
    name: "pastRounds",
    title: "bot.pastRounds",
    description: "bot.pastRoundsPrompt",
    min: 0,
    max: 10,
    step: 1,
  },
  {
    type: Type.Slider,
    name: "temperature",
    title: "wenxin.temperature",
    description: "openaiApi.temperaturePrompt",
    min: 0,
    max: 1,
    step: 0.1,
    ticks: {
      0: "openaiApi.temperature0",
      1: "openaiApi.temperature2",
    },
  },
];
export default {
  components: {
    CommonBotSettings,
  },
  data() {
    return {
      settings: settings,
      brandId: Bot._brandId,
    };
  },
  methods: {
    watcher() {
      Bot.getInstance().setupModel();
    },
  },
};
</script>
