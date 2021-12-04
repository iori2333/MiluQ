import React, { useEffect, useRef } from 'react';
import {
  Button,
  Center,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
  useDisclosure,
  useTimeout
} from '@chakra-ui/react';

import useToast from '../../hooks/useToast';
import { convertMd5 } from '../../utils/encrypt';
import useClient from '../../hooks/useClient';

export interface LoadingPageProps {
  setOnline: (online: boolean) => void;
}

function LoadingPage({ setOnline }: LoadingPageProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const uinRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const toast = useToast();
  const client = useClient();

  useTimeout(() => {
    toast.warning(
      'This may due to network issues. Try refreshing this page?',
      'Login costs more time than expected',
      { duration: 8000 }
    );
  }, 30000);

  useEffect(onOpen, [onOpen]);

  const login = () => {
    const uin = uinRef.current?.value;
    const password = passwordRef.current?.value;
    if (!uin || !password) {
      toast.warning('Login failed');
      return;
    }
    onClose();
    toast.info('Connecting to server');
    client.login(parseInt(uin), convertMd5(password), () => {
      setOnline(true);
      toast.success('Online');
    });
  };

  return (
    <Center bg="green.300" h="100vh" color="white">
      <HStack spacing={4}>
        <Spinner size="xl" />
        <Text fontSize="xl">Loading MiluQ...</Text>
      </HStack>
      <Modal
        initialFocusRef={uinRef}
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={() => toast.warning('Please login first')}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Login to MiluQ</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>QQ</FormLabel>
              <Input ref={uinRef} placeholder="Server IP" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                ref={passwordRef}
                type="password"
                placeholder="Enter Password"
              />
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={login}>
              Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Center>
  );
}

export default LoadingPage;
