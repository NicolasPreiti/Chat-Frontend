import { Flex, Text } from '@chakra-ui/react';

export function Message({ msg, username }) {
  return (
    <Flex
      fontFamily={'poppins'}
      fontSize={'lg'}
      direction={'column'}
      alignSelf={msg.user === username ? 'flex-end' : 'flex-start'}
      w={'max-content'}
      maxW={'90%'}
      px={6}
      py={1}
      bg={'secondary'}
      borderRadius={'2xl'}
      boxShadow={'sm'}
    >
      <Text
        fontSize={'small'}
        fontWeight={'semibold'}
        w={'max-content'}
        mr={2}
        color={msg.user === username ? 'white' : 'white'}
      >
        {msg.user}{' '}
      </Text>
      <Text fontSize={'md'} wordBreak={'break-word'} w={'100%'} color={'white'}>
        {msg.msg}
      </Text>
    </Flex>
  );
}
