const { DateTime } = require('luxon');
var handlebars = require('handlebars');
handlebars.registerHelper('moment', require('helper-moment'))

module.exports = function(eleventyConfig) {

  eleventyConfig.addFilter("postdate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED)
  })

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