import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// import { setSearch } from '../redux/slices/storesSlice';

function useDebounce(value, delay, cb) {
  const dispatch = useDispatch();
  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(cb(value));
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
}
export default useDebounce;
