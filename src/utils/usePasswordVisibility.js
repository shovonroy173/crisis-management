import { useState, useCallback } from 'react';

const usePasswordVisibility = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = useCallback(() => setIsVisible(v => !v), []);
  return [isVisible, toggle];
};

export default usePasswordVisibility;