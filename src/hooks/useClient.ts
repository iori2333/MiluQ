import { useSelector } from '../redux';

function useClient() {
  return useSelector(state => state.account).client;
}

export default useClient;
