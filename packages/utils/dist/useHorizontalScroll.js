import { useRef, useEffect } from 'react';
export function useHorizontalScroll() {
    var elRef = useRef(null);
    useEffect(function () {
        var el = elRef.current;
        if (!el)
            return;
        var onWheel = function (e) {
            if (e.deltaY == 0)
                return;
            e.preventDefault();
            el.scrollTo({
                left: el.scrollLeft + e.deltaY,
                behavior: 'auto',
            });
        };
        el.addEventListener('wheel', onWheel);
        return function () { return el.removeEventListener('wheel', onWheel); };
    }, []);
    return elRef;
}
//# sourceMappingURL=useHorizontalScroll.js.map