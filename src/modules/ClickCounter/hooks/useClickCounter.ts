import React, { useState, useEffect, useCallback } from 'react';
import { ClickCountAgentInstance } from '../../../http';
import { mapUpdateCount } from '../helpers';

export const useClickCounter = () => {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState(0);

  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const updateCount = async () => {
      if (count === 0) return;

      setIsLoading(true);
      try {
        const dataCount = await ClickCountAgentInstance.updateClickCount(mapUpdateCount(count));
        setData(dataCount.count);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Ошибка');
        }
      } finally {
        setCount(0);
        setIsLoading(false);
      }
    };

    const timer = setTimeout(() => {
      updateCount();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [count]);

  return { count, isLoading, error, handleClick, data };
};
