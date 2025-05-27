import { useEffect } from 'react';

export const useIntersectionObserver = (
  elements: HTMLDivElement[] | null[],
  passedCallback?: IntersectionObserverCallback,
  options?: IntersectionObserverInit
) => {
  //provide a default callback and options if nothing passed
  const defaultOptions = {
    root: null,
    rootMargin: '0px 0px -200px 0px',
    threshold: 0,
  };

  const defaultCallback = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const element = entry.target;

      if (entry.isIntersecting) {
        element.classList.add('visible');
      }
    });
  };

  //init the callback and otions that used in observer
  const usedCallback = passedCallback || defaultCallback;
  const usedOptions = options || defaultOptions;

  const observer = new IntersectionObserver(usedCallback, usedOptions);

  useEffect(() => {
    if (elements.length > 0) {
      elements.forEach((element) => {
        if (element) {
          observer.observe(element);
        }
      });
    }

    return () => observer.disconnect();
  }, [elements]);
};
