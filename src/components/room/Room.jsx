import { Box, Flex, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { Message } from '../message/Message';
import './styles.css';

export function Room() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState();
  const params = useParams();
  const navigate = useNavigate();
  const username = sessionStorage.getItem('username');

  useEffect(() => {
    const chat = document.getElementById('chat');
    if (!chat) return;
    chat.scrollTo(0, chat.offsetHeight + chat.scrollTop);
  }, [messages]);

  useEffect(() => {
    setSocket(
      io('https://chat-backend-production.up.railway.app/', {
        query: {
          room: params.room
        }
      })
    );
  }, []);

  if (!username) navigate('/', { replace: true });
  if (!socket) return;

  // set message
  const handleMessage = (evt) => {
    setMessage(evt.target.value);
  };

  // send the message
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
    const { user, msg } = data;

    setMessages([
      ...messages,
      {
        user,
        msg
      }
    ]);
  };

  socket.on('chat message', handleAddMsg);
  // return () => {
  //   socket.off('chat message', handleAddMsg);
  //   // const chat = document.getElementById('chat');
  //   // chat.scrollTo(0, document.body.scrollHeight);
  // };

  return (
    <Box w={'100%'} h={'93vh'} p={{ base: 0, md: 6 }} color="black">
      <Flex
        id="poppins"
        direction={'column'}
        w={{ base: '100%', lg: '50%' }}
        h={'100%'}
        mx={'auto'}
        py={{ base: 2, md: 6 }}
        px={{ base: 2, md: 10 }}
        bg={'white'}
        color="black"
        boxShadow={'2xl'}
      >
        <Flex
          id="chat"
          direction={'column'}
          gap={2}
          w={'100%'}
          h={'100%'}
          px={2}
          color="black"
          overflowY={'auto'}
          scrollBehavior="smooth"
        >
          {messages.map((msg) => (
            <Message msg={msg} username={username} />
          ))}
        </Flex>

        <Box fontFamily={'poppins'} w={'100%'} mt={2}>
          <form action="">
            <Flex
              w={'100%'}
              bottom="0"
              gap={5}
              borderTop={'1px solid white'}
              color={'white'}
            >
              <Input
                type={'text'}
                autoFocus
                value={message}
                onChange={handleMessage}
                w="100%"
                borderRadius={100}
                color
                bgColor={'primary'}
              />
              <Input
                type="submit"
                width={'100px'}
                onClick={handleSend}
                borderRadius={100}
                bgColor={'primary'}
              />
            </Flex>
          </form>
        </Box>
      </Flex>
    </Box>
  );
}
