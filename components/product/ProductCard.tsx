import { Text, Image, Card, CardBody, Box } from '@chakra-ui/react';

interface Props {
  name: string;
  thumbnail: string;
  description: string;
  category: string;
}

export const ProductCard = (props: Props) => {
  return (
    <Box m="6">
      <Card className="m-auto w-[500px] cursor-pointer">
        <CardBody>
          <Image
            className="m-auto"
            src={props.thumbnail}
            alt={props.name}
            borderRadius="lg"
          />
          <Text align={'left'} className="my-3 font-bold">
            {props.name}
          </Text>
          <Text align={'left'}>{props.description}</Text>
        </CardBody>
      </Card>
    </Box>
  );
};
