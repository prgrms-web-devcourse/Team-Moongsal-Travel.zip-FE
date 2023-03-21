import { useCallback, useEffect, useRef } from 'react';

interface IntersectionObserverInit {
  root?: Element | Document | null;
  rootMargin?: string;
  threshold?: number | number[];
}

type IntersectHandler = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver,
) => void;

const useIntersect = (
  onIntersect: IntersectHandler,
  options?: IntersectionObserverInit,
) => {
  const ref = useRef<HTMLDivElement>(null);
  const callback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) onIntersect(entry, observer);
      });
    },
    [onIntersect],
  );

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(callback, options);

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options, callback]);

  return ref;
};

export default useIntersect;
