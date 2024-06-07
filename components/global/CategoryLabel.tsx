import { Box, Text } from '@chakra-ui/react';

interface Props {
  name: string;
  color: string;
}
export const CategoryLabel: React.FC<Props> = ({ color, name }) => {
  return (
    <Box
      style={{
        background: color,
      }}
      className="flex h-[25px] w-[90px] rounded-2xl bg-gradient-to-b"
    >
      <Text className="m-auto flex  justify-center text-center text-sm font-bold text-white">
        {name}
      </Text>
    </Box>
  );
};
