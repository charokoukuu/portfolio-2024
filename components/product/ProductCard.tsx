import { Text, Image, Card, CardBody, Box, Divider } from '@chakra-ui/react';

interface Props {
  name: string;
  thumbnail: string;
  description: string;
  category: string;
}

export const ProductCard = (props: Props) => {
  return (
    <Box m="6">
      <Card className="m-auto w-[400px] cursor-pointer hover:bg-gray-200">
        <CardBody>
          <Image
            className="m-auto h-[202px] w-full object-cover object-center"
            src={props.thumbnail}
            alt={props.name}
            borderRadius="lg"
          />
          <Text align={'left'} className="mt-3 font-bold">
            {props.name}
          </Text>
          <Divider className="mb-3" />
          <Text align={'left'}>{props.description}</Text>
        </CardBody>
      </Card>
    </Box>
  );
};
