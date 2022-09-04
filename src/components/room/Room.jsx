import { Box, Flex, Heading, Input, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';
import './styles.css';

const socket = io('https://chat-backend-production.up.railway.app/');

export function Room () {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();
  const username = sessionStorage.getItem('username');

  const handleMessage = (evt) => {
    setMessage(evt.target.value);
  };

  const handleSend = (evt) => {
    evt.preventDefault();
    if (!message) return;
    socket.emit('chat message', {
      user: username,
      msg: message,
    });

    setMessage('');
  };

  const handleAddMsg = (data) => {
    setMessages([
      ...messages,
      {
        user: data.user,
        msg: data.msg,
      }
    ]);
  };

  useEffect(() => {
    if (!username) navigate('/', { replace: true, });

    socket.on('chat message', handleAddMsg);
    return () => {
      socket.off('chat message', handleAddMsg);
      const chat = document.getElementById('chat');
      chat.scrollTo(0, document.body.scrollHeight);
    };
  }, [messages]);

  return (
    <Box w={'100%'} h={'100vh'} p={{ base: 0, md: 6, }} color='black'>
      <Flex
        id='poppins'
        direction={'column'}
        w={{ base: '100%', lg: '50%', }}
        h={'100%'}
        mx={'auto'}
        py={{ base: 2, md: 6, }}
        px={{ base: 2, md: 10, }}
        bg={'white'}
        color='black'
        boxShadow={'2xl'}
      >

        <Box id='chat' w={'100%'} h={'100%'} color='black' overflowY={'auto'} scrollBehavior="smooth">
          {messages.map((msg) => (
            <Flex key={msg.msg} id='poppins chat' w={'100%'} fontSize={'lg'}>
              <Text
                fontWeight={'semibold'}
                w={'max-content'}
                mr={2}
                color={msg.user === username ? 'purple.400' : 'green.400'}
              >
                {msg.user}:{' '}
              </Text>
              <Text
                wordBreak={'break-word'}
                w={'100%'}
              >
                {msg.msg}
              </Text>
            </Flex>
          ))}
        </Box>

        <Box w={'100%'} mt={2}>
          <form id='poppins' action=''>
            <Flex
              w={'100%'}
              bottom='0'
              gap={5}
              borderTop={'1px solid white'}
              color={'white'}
            >
              <Input
                id='message'
                type={'text'}
                value={message}
                onChange={handleMessage}
                w='100%'
                borderRadius={100}
                color
                bgColor={'gray.700'}
              />
              <Input
                type='submit'
                width={'100px'}
                onClick={handleSend}
                borderRadius={100}
                bgColor={'gray.700'}
              />
            </Flex>
          </form>
        </Box>
      </Flex>

    </Box>
  );
}
