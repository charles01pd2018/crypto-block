require('@babel/register')({
	presets: [
		"@babel/preset-env",
		"@babel/preset-react"
	]
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
          .build("https://crypto-block--staging.herokuapp.com")
          .save("./public/sitemap.xml")
    );
}

generateSitemap();