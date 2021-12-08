import { useEffect } from 'react';

import { EventMap } from '../types/events';
import useClient from './useClient';

export default function useEvent<T extends keyof EventMap>(
  event: T,
  callback: EventMap[T]
) {
  const client = useClient();
  useEffect(() => {
    client.on(event, callback);
    return () => client.off(event, callback);
  }, [event, callback, client]);
}
