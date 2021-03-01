import { useContext } from 'react';
import CursorContext from './CursorContext';

const useCursorRef = () => useContext(CursorContext);

export default useCursorRef;
