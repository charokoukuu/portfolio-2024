// Sample card from Airbnb

import { AddIcon, ChatIcon, CheckIcon, DownloadIcon } from '@chakra-ui/icons';
import {
  Card,
  CardBody,
  CardHeader,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import TimelineRow from './TimelineRow';
// This is how the "timelineData" imported above should look like
const timelineData = [
  {
    logo: AddIcon,
    title: '$2400, Design changes',
    date: '22 DEC 7:20 PM',
    color: 'brand.300',
  },
  {
    logo: ChatIcon,
    title: 'New order #4219423',
    date: '21 DEC 11:21 PM',
    color: 'blue.300',
  },
  {
    logo: DownloadIcon,
    title: 'Server Payments for April',
    date: '21 DEC 9:28 PM',
    color: 'orange.300',
  },
  {
    logo: CheckIcon,
    title: 'New card added for order #3210145',
    date: '20 DEC 3:52 PM',
    color: 'red.300',
  },
];

export const TimeLine = () => {
  const textColor = useColorModeValue('gray.700', 'white.300');
  const bgIconColor = useColorModeValue('white.300', 'gray.700');
  const bg = useColorModeValue('gray.50', 'gray.700');

  return (
    <Card p="1rem" maxHeight="100%">
      <CardHeader pt="0px" p="28px 0px 35px 21px">
        <Flex direction="column">
          <Text fontSize="lg" color={textColor} fontWeight="bold" pb=".5rem">
            Orders overview
          </Text>
          <Text fontSize="sm" color="gray.400" fontWeight="normal">
            <Text fontWeight="bold" as="span" color="brand.300">
              +30%
            </Text>{' '}
            this month.
          </Text>
        </Flex>
      </CardHeader>
      <CardBody ps="26px" pe="0px" mb="31px" position="relative">
        <Flex direction="column">
          {timelineData.map((row, index, arr) => {
            return (
              <TimelineRow
                key={index}
                logo={row.logo}
                title={row.title}
                date={row.date}
                color={row.color}
                index={index}
                arrLength={arr.length}
              />
            );
          })}
        </Flex>
      </CardBody>
    </Card>
  );
};
