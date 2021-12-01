import React, { memo } from 'react';
import { Box, Avatar, Text, Badge, Flex } from '@chakra-ui/react';
import './index.scss';

export interface MessageProps {
  name: string;
  mine: boolean;
  content: string;
  avatar?: string;
  role?: string;
}

function MessageTile({ mine, role, avatar, name, content }: MessageProps) {
  const flex = mine ? 'row-reverse' : 'row';
  return (
    <Box className="message-tile">
      {!mine && (
        <Box className="role-sign" flexDirection={flex}>
          {role && (
            <Badge borderRadius="full" px={2} colorScheme="teal">
              {role}
            </Badge>
          )}
          <Box className="name-text">{name}</Box>
        </Box>
      )}
      <Box className="user-message">
        <Flex flexDirection={flex} align="center">
          <Avatar showBorder name={name} src={avatar} />
          <Text className="text-content">{content}</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default memo(MessageTile);
