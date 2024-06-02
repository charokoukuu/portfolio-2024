import {
  Box,
  Divider,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { SkillContent } from './SkillContent';
import { skills } from '@/lib/store/skill';
import useIntersectionObServer from '@/hooks/useIntersectionObserver';
import { useEffect, useRef } from 'react';

export const SkillCard = () => {
  const pay = useRef(null);
  const observerPay = useIntersectionObServer({
    target: pay,
    rootMargin: '-100px',
  });

  useEffect(() => {
    console.log(observerPay.intersectionRatio);
  }, [observerPay.intersectionRatio]);
  return (
    <div ref={pay}>
      <Box
        className=" h-[90vw] w-[90vw] rounded-2xl p-5 sm:h-[350px] sm:w-[350px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, #f87171 ${50 - observerPay.intersectionRatio}%, #1e3a8a ${100 - observerPay.intersectionRatio}%)`,
        }}
      >
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
