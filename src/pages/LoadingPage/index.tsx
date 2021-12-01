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
  useDisclosure
} from '@chakra-ui/react';

import useToast from '../../hooks/useToast';

export interface LoadingPageProps {
  callback: () => void;
}

function LoadingPage({ callback }: LoadingPageProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const serverRef = useRef<HTMLInputElement>(null);
  const keyRef = useRef<HTMLInputElement>(null);
  const finalRef = useRef(null);
  const toast = useToast();

  useEffect(onOpen, [onOpen]);

  const login = () => {
    // login here
    const server = serverRef.current?.value;
    const key = keyRef.current?.value;
    if (!server || !key) {
      toast.warning('Login failed');
      return;
    }
    console.log(server, key);
    toast.info('Connecting to server');
    onClose();

    setTimeout(() => {
      callback();
      toast.success('Online');
    }, 3000);
  };

  return (
    <Center bg="green.300" h="100vh" color="white">
      <HStack spacing={4}>
        <Spinner size="xl" />
        <Text fontSize="xl">Loading MiluQ...</Text>
      </HStack>
      <Modal
        initialFocusRef={serverRef}
        finalFocusRef={finalRef}
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
              <FormLabel>Server address</FormLabel>
              <Input ref={serverRef} placeholder="Server IP" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Private Key</FormLabel>
              <Input ref={keyRef} type="password" placeholder="Key" />
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
