import React from 'react';
import PostService from '@/lib/connect/wordpress/serivces/PostService';
import BgCard from '@/components/global/BgCard';
import { H1 } from '@/components/global/H1';
import { uniqueYears } from '@/lib/utils/util';
import ChangeColorText from '@/components/global/ChangeColorText';
import Card from '@/components/projects/card';
import { Divider } from '@chakra-ui/react';

export const dynamic = 'force-static';

const Projects = async () => {
  const staticPostList = await PostService.getList();
  const dateList = staticPostList.map((post) => post.date);
  return (
    <div className="flex flex-col items-center  text-black">
      <BgCard>
        <div className="m-auto flex w-[90%] flex-col items-center justify-center sm:w-[85%]">
          <H1>Projects</H1>
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
                            <div className="relative h-[330px]">
                              <div className="absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-1/2">
                                {post.categories.edges.some(
                                  (item) => item.node.name === 'PC'
                                ) ? (
                                  <img
                                    src={post.featuredImage.node.link}
                                    alt={post.title}
                                    className="w-full"
                                  />
                                ) : (
                                  <img
                                    src={post.featuredImage.node.link}
                                    alt={post.title}
                                    className="h-[330px]"
                                  />
                                )}
                              </div>
                            </div>
                            <ChangeColorText
                              name={
                                post.categories.edges.filter(
                                  (item) => item.node.name !== 'PC'
                                )[0].node.name
                              }
                            />
                            <div className="py-2 text-xl font-bold text-gray-600">
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
