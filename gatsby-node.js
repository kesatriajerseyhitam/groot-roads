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

  const posts = data.posts.edges;
  const postPerPage = 5;
  const numPages = Math.ceil(posts.lenght / postPerPage);

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? 'blogs' : `blogs/${index + 1}`,
      component: path.resolve('./src/templates/blog-list/index.jsx'),
      context: {
        currentPage: index + 1,
        limit: postPerPage,
        numPages,
        skip: index * postPerPage,
      },
    });
  });
};
