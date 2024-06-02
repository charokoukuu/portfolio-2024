import { Box, Divider, SimpleGrid, Text } from '@chakra-ui/react';
import { SkillContent } from './SkillContent';
import { skills } from '@/lib/store/skill';

export const PR = () => {
  return (
    <div>
      <Box className=" h-[90vw] w-[90vw] rounded-2xl bg-gradient-to-b from-[#00BFCB] to-[#000] p-5 sm:h-[350px] sm:w-[350px]">
        <Text className="text-1xl mt-3 text-white">ABOUT ME</Text>
        <Divider borderColor={'#fff'} mt={2} className="mb-3" />
        <Text className="text-white">
          フロントエンドが得意な大学院生。PdMの経験あり。React、Next.js、Vue.jsに精通。バックエンドではExpress、Nest.jsを用いたNode.jsフレームワークやMongoDB、PostgreSQLを扱う。インターンではgRPCやGraphQLを活用し、マイクロサービスやクリーンアーキテクチャでの開発。フリーランスでWEBサービスの受託開発を行い、ヒアリングから納品までの全工程を担当。ハッカソンでの受賞歴多数。問題解決やチームワークに自信あり。
        </Text>
      </Box>
    </div>
  );
};
