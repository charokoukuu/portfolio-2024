export interface Wordpress {
    id: string;
    title: string;
    date: string;
    content: string;
    categories: {
        edges: {
            node: {
                name: string;
            };
        }[];
    };
    featuredImage: {
        node: {
            link: string;
            uri: string;
        };
    };
}
