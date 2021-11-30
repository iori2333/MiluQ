import {
  useToast as useChakraToast,
  UseToastOptions
} from '@chakra-ui/react';

export default function useToast() {
  const toast = useChakraToast();
  const core = (status: 'info' | 'warning' | 'success' | 'error') =>
    (description: string, title?: string, options?: UseToastOptions) => toast({
      title,
      description,
      status,
      position: 'top',
      duration: 3000,
      ...options
    });

  return {
    success: core('success'),
    warning: core('warning'),
    error: core('error'),
    info: core('info'),
  };
}
