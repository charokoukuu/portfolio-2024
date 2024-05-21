import { Box, Divider, SimpleGrid, Text } from '@chakra-ui/react';
import { SkillContent } from './SkillContent';
import { skills } from '@/lib/store/skill';

interface Props {
  name: string;
  term: string;
  children: React.ReactNode;
}

export const SkillCard = (props: Props) => {
  return (
    <div>
      <Box className=" h-[90vw] w-[90vw] rounded-2xl bg-gradient-to-b from-red-400 to-blue-900 p-5 sm:h-[350px] sm:w-[350px]">
        <Text className=" my-1 text-3xl text-[#006C84]">{props.name}</Text>
        <Text className="text-1xl text-black">{props.term}</Text>
        <Text className="text-1xl mt-3 text-white">SKILLS</Text>
        <Divider borderColor={'#fff'} mt={2} className="mb-3" />
        <SimpleGrid columns={3} spacing={3}>
          {skills.map((item) => (
            <SkillContent
              key={item.name}
              name={item.name}
              rate={item.rate}
              image={item.image}
            />
          ))}
        </SimpleGrid>
      </Box>
    </div>
  );
};
