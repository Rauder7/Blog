module.exports =  function(eleventyConfig) {
	// Configure Eleventy

    eleventyConfig.addPassthroughCopy("code/css");
    eleventyConfig.addPassthroughCopy("code/js");
    eleventyConfig.addPassthroughCopy("code/img");

    return{
        dir:{
            input:"code",
            output:"docs"
        }
    }
};