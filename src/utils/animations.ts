interface AnimationOptions {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export const setupIntersectionObserver = (
  elements: Element | Element[] | NodeListOf<Element>,
  callback: (entry: IntersectionObserverEntry) => void,
  options: AnimationOptions = {}
): IntersectionObserver => {
  const { 
    threshold = 0.1, 
    rootMargin = "0px", 
    once = true 
  } = options;
  
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
          
          if (once) {
            observer.unobserve(entry.target);
          }
        }
      });
    },
    { threshold, rootMargin }
  );
  
  if (elements instanceof Element) {
    observer.observe(elements);
  } else {
    elements.forEach((el) => observer.observe(el));
  }
  
  return observer;
};

export const fadeInUpAnimation = (element: Element): void => {
  element.classList.add('opacity-100', 'translate-y-0');
};

export const staggeredAnimation = (
  elements: Element[] | NodeListOf<Element>,
  callback: (el: Element, index: number) => void,
  delay = 100
): void => {
  Array.from(elements).forEach((el, index) => {
    setTimeout(() => {
      callback(el, index);
    }, index * delay);
  });
};