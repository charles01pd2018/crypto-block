require("babel-register")({
  presets: ["es2015", "react"]
});

const SitemapRoutes = require("./src/views/SitemapRoutes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
      new Sitemap(SitemapRoutes)
          .build("https://cryptoblock.me")
          .save("./public/sitemap.xml")
    );
}

generateSitemap();