import { Avatar, Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { memo } from 'react';
import './index.scss';
import { fromNow } from '../../utils/date';
import { ChatTileProp } from '../../types/props';

function ChatTile(props: ChatTileProp) {
  const { type, chatId, avatar, name, message, lastUpdate } = props;
  const location = useLocation();
  const navigate = useNavigate();

  const cid = `/${type}/${chatId}`;
  const active = location.pathname.startsWith(cid);

  return (
    <Box
      className="chat-tile"
      background={active ? 'rgb(196, 252, 226)' : 'rgba(238, 238, 238, 0.33)'}
      onClick={() => navigate(cid)}
    >
      <Box>
        <Avatar size="sm" src={avatar} />
      </Box>
      <Box pl={2} minWidth="0">
        <Flex flexDirection="row" alignItems="space-between">
          <Text isTruncated>
            {name} ({chatId})
          </Text>
          <Spacer width="36" />
          <Text fontSize="xs" align="end">
            {fromNow(lastUpdate)}
          </Text>
        </Flex>
        <Text fontSize="xs" isTruncated>
          {message}
        </Text>
      </Box>
    </Box>
  );
}

export default memo(ChatTile);
