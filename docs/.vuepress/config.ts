import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Kamishima-kaede",
  description: "前端博客",

  base: "/",

  theme,
});
