import React from 'react';
import { H1 } from '@/components/global/H1_';
import PostService from '@/lib/connect/wordpress/serivces/PostService';
export const dynamic = 'force-static';

export const dynamicParams = true;
interface Props {
  params: { id: string };
}

interface Post {
  id: string;
  title: string;
  content: string;
}

export const generateStaticParams = async (): Promise<{ id: string }[]> => {
  const staticPostList = await PostService.getList();
  return staticPostList.map((post: Post) => ({ id: post.id }));
};

const fetchPostById = async (id: string) => {
  const staticPostList = await PostService.getList();
  return staticPostList.find((post) => post.id === decodeURIComponent(id));
};

const ProjectDetail: React.FC<Props> = async ({ params }) => {
  const post = await fetchPostById(params.id);

  return (
    <div className="flex flex-col items-center text-black sm:bg-white">
      <div className="m-auto flex flex-col items-center justify-center sm:w-[390px] lg:w-[956px]">
        {post ? (
          <div key={post.id}>
            <H1>{post.title}</H1>
            <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
          </div>
        ) : (
          <div>Not Found</div>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
