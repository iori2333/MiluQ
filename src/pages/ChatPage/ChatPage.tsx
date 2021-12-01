import React from 'react';
import {
  IconButton,
  Button,
  InputGroup,
  InputRightElement,
  Input,
  Stack
} from '@chakra-ui/react';
import { MdSend } from 'react-icons/md';
import MessageTile from '../../components/MessageTile';

export interface ChatPageProps {
  isGroup: boolean;
}

function ChatPage({ isGroup }: ChatPageProps) {
  return (
    <div className="chat-page">
      <div className="chat-content">
        <MessageTile
          role="admin"
          avatar="https://avatars.githubusercontent.com/u/81511507?v=4"
          name="Iori"
          content="114514"
          mine={false}
        />
        <MessageTile
          role="admin"
          avatar="https://avatars.githubusercontent.com/u/81511507?v=4"
          name="Iori"
          content="1919810"
          mine={false}
        />
        <MessageTile
          role="admin"
          avatar="https://avatars.githubusercontent.com/u/81511507?v=4"
          name="Iori"
          content="哼哼哼啊啊啊啊啊啊"
          mine={false}
        />
        <MessageTile
          role="admin"
          avatar="https://avatars.githubusercontent.com/u/81511507?v=4"
          name="Iori"
          content="呃呃呃呃啊啊啊啊啊啊啊"
          mine={true}
        />
      </div>
      <Stack className="bottom-bar" spacing={4} direction="row" align="center">
        <InputGroup size="md">
          <Input pr="4.5rem" type="text" />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm">
              ...
            </Button>
          </InputRightElement>
        </InputGroup>
        <IconButton icon={<MdSend />} onClick={() => {}} aria-label="send" />
      </Stack>
    </div>
  );
}

export default ChatPage;
