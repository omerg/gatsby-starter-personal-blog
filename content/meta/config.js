const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Omer Gurarslan's Personal Blog", // <title>
  shortSiteTitle: "Omer Gurarslan - 2019", // <title> ending for posts and pages
  siteDescription: "Omer Gurarslan's Personal Blog",
  siteUrl: "https://omerg.info",
  pathPrefix: "",
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
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "omerg@lucidcode.com.tr",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/omerg" },
    { name: "twitter", url: "https://twitter.com/Gurarslan" },
    { name: "facebook", url: "https://facebook.com/gurarslan" }
  ]
};
