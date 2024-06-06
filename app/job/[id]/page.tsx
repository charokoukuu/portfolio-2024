import React from 'react';
import { H1 } from '@/components/global/H1_';
import PostService from '@/lib/connect/wordpress/serivces/PostService';

interface HomeProps {
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

const Home: React.FC<HomeProps> = async ({ params }) => {
  const staticPostList = await PostService.getList();
  console.log(staticPostList[0].id);

  const filterContent = staticPostList
    .filter((post) => post.id === decodeURIComponent(params.id))
    .map((post) => {
      return (
        <div key={post.id}>
          <H1>{post.title}</H1>
          <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
        </div>
      );
    });

  return (
    <div className="flex flex-col items-center text-black sm:bg-white">
      <div className="m-auto flex flex-col items-center justify-center sm:w-[390px] lg:w-[956px]">
        {filterContent.length === 0 ? <div>Not Found</div> : filterContent}
      </div>
    </div>
  );
};

export default Home;
