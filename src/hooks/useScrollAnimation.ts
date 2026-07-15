import { useEffect, useRef, useState, type RefObject } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useScrollAnimation<T extends HTMLElement>(
  options: ScrollAnimationOptions = {}
): [RefObject<T | null>, boolean] {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce]);

  return [ref, isVisible];
}

export function useMultipleScrollAnimations(
  count: number,
  options: ScrollAnimationOptions = {}
): [(el: HTMLElement | null) => void, boolean[]] {
  const { threshold = 0.1, rootMargin = '0px 0px -50px 0px', triggerOnce = true } = options;
  const elementsRef = useRef<(HTMLElement | null)[]>(new Array(count).fill(null));
  const [visibleStates, setVisibleStates] = useState<boolean[]>(new Array(count).fill(false));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = elementsRef.current.indexOf(entry.target as HTMLElement);
          if (index !== -1 && entry.isIntersecting) {
            setVisibleStates((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    elementsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  // Return a single setRef function that takes an element
  const registerRef = (el: HTMLElement | null) => {
    if (el) {
      const index = elementsRef.current.findIndex((e) => e === null || e === el);
      if (index !== -1) {
        elementsRef.current[index] = el;
      }
    }
  };

  // We'll use setRef individually
  return [registerRef, visibleStates];
}

// Simpler approach - just export a custom hook for individual refs
export function useAnimateOnScroll(options?: ScrollAnimationOptions) {
  return useScrollAnimation<HTMLDivElement>(options);
}
