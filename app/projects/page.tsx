import React from 'react';
import PostService from '@/lib/connect/wordpress/serivces/PostService';
import BgCard from '@/components/global/BgCard';
import { H1 } from '@/components/global/H1_';
import { uniqueYears } from '@/lib/utils/util';
import ChangeColorText from '@/components/global/ChangeColorText';
import Card from '@/components/projects/card';

export const dynamic = 'force-static';

const Projects = async () => {
  const staticPostList = await PostService.getList();
  const dateList = staticPostList.map((post) => post.date);
  return (
    <div className="flex flex-col items-center  text-black">
      <BgCard>
        <div className="m-auto flex flex-col items-center justify-center sm:w-[85%]">
          <H1>開発実績</H1>
          {uniqueYears(dateList).map((year) => {
            return (
              <div key={year} className="w-[100%]">
                <div className="p-3 text-[30px] font-bold">{year}年</div>
                <div className="content m-auto flex w-[90%] gap-3 overflow-x-scroll lg:w-[90%]">
                  {staticPostList
                    .filter(
                      (post) => new Date(post.date).getFullYear() === year
                    )
                    .map((post) => {
                      return (
                        <div key={post.id}>
                          <Card id={post.id} title={post.title}>
                            <img
                              src={post.featuredImage.node.link}
                              alt={post.title}
                              width={171}
                              height={330}
                            />
                            <ChangeColorText>
                              {post.categories.edges[0].node.name}
                            </ChangeColorText>
                            <div className="text-xl text-[#707070]">
                              {post.title}
                            </div>
                          </Card>
                        </div>
                      );
                    })}
                </div>
              </div>
            );
          })}
        </div>
      </BgCard>
    </div>
  );
};

export default Projects;
