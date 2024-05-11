import { useEffect } from "react";

const useLocalStorageTimeout = (
  key: string,
  timeoutDuration: number,
  callback?: (arg: any) => void
): void => {
  useEffect(() => {
    const timer = setTimeout(() => {
      localStorage.removeItem(key);
      if (callback) {
        callback(null);
      }
    }, timeoutDuration);

    return () => clearTimeout(timer);
  }, [key, timeoutDuration, callback]);
};

export default useLocalStorageTimeout;
