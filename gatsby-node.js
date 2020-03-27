const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const { data } = await graphql(`
    query {
      posts: allContenfulPost {
        edges {
          nodes {
            slug
          }
        }
      }
      tours: allContentfulTour {
        edges {
          nodes {
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

  data.posts.edges.forEach(({ node: { slug } }) => {
    createPage({
      path: `blog/${slug}`,
      component: path.resolve('./src/templates//blog/index.jsx'),
      context: { slug },
    });
  });
};
