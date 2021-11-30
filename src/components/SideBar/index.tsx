import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Input,
  Avatar,
  AvatarBadge,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import './index.scss';

export default function SideBar() {
  return <div className="app-sidebar">
    <Stack 
      className="title" 
      direction='row' 
      spacing={4} 
      align="center"
    >
      <Avatar>
        <AvatarBadge boxSize='1.25em' bg='green.500' />
      </Avatar>
      <Input variant='filled' placeholder='Search dialogs' />
    </Stack>
    <Tabs variant='soft-rounded' colorScheme='green' isFitted>
      <TabList>
        <Tab>Recent</Tab>
        <Tab>Friends</Tab>
        <Tab>Groups</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <p>Recent</p>
        </TabPanel>
        <TabPanel>
          <p>Friends</p>
        </TabPanel>
        <TabPanel>
          <p>Groups</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
  </div>;
}
