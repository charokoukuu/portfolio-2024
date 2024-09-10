import { Box, Divider, Text } from '@chakra-ui/react';
import Tack from './Tack';
import {
  internCardColor,
  internDividerColor,
  internTextCardColor,
  internTitleCardColor,
} from '@/lib/utils/util';

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
        <Text
          className=" mt-4 text-3xl"
          style={{
            color: internTitleCardColor(props.index),
          }}
        >
          {props.name}
        </Text>
        <Text
          className="text-1xl"
          style={{
            color: internTextCardColor(props.index),
          }}
        >
          {props.term}
        </Text>
        <Divider
          style={{
            borderColor: internDividerColor(props.index),
          }}
          mt={2}
        />
        <Text
          className="text-1xl mt-3"
          style={{
            color: internTextCardColor(props.index),
          }}
        >
          {props.children}
        </Text>
      </Box>
    </div>
  );
};
