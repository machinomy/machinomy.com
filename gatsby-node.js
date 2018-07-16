/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const HEADER_ONLY = [ ]

async function onCreatePage ({ page, boundActionCreators }) {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    let headerOnly = HEADER_ONLY.some(r => page.path.match(r))
    if (headerOnly) {
      // It's assumed that `heading.ts` exists in the `/layouts/` directory
      page.layout = 'heading'

      // Update the page.
      createPage(page)
    }

    resolve();
  })
}

exports.onCreatePage = onCreatePage