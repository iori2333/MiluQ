import { useSelector } from '../redux';

function useClient() {
  return useSelector(state => state.account);
}

export default useClient;
