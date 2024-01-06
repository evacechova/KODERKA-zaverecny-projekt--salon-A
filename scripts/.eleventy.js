module.exports = function(eleventyConfig) {

    eleventyConfig.setServerOptions({
        showAllHosts: true,
      })
      
    // Výchozí výstupní složka je: _site
    // Zkopírovat images/ do _site/images
    eleventyConfig.addPassthroughCopy("images");
    // Zkopírovat css/ to _site/css/
    eleventyConfig.addPassthroughCopy("css");
    //Zkopírovat .js do _site/scripts
    eleventyConfig.addPassthroughCopy("scripts");
    //Zkopírovat favicon do _site/
    eleventyConfig.addPassthroughCopy({"images/favicon": "/"});
    };


   return {
    // možné formáty šablon
    templateFormats: ["njk", "html", "md"],
    // šablonovací jazyk Nunjucks`
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  }