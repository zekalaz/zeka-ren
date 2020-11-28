import { CreatePagesArgs } from 'gatsby';
import { ArchiveQuery } from "../../types/query/archive";
import {PostQuery} from "../../types/query/post";

import createArchive from './create-archive';
import createHomepage from "./create-homepage";

const myCreatePages = async ({actions, graphql, reporter}: CreatePagesArgs) => {
    const archiveResult = await graphql(`
    query ArchiveDataQuery {
  allMarkdownRemark(sort: {fields: [frontmatter___date, frontmatter___title], order: DESC}, filter: {frontmatter: {title: {ne: "about.md"}}}) {
    edges {
      node {
        frontmatter {
          title
          date
        }
      }
    }
  }
}
    `);

    if (archiveResult.errors) {
        reporter.panicOnBuild(`Error while running archive query.`);
        return
    }

    createArchive(archiveResult.data as ArchiveQuery, actions);

    const postResult = await graphql(`query DiaryAll {
  allMarkdownRemark(sort: {fields: [frontmatter___date, frontmatter___title], order: DESC}, filter: {frontmatter: {title: {ne: "about.md"}}}) {
    group(field: fields___year_month) {
      nodes {
        frontmatter {
          date
          images {
            alt
            src {
              image: childImageSharp {
                fluid(jpegQuality: 80, jpegProgressive: true, toFormat: JPG, maxWidth: 1400) {
                  aspectRatio
                  src
                  srcSet
                }
              }
            }
          }
          tags
          title
        }
        html
      }
      yearMonth: fieldValue
    }
  }
}
    `);

    if (postResult.errors) {
        reporter.panicOnBuild(`Error while running post query.`);
        return
    }

    createHomepage(postResult.data as PostQuery, actions);
};

export default myCreatePages;
