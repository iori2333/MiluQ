import React, { createContext, memo, useContext, useRef } from 'react';
import {
  ButtonGroup,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  HStack
} from '@chakra-ui/react';
import { MdSend } from 'react-icons/md';

import { ChatContext } from '../../pages/ChatPage';
import { AppContext } from '../../pages/AppContainer';
import { MessageProps } from '../../types/props';

import MoreMenu from './MoreMenu';
import EmojiPanel from './EmojiPanel';

export const InputContext = createContext<{ a: number }>({ a: 0 });

function ChatInput() {
  const { dispatch } = useContext(ChatContext);
  const { scrollTop } = useContext(AppContext);
  const contentRef = useRef<HTMLInputElement>(null);

  const buildMessage = () => {
    if (!contentRef.current?.value) {
      return;
    }
    scrollTop();
    const message = {
      avatar: '',
      content: contentRef.current.value,
      role: 'me',
      name: 'Iori',
      mine: true
    } as MessageProps;
    dispatch({ extras: message });
    contentRef.current.value = '';
  };

  return (
    <HStack spacing={2} w="100%">
      <InputGroup size="md">
        <Input
          variant="filled"
          pr="4.5rem"
          type="text"
          ref={contentRef}
          onKeyUp={event => event.key == 'Enter' && buildMessage()}
        />
        <InputRightElement width="6.5rem">
          <ButtonGroup>
            <InputContext.Provider value={{ a: 0 }}>
              <EmojiPanel />
              <MoreMenu />
            </InputContext.Provider>
          </ButtonGroup>
        </InputRightElement>
      </InputGroup>
      <IconButton icon={<MdSend />} onClick={buildMessage} aria-label="send" />
    </HStack>
  );
}

export default memo(ChatInput);
