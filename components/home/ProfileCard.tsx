import { Box, Card, CardBody, Text } from '@chakra-ui/react';
import Image from 'next/image';

export const ProfileCard = () => {
  return (
    <div>
      <Box className="relative h-[90vw] w-[90vw] rounded-2xl bg-[url('https://avatars.githubusercontent.com/u/35647163?v=4')] sm:h-[350px] sm:w-[350px]">
        <Box className="bg-custom-gradient absolute left-0 top-0 h-full w-full rounded-2xl" />
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
            className="flex h-20 w-20 items-center justify-center rounded-full bg-white"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/GitHub_Invertocat_Logo.svg/1200px-GitHub_Invertocat_Logo.svg.png"
              alt="GitHub"
              width={80}
              height={80}
              className="h-14 w-14"
            />
          </a>
          <a
            href="https://protopedia.net/prototyper/charokoukuu"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-white"
          >
            <Image
              src="https://protopedia.net/pic/a5c8be7d-7c5d-4ad6-886a-618b58bd28d6.png"
              alt="ProtoPedia"
              width={80}
              height={80}
              className="h-20 w-20 rounded-full"
            />
          </a>
          <a
            href="https://qiita.com/charokoukuu"
            className="flex h-20 w-20 items-center justify-center rounded-full bg-white"
          >
            <Image
              src="https://cdn.qiita.com/assets/public/push_notification/image-qiitan-572179a3bbde375850422ea48b2b6272.png"
              alt="Portfolio"
              width={80}
              height={80}
              className="h-14 w-14"
            />
          </a>
        </Box>
      </Box>
    </div>
  );
};
