import { Box, Divider, Text } from '@chakra-ui/react';

interface Props {
  name: string;
  term: string;
  children: React.ReactNode;
}
export const InternCard = (props: Props) => {
  return (
    <div>
      <Box
        className=" h-[90vw] w-[90vw] bg-[#d9d9d9] p-5 sm:h-[350px] sm:w-[350px]"
        style={{
          boxShadow: '11px 11px 8.6px rgba(0, 0, 0, 0.25)',
        }}
      >
        <Text className=" my-1 text-3xl text-[#006C84]">{props.name}</Text>
        <Text className="text-1xl text-black">{props.term}</Text>
        <Divider borderColor={'#707070'} mt={2} />
        <Text className="text-1xl mt-3 text-black">{props.children}</Text>
      </Box>
    </div>
  );
};
