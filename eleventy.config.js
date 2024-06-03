module.exports = function (eleventyConfig) {
  // Options to customise the appearance of your design history
  // https://x-govuk.github.io/govuk-eleventy-plugin/options/
  eleventyConfig.addPlugin(require("@x-govuk/govuk-eleventy-plugin"), {
    stylesheets: ["/styles/application.css"],
    headingPermalinks: true,
    header: {
      organisationLogo: false,
      productName: "Forms Designer - Design History",
      search: {
        indexPath: "/search.json",
        sitemapPath: "/sitemap",
      },
      logotype: {
        text: "Defra", // Example text, replace with your desired text
      }
    },
  });

  // Passthrough
  eleventyConfig.addPassthroughCopy({ './app/images': '.' })

  // Config
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      output: 'public',
      layouts: '_layouts',
      includes: '_components'
    }
  }
}
