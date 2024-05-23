import { Box, Divider, Text } from '@chakra-ui/react';
import Tack from './Tack';
import { internCardColor } from '@/lib/utils/util';

interface Props {
  name: string;
  term: string;
  index: number;
  children: React.ReactNode;
}
export const InternCard = (props: Props) => {
  return (
    <div>
      <Box
        className="relative h-[90vw] w-[90vw] p-5 sm:h-[350px] sm:w-[350px]"
        style={{
          boxShadow: '11px 11px 8.6px rgba(0, 0, 0, 0.25)',
          backgroundColor: internCardColor(props.index),
        }}
      >
        <Text className=" mt-4 text-3xl text-[#006C84]">{props.name}</Text>
        <Text className="text-1xl text-black">{props.term}</Text>
        <Divider borderColor={'#707070'} mt={2} />
        <Text className="text-1xl mt-3 text-black">{props.children}</Text>
      </Box>
    </div>
  );
};
