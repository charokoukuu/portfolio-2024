import { Box, Text } from '@chakra-ui/react';
import img from 'next/image';

export const ProfileCard = () => {
  return (
    <div>
      <Box className="relative h-[90vw] w-[90vw] rounded-2xl bg-[url('https://avatars.githubusercontent.com/u/35647163?v=4')] sm:h-[350px] sm:w-[350px]">
        <Box className="absolute left-0 top-0 h-full w-full rounded-2xl bg-custom-gradient" />
        <Text className="absolute left-[40px] top-[54px] text-6xl font-bold text-white">
          Hinata
          <br />
          Saito
        </Text>
        <Text className="absolute left-[43px] top-[180px] text-2xl font-bold text-white">
          2001/10/31
        </Text>
        <Box className="absolute bottom-7 left-1/2 mt-4 flex -translate-x-1/2 transform gap-6">
          <a
            href="https://github.com/charokoukuu"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-white transition-transform hover:scale-105"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
              alt="GitHub"
              width={80}
              height={80}
              className="h-14 w-14"
            />
          </a>
          <a
            href="https://protopedia.net/prototyper/charokoukuu"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-white transition-transform hover:scale-105"
          >
            <img
              src="https://protopedia.net/pic/a5c8be7d-7c5d-4ad6-886a-618b58bd28d6.png"
              alt="ProtoPedia"
              width={80}
              height={80}
              className="h-20 w-20 rounded-full"
            />
          </a>
          <a
            href="https://beavers-hive.com/"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-white transition-transform hover:scale-105"
          >
            <img
              src="https://beavers-hive.com/logo.png"
              alt="Beaver's Hive"
              width={100}
              height={100}
              className="h-16 w-16"
            />
          </a>
        </Box>
      </Box>
    </div>
  );
};
