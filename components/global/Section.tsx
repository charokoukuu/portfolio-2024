import { Divider, Text } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
interface Props {
  children: React.ReactNode;
}

const RampartOneFont = Inter({
  weight: '400',
  subsets: ['latin'],
});
export const Section = (props: Props) => {
  return (
    <div className="m-auto mt-3 sm:mt-10">
      <Text
        className={`${RampartOneFont.className} text-center text-5xl text-gray-500`}
      >
        {props.children}
      </Text>
      <Divider className="my-5" />
    </div>
  );
};
