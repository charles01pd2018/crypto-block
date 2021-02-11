require('@babel/register')({
	...require('./babel.config.js')
});

require.extensions['.css'] = function () {
    return null;
  };
  
  const filterConfig = {
	isValid: false,
	rules: [
		/\*/,
	],
};
  
const router = require("./sitemap-routes").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
      new Sitemap(router)
          .filterPaths(filterConfig)
          .build("https://www.cryptoblock.me")
          .save("./public/sitemap.xml")
    );
}

generateSitemap();