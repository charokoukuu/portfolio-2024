import { Box, Divider, Text } from '@chakra-ui/react';

export const PR = () => {
  return (
    <div>
      <Box className=" h-[90vw] w-[90vw] rounded-2xl bg-gradient-to-b from-[#00BFCB] to-[#000] p-5 sm:h-[350px] sm:w-[350px]">
        <Text className="text-1xl mt-3 text-white">ABOUT ME</Text>
        <Divider borderColor={'#fff'} mt={2} className="mb-3" />
        <Text className="text-sm text-white">
          私は、フロントエンドを専門とするエンジニア大学院生です。PdMの経験があり、React/Next.js/Vue.jsを用いた開発が得意です。バックエンドでは、Node.jsフレームワークのExpressやNest.jsを使用し、MongoDBやPostgreSQLを扱っています。最近は、gRPCやGraphQLを活用したマイクロサービスやクリーンアーキテクチャでの開発に取り組んでいます。
          また、フリーランスとしてWEBサービスの受託開発を行い、顧客のヒアリングから納品まで全工程を担当した経験があります。ハッカソンなどの技術系イベントにも興味があり、これまでに数々の受賞経験があります。
        </Text>
      </Box>
    </div>
  );
};
