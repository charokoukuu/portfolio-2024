import { useState, useEffect } from 'react';

type useIntersectionObServerArgs = {
  target: React.RefObject<Element>;
  rootMargin?: string;
  threshold?: number[];
};

type useIntersectionObServerResult = {
  isVisible: boolean;
  intersectionRatio: number;
};

const useIntersectionObServer = ({
  target,
  rootMargin = '0px',
}: useIntersectionObServerArgs): useIntersectionObServerResult => {
  const [isVisible, setIsVisible] = useState(false);
  const [intersectionRatio, setIntersectionRatio] = useState(0);

  useEffect(() => {
    if (!target.current) return;

    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        setIntersectionRatio(entry.intersectionRatio);
        setIsVisible(entry.isIntersecting);
      },
      { rootMargin, threshold: buildThresholdList() }
    );

    observer.observe(target.current);

    return () => observer.disconnect();
  }, [target, rootMargin]);

  return { isVisible, intersectionRatio: intersectionRatio * 100 };
};

const buildThresholdList = () => {
  let thresholds = [];
  let numSteps = 200;

  for (let i = 1; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }
  return thresholds;
};
export default useIntersectionObServer;
