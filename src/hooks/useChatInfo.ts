import { useParams } from 'react-router-dom';

function useChatInfo(): ['g' | 'p' | undefined, number] {
  const { type, chat } = useParams();
  return [
    type == 'p' || type == 'g' ? type : undefined,
    parseInt(chat || '-1')
  ];
}

export default useChatInfo;
