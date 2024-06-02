import { useState, useEffect, useRef, useCallback } from 'react';

interface UseIntersectionObserverProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

const useIntersectionObserver = (
  {
    root = null,
    rootMargin = '0px',
    threshold = 0,
  }: UseIntersectionObserverProps,
  callback: IntersectionObserverCallback
) => {
  const [intersectionRatio, setIntersectionRatio] = useState(0);
  const observer = useRef<IntersectionObserver | null>(null);
  const observedElement = useRef<Element | null>(null);

  const setObserver = useCallback(
    (node: Element | null) => {
      if (observer.current) observer.current.disconnect();

      if (node) {
        observedElement.current = node;
        observer.current = new IntersectionObserver(
          (entries) => {
            const entry = entries[0];
            setIntersectionRatio(entry.intersectionRatio);
            callback(entries, observer.current as IntersectionObserver);
          },
          { root, rootMargin, threshold }
        );

        observer.current.observe(node);
      }
    },
    [root, rootMargin, threshold, callback]
  );

  useEffect(() => {
    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, []);

  return { setObserver, intersectionRatio };
};

export default useIntersectionObserver;
