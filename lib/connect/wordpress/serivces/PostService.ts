import { Wordpress } from "@/app/types/wordpress.type";
import RepositoryFactory from "../repositories/RepositoryFactory";

class PostService {
  static async getList(): Promise<Wordpress[]> {
    try {
      const res = await RepositoryFactory.post.getList();
      return res.data.posts.edges.map((data: any) => {
        return data.node;
      });
    } catch {
      return [];
    }
  }
}

export default PostService;
