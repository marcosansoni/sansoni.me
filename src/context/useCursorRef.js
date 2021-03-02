import { useContext } from 'react';
import CursorContext from './CursorContext';

const useCursorRef = () => {
  const { ref } = useContext(CursorContext);

  const handleHover = (className) => {
    ref.current.classList.add(className);
  };

  const handleLeave = (className) => {
    ref.current.classList.remove(className);
  };

  return { ref, handleHover, handleLeave };
};

export default useCursorRef;
