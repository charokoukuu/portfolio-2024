import Repository from "./Repository";

class PostRepository {
  static getList() {
    return Repository(`query NewQuery {
      posts {
        edges {
          node {
            id
            content
            title
            date
            categories {
              edges {
                node {
                  name
                }
              }
            }
            featuredImage {
              node {
                link
                uri
              }
            }
          }
        }
      }
    }`).getWp();
  }
}

export default PostRepository;
