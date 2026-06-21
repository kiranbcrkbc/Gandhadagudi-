import { useState, useEffect, useRef } from 'react';

export function useInView<T extends Element = HTMLElement>(
  options: IntersectionObserverInit = {},
  once: boolean = true
) {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        if (once) {
          observer.unobserve(target);
        }
      } else {
        if (!once) {
          setIsInView(false);
        }
      }
    }, options);

    observer.observe(target);

    return () => {
      observer.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    once,
    options.root,
    options.rootMargin,
    Array.isArray(options.threshold) ? options.threshold.join(',') : options.threshold
  ]);

  return { ref, isInView };
}
