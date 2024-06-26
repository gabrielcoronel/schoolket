import { useState, useEffect } from 'react';

const useAsync = (asyncFunction) => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    asyncFunction()
      .then((resolved) => setResult(resolved));
  }, []);

  return result;
};

export default useAsync;