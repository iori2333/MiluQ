import { useDispatch, useSelector } from '../redux';
import { ChatTileProp } from '../types/props';
import { addRecent, removeRecent } from '../redux/reducers/account';

export default function useTiles(): [
  ChatTileProp[],
  (...props: ChatTileProp[]) => void,
  (prop: { type: 'g' | 'p'; chatId: number }) => void
] {
  const dispatch = useDispatch();
  return [
    useSelector(state => state.account).recent,
    prop => dispatch(addRecent(prop)),
    prop => dispatch(removeRecent(prop))
  ];
}
