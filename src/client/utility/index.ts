import { API_HOST } from '../api';

import { useState, useEffect } from 'react';

export const useInViewPort = <T extends HTMLElement>(
  ref: React.RefObject<T>,
  options?: IntersectionObserverInit
) => {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setInViewport(entry.isIntersecting);
    }, options);

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options, ref]);
  return inViewport;
};

export const getImageSrc = (name: string) =>
  `${API_HOST}/assets/${name.toLowerCase()}.jpg`;
