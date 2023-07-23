import { useRef, useEffect } from 'react';
export function useHorizontalScroll() {
    const elRef = useRef(null);
    useEffect(() => {
        const el = elRef.current;
        if (!el)
            return;
        const onWheel = (e) => {
            if (e.deltaY == 0)
                return;
            e.preventDefault();
            el.scrollTo({
                left: el.scrollLeft + e.deltaY,
                behavior: 'auto',
            });
        };
        el.addEventListener('wheel', onWheel);
        return () => el.removeEventListener('wheel', onWheel);
    }, []);
    return elRef;
}
//# sourceMappingURL=useHorizontalScroll.js.map