const handlebars = require('handlebars');
handlebars.registerHelper('moment', require('helper-moment'))

module.exports = function(eleventyConfig) {

  eleventyConfig.addHandlebarsHelper("reverse", function (arr) {
    arr.reverse();
  })

  eleventyConfig.setBrowserSyncConfig({
    open: "local",
    hot: true
  })



  return {
    dir: {
      input: "src", 
      output: "public"
    }
  }
}