import { useEffect } from 'react';
export function useOnClickOutSide(_a) {
    var element = _a.element, handler = _a.handler, extraElement = _a.extraElement;
    useEffect(function () {
        function handleClickOutside(event) {
            if (!element || element.contains(event.target))
                return;
            if ((extraElement && !extraElement.contains(event.target)) ||
                !extraElement) {
                handler();
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return function () {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [element, extraElement, handler]);
}
//# sourceMappingURL=useOnclickOutsiede.js.map