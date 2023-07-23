import { useEffect } from 'react';
export function useOnClickOutSide({ element, handler, extraElement, }) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (!element || element.contains(event.target))
                return;
            if ((extraElement && !extraElement.contains(event.target)) ||
                !extraElement) {
                handler();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [element, extraElement, handler]);
}
//# sourceMappingURL=useOnclickOutsiede.js.map