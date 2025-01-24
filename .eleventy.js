

module.exports = async function(eleventyConfig) {
	// Configure Eleventy

    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/js");
    eleventyConfig.addPassthroughCopy("src/img");
    
    const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    eleventyConfig.addShortcode(
        "headers",
        (title, subtitle) =>
          `<h1>${title}</h1>
            <p>${subtitle}</p>`
      );


    return{
        dir:{
            input:"src",
            output:"docs",
            includes: "_includes",
            layouts:"_layouts"
        }
    }
};