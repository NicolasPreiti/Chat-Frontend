import { Link } from 'react-router-dom';
import { Box, Flex, Text } from '@chakra-ui/react';
import './rooms.css';

function RoomItem({ name, to }) {
  return (
    <Link to={to}>
      <Flex
        className="roomContainer"
        pos={'relative'}
        justify={'center'}
        align={'center'}
        w={'260px'}
        h={'200px'}
        color={'white'}
        overflow={'hidden'}
      >
        <Box
          className="roomImg"
          pos={'absolute'}
          w={'100%'}
          h={'100%'}
          bgImage={
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/GChat.png/250px-GChat.png')"
          }
          bgSize={'cover'}
          bgPos={'center'}
          bgColor={'white'}
          transition={'.2s all'}
        ></Box>
        <Text pos={'relative'} fontFamily={'poppins'} fontSize={'xl'}>
          {name}
        </Text>
      </Flex>
    </Link>
  );
}

export function Rooms() {
  return (
    <Box w={'100%'} h={'93vh'} bgColor={'gray.400'}>
      <Flex justify={'center'} align={'center'} h={'100%'} gap={6}>
        <RoomItem name="Sala 1" to="1" />
        <RoomItem name="Sala 2" to="2" />
        <RoomItem name="Sala 3" to="3" />
        <RoomItem name="Sala 4" to="4" />
      </Flex>
    </Box>
  );
}
