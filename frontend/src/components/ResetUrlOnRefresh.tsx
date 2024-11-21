import { useEffect } from 'react';

const RedirectOnRefresh = () => {
  useEffect(() => {
    const navigationEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];

    if (navigationEntries.length > 0 && navigationEntries[0].type === 'reload') {
     
      window.location.href = '/';
    }
  }, []);

  return null;
};

export default RedirectOnRefresh;
