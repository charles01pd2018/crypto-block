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

const generateSitemap = () => {
    return (
      new Sitemap(router)
          .filterPaths(filterConfig)
          .build("https://crypto-block--staging.herokuapp.com")
          .save("./public/sitemap.xml")
    );
}

generateSitemap();