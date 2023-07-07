const { defaultTheme } = require("vuepress");

module.exports = {
  title: "Turi",
  description: "Welcome to Turi's Blog",
  host: "127.0.0.1",
  base: "/Turi-Blog/",
  head: [["link", { rel: "icon", href: "/favicons/favicon.png" }]],
  theme: defaultTheme({
    displayAllHeaders: true, // 默认值：false,显示所有页面的标题链接
    activeHeaderLinks: false, // 默认值：true,活动的标题链接
    navbar: [
      // 导航条相关配置
      { text: "Home", link: "/" },
      { text: "Interview", link: "/Interview" },
      { text: "TypeScript", link: "/TypeScript" },
      { text: "Git", link: "/Git" },
      { text: "Node.js", link: "/Node.Js" },
      { text: "Plugins", link: "/Plugins/Vue3_Plugins" },
      { text: "Nginx", link: "/Nginx" },
      { text: "Other", link: "/Other" },
    ],

    sidebar: {
      "/Plugins/": [
        {
          text: "Vue",
          children: ["/Plugins/Vue3_Plugins"],
          collapsible: true,
        },
        {
          text: "React",
          children: ["/Plugins/React_Plugins"],
        },
        {
          text: "Vite",
          children: ["/Plugins/Vite_Plugins"],
        },
        {
          text: "Eslint",
          children: ["/Plugins/Eslint"],
        },
      ],
    },

    lastUpdated: true,

    lastUpdatedText: "Last Updated",

    smoothScroll: true, //页面滚动
  }),
};
