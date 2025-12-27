/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

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
    devtool: 'eval-source-map',
  });
};

// PRIMERO: Define el schema antes de crear las páginas
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type StrapiPost implements Node {
      id: ID!
      titulo_post: String
      url: String
      contenido_1: String
      seo_title: String
      seo_descripcion: String
      id_post: Int
      Categoria: String
      create_dia: String
      create_hora: String
      linkminiatura: String
      linkbanner: String
      createdAt: Date
      image_banner: StrapiPostImage_banner
      miniatura: StrapiPostMiniatura
      categorias: [StrapiCategoria]
    }

    type StrapiPostImage_banner {
      id: String
      url: String
      alternativeText: String
      caption: String
      width: Int
      height: Int
      formats: JSON
      localFile: File
    }

    type StrapiPostMiniatura {
      id: String
      url: String
      alternativeText: String
      caption: String
      width: Int
      height: Int
      formats: JSON
      localFile: File
    }

    type StrapiCategoria implements Node {
      id: ID!
      nombre: String
    }

    type StrapiInstagramContenidos implements Node {
      imagen: StrapiInstagramContenidosimagen
    }

    type StrapiInstagramContenidosimagen {
      id: String
      url: String
      alternativeText: String
      caption: String
      width: Int
      height: Int
      formats: JSON
      localFile: File
    }
  `)
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const posts = await graphql(`
    query MyQuery {
      allStrapiPost(sort: { fields: id_post, order: ASC }) {
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

  // Create paginated pages
  paginate({
    createPage,
    items: posts.data.allStrapiPost.nodes,
    itemsPerPage: 2,
    pathPrefix: "/blog/page",
    component: path.resolve(`src/templates/blog.js`),
  })

  // Create individual post pages
  posts.data.allStrapiPost.nodes.forEach(post => {
    createPage({
      path: `/${post.url}`,
      component: path.resolve(`src/templates/post.js`),
      context: {
        data: post,
      },
    })
  })

  // Categoria Marketing
  paginate({
    createPage,
    items: posts.data.allStrapiPost.nodes,
    itemsPerPage: 2,
    pathPrefix: "/categoria/marketing",
    component: path.resolve(`src/templates/categoriaMkt.js`),
  })

  // Categoria Analitica
  paginate({
    createPage,
    items: posts.data.allStrapiPost.nodes,
    itemsPerPage: 2,
    pathPrefix: "/categoria/analitica",
    component: path.resolve(`src/templates/categoriaAnalitica.js`),
  })

  // Categoria Diseño
  paginate({
    createPage,
    items: posts.data.allStrapiPost.nodes,
    itemsPerPage: 2,
    pathPrefix: "/categoria/diseño",
    component: path.resolve(`src/templates/categoriaDiseño.js`),
  })

  // Categoria Performance
  paginate({
    createPage,
    items: posts.data.allStrapiPost.nodes,
    itemsPerPage: 2,
    pathPrefix: "/categoria/performance",
    component: path.resolve(`src/templates/categoriaPerformance.js`),
  })

  // Categoria Ecommerce
  paginate({
    createPage,
    items: posts.data.allStrapiPost.nodes,
    itemsPerPage: 2,
    pathPrefix: "/categoria/ecommerce",
    component: path.resolve(`src/templates/categoriaEcommerce.js`),
  })

  // Categoria Desarrollo
  paginate({
    createPage,
    items: posts.data.allStrapiPost.nodes,
    itemsPerPage: 2,
    pathPrefix: "/categoria/desarrollo",
    component: path.resolve(`src/templates/categoriaDesarrollo.js`),
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { deleteNode } = actions;
  
  // Elimina nodos de archivos de Cloudinary que fallen
  if (
    node.internal.type === 'File' && 
    node.url && 
    node.url.includes('cloudinary.com')
  ) {
    deleteNode(node);
  }
};

exports.sourceNodes = ({ reporter }) => {
  reporter.info('Skipping Cloudinary image downloads...');
};
