const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "İngiltere'de Yaşam", // <title>
  shortSiteTitle: "ingiltere.life - 2019", // <title> ending for posts and pages
  siteDescription: "İngiltere'de Yaşam, Çalışma Hayatı ve Ankara Anlaşması",
  siteUrl: "https://ingiltere.life",
  pathPrefix: "/blog",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Omer Gurarslan",
  authorTwitterAccount: "Gurarslan",
  // info
  infoTitle: "omer gurarslan",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "Omer Gurarslan's Personal Blog",
  manifestShortName: "ingiltere.life", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "omerg@lucidcode.com.tr",
  // social
  authorSocialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com/in/gurarslan" },
    { name: "Twitter", url: "https://twitter.com/Gurarslan" },
    { name: "Youtube", url: "https://www.youtube.com/channel/UC0jmZwUcGbCOAzirbRssQbA" },
    { name: "Facebook", url: "https://facebook.com/gurarslan" }
  ]
};
