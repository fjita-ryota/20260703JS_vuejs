Vue.createApp({
  data() {
    return {
      emoji: "❓",
      name: "ポケモンを選んでください",
      description: ""
    };
  },

  methods: {
    showPokemon(pokemon) {

      if (pokemon === "fushigidane") {
        this.emoji = "🌱";
        this.name = "フシギダネ";
        this.description = "くさ・どくタイプ。背中のタネと一緒に育つポケモンです。";

      } else if (pokemon === "hitokage") {
        this.emoji = "🔥";
        this.name = "ヒトカゲ";
        this.description = "ほのおタイプ。しっぽの炎が命の証です。";

      } else if (pokemon === "zenigame") {
        this.emoji = "💧";
        this.name = "ゼニガメ";
        this.description = "みずタイプ。丈夫なこうらを持っています。";

      } else if (pokemon === "pikachu") {
        this.emoji = "⚡";
        this.name = "ピカチュウ";
        this.description = "でんきタイプ。ほっぺに電気をためます。";

      } else if (pokemon === "eevee") {
        this.emoji = "🦊";
        this.name = "イーブイ";
        this.description = "進化の可能性を秘めたポケモンです。";

      } else if (pokemon === "snorlax") {
        this.emoji = "😴";
        this.name = "カビゴン";
        this.description = "食べて寝ることが大好きなポケモンです。";

      } else if (pokemon === "gengar") {
        this.emoji = "👻";
        this.name = "ゲンガー";
        this.description = "ゴースト・どくタイプ。影に潜むポケモンです。";

      } else if (pokemon === "lapras") {
        this.emoji = "🌊";
        this.name = "ラプラス";
        this.description = "人を乗せて海を泳ぐやさしいポケモンです。";

      } else if (pokemon === "mew") {
        this.emoji = "✨";
        this.name = "ミュウ";
        this.description = "すべてのポケモンの遺伝子を持つと言われています。";
      }

    }
  }

}).mount("#app");