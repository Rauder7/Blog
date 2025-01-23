

module.exports = async function(eleventyConfig) {
	// Configure Eleventy

    eleventyConfig.addPassthroughCopy("code/css");
    eleventyConfig.addPassthroughCopy("code/js");
    eleventyConfig.addPassthroughCopy("code/img");
    
    const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");

	eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

    return{
        dir:{
            input:"code",
            output:"docs",
            includes: "_includes",
            layouts:"_layouts"
        }
    }
};