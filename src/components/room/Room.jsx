import { Box, Flex, Heading, Input, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

const socket = io('http://localhost:4000/');

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
      msg: message
    });

    setMessage('');
  };

  const handleAddMsg = (data) => {
    setMessages([...messages, {
      user: data.user,
      msg: data.msg
    }]);

    window.scrollTo(0, document.body.scrollHeight);
  };

  useEffect(() => {
    if (!username) navigate('/', { replace: true });

    socket.on('chat message', handleAddMsg);
    return () => {
      socket.off('chat message', handleAddMsg);
    };
  }, [messages]);

  return (
    <Box minH={'100vh'} pt={10} bgColor={'gray.800'} color="white">
      <Heading id='poppins' textAlign={'center'}>Sala Publica</Heading>
      <Box id='poppins' mt={10} px={3}>
        <Flex mb={5}>
          <Text mr={1}>
          Usuario:
          </Text>
          <Text fontWeight={'bold'} color="purple.400">
            {username}
          </Text>
        </Flex>

        <Box id='chat poppins' w={'100%'} color="white">
          {messages.map((msg) => (
            <Flex key={msg.msg} id='poppins' fontSize={'lg'}>
              <Text fontWeight={''} mr={1} color="green.400">{ msg.user }: </Text>
              <Text>{ msg.msg }</Text>
            </Flex>
          ))}
        </Box>
      </Box>
      <form id='poppins' action="">
        <Flex w={'100%'} pos="fixed" bottom="0" gap={5} p={3} borderTop={'1px solid white'} color={'white'} bgColor={'gray.900'}>
          <Input id="message" type={'text'} value={message} onChange={handleMessage} w="100%" borderRadius={100} bgColor={'gray.500'} />
          <Input width={'100px'} onClick={handleSend} type="submit" borderRadius={100}/>
        </Flex>
      </form>
    </Box>

  );
}
