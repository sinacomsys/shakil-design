import { useEffect } from 'react';

export function useOnClickOutSide<T extends HTMLElement = HTMLElement>({
  element,
  handler,
  extraElement,
}: {
  element: T | null;
  handler: () => void;
  extraElement?: T | null;
}) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!element || element.contains(event.target as Node)) return;
      if (
        (extraElement && !extraElement.contains(event.target as Node)) ||
        !extraElement
      ) {
        handler();
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [element, extraElement, handler]);
}
