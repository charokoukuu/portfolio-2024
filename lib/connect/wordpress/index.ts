import { Wordpress } from "@/app/types/wordpress.type";
import PostService from "./serivces/PostService";

export const getData = async () => {
    const staticPostList: Wordpress[] = await PostService.getList();
    return {
        props: {
            staticPostList,
        },
    };
};