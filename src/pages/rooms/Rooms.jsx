import { Link } from 'react-router-dom';
import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react';
import './rooms.css';

function RoomItem({ name, to }) {
  return (
    <Link to={to}>
      <Flex
        className="roomContainer"
        pos={'relative'}
        justify={'center'}
        align={'center'}
        w={'100%'}
        h={'200px'}
        border={'1px solid black'}
        color={'white'}
        overflow={'hidden'}
      >
        <Box
          className="roomImg"
          pos={'absolute'}
          w={'100%'}
          h={'100%'}
          bgImage={
            "url('https://i.blogs.es/7dde2b/mensajes-de-google/1366_2000.jpg')"
          }
          bgSize={'cover'}
          bgPos={'center'}
          bgColor={'white'}
          transform={'scale(1.5)'}
          transition={'.2s all'}
          filter={'blur(0px)'}
        ></Box>
        <Text
          pos={'relative'}
          fontFamily={'poppins'}
          fontSize={'xl'}
          fontWeight={'semibold'}
          color={'black'}
        >
          {name}
        </Text>
      </Flex>
    </Link>
  );
}

export function Rooms() {
  return (
    <Box
      w={'100%'}
      h={'100vh'}
      p={4}
      pt={32}
      bgImage={
        "url('https://www.mundogatos.com/Uploads/mundogatos.com/ImagenesGrandes/los-mejores-chats-y-apps-para-amantes-de-los-gatos.jpg')"
      }
      bgSize="cover"
      bgRepeat={'no-repeat'}
      bgBlendMode={'primary'}
      bgPos={'center'}
      bgAttachment="fixed"
      bgColor={'white'}
    >
      <Heading
        fontFamily={'poppins'}
        fontSize={'4xl'}
        textAlign={'center'}
        mb={6}
        color={'white'}
      >
        Salas
      </Heading>
      <Grid
        gridTemplateColumns={{
          base: 'repeat(auto-fit, minmax(200px, 1fr))'
        }}
        gap={4}
        w={'100%'}
      >
        <RoomItem name="Sala 1" to="1" />
        <RoomItem name="Sala 2" to="2" />
        <RoomItem name="Sala 3" to="3" />
        <RoomItem name="Sala 4" to="4" />
      </Grid>
    </Box>
  );
}
