import { useEffect } from 'react';

import { EventMap } from '../client/types/events';
import client from '../client/client';

export default function useEvent<T extends keyof EventMap>(
  event: T,
  callback: (data?: EventMap[T]) => void
) {
  useEffect(() => {
    client.on(event, callback);
    return () => client.off(event, callback);
  }, [event, callback]);
}
