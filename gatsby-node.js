/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path")
const { paginate } = require("gatsby-awesome-pagination")
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new FilterWarningsPlugin({
        exclude:
          /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      }),
    ],
  });
};
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  // Fetch your items (blog posts, categories, etc).


  const posts = await graphql(`
  query MyQuery  {
    allStrapiPost (
     
      sort: { fields: id_post, order: ASC }) {
      nodes {
        categorias {
          nombre
        }
        create_dia
          create_hora
        Categoria
        contenido_1
        createdAt
        id
        linkbanner
        linkminiatura
        image_banner {
          url
        }
        miniatura {
          url
        }
        seo_descripcion
        seo_title
        titulo_post
        url
      }
    }
    allStrapiPrensa {
      nodes {
        link_banner_escritorio_prensa
        link_banner_final_prensa
        link_banner_movil
        blog_prensa
      }
    }
  }

  `)


//Paginacion Prensa







//termino paginacion prensa

  // Create your paginated pages
  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts.data.allStrapiPost.nodes, // An array of objects
    itemsPerPage: 2, // How many items you want per page
    pathPrefix: "/blog/page", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/blog.js`), // Just like `createPage()`
  })

  posts.data.allStrapiPost.nodes.forEach(post => {
    createPage({
      path: `/${post.url}`,

      component: path.resolve(`src/templates/post.js`),
      context: {
        data: post,
      },
    })
  })


  ////////////////////////////// Categoria MKT /////////////////////////////////////

  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts.data.allStrapiPost.nodes, // An array of objects
    itemsPerPage: 2, // How many items you want per page
    pathPrefix: "/categoria/marketing", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/categoriaMkt.js`), // Just like `createPage()`
  })

  /////////////////////////////Analitica////////////////////////////////////////7

  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts.data.allStrapiPost.nodes, // An array of objects
    itemsPerPage: 2, // How many items you want per page
    pathPrefix: "/categoria/analitica", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/categoriaAnalitica.js`), // Just like `createPage()`
  })

  /////////////////////////////Diseño////////////////////////////////////////7

  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts.data.allStrapiPost.nodes, // An array of objects
    itemsPerPage: 2, // How many items you want per page
    pathPrefix: "/categoria/diseño", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/categoriaDiseño.js`), // Just like `createPage()`
  })


  /////////////////////////////Performance////////////////////////////////////////

  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts.data.allStrapiPost.nodes, // An array of objects
    itemsPerPage: 2, // How many items you want per page
    pathPrefix: "/categoria/performance", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/categoriaPerformance.js`), // Just like `createPage()`
  })


  /////////////////////////////Ecommerce////////////////////////////////////////


  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts.data.allStrapiPost.nodes, // An array of objects
    itemsPerPage: 2, // How many items you want per page
    pathPrefix: "/categoria/ecommerce", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/categoriaEcommerce.js`), // Just like `createPage()`
  })

  /////////////////////////////Desarrollo////////////////////////////////////////


  paginate({
    createPage, // The Gatsby `createPage` function
    items: posts.data.allStrapiPost.nodes, // An array of objects
    itemsPerPage: 2, // How many items you want per page
    pathPrefix: "/categoria/desarrollo", // Creates pages like `/blog`, `/blog/2`, etc
    component: path.resolve(`src/templates/categoriaDesarrollo.js`), // Just like `createPage()`
  })






}

exports.onCreateWebpackConfig = helper => {
  const { stage, actions, getConfig } = helper
  if (stage === "develop" || stage === 'build-javascript') {
    const config = getConfig()
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === "MiniCssExtractPlugin"
    )
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true
    }
    actions.replaceWebpackConfig(config)
  }
}


exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: 'eval-source-map',
  })
}