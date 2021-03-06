import React, { memo } from 'react';
import { Box, Avatar, Text, Badge, Flex } from '@chakra-ui/react';
import './index.scss';
import { MessageProps } from '../../types/props';

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
          <Text
            className="text-content"
            borderRadius={mine ? '8px 8px 0 8px' : '8px 8px 8px 0'}
          >
            {content}
          </Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default memo(MessageTile);
