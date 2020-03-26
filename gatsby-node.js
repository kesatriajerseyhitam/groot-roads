const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const { data } = await graphql(`
    query{
      tours: allContentfulTour {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  data.tours.edges.forEach(({ node: { slug } }) => {
    createPage({
      path: `tours/${slug}`,
      component: path.resolve('./src/templates/tour/index.jsx'),
      context: { slug },
    });
  });
};
