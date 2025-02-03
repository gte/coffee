import React, { useState, useRef, useEffect, useCallback } from 'react';
import "../styles/swipeable.css";

const Swipeable = ({ children, style, className }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [swiping, setSwiping] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const [prevTranslate, setPrevTranslate] = useState(0);
    const [itemWidth, setItemWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    const containerRef = useRef(null);
    const trackRef = useRef(null);

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                // offsetWidth 是一個用來獲取元素寬度的屬性，
                // 包含元素的內部寬度（content width）、內邊距（padding）以及垂直滾動條（如果有）的寬度，
                // 但不包括外邊距（margin）。
                // 它的特性讓它非常適合用於計算元素的實際渲染尺寸，特別是在需要調整佈局或進行動態排版的場景中
                const containerWidth = containerRef.current.offsetWidth;
                setContainerWidth(containerWidth);
                setItemWidth(containerWidth * 0.8); // 80% 容器寬度
            }
        };

        updateDimensions();
        window.addEventListener('resize', updateDimensions);
        return () => window.removeEventListener('resize', updateDimensions);
    }, []);

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
        setPrevTranslate(currentIndex * -(itemWidth + 15)); // 15px gap
        setSwiping(true);
    };

    const handleMouseDown = (e) => {
        setStartX(e.clientX);
        setPrevTranslate(currentIndex * -(itemWidth + 15));
        setSwiping(true);
    };

    const handleMove = useCallback(
        (clientX) => {
        if (!swiping || !itemWidth) return;

        const deltaX = clientX - startX;
        const newTranslate = prevTranslate + deltaX;

        // 邊界檢測
        const maxTranslate = (itemWidth + 15) * (children.length - 1);
        const boundedTranslate = Math.max(-maxTranslate, Math.min(0, newTranslate));

        setCurrentTranslate(boundedTranslate);

        if (trackRef.current) {
            trackRef.current.style.transform = `translateX(${boundedTranslate}px)`;
        }}, [swiping, itemWidth, startX, prevTranslate, children.length]
    );

    const handleTouchMove = (e) => {
        if (swiping) {
            handleMove(e.touches[0].clientX);
        }
    };

    const handleMouseMove = useCallback(
        (e) => {
        if (swiping) {
            handleMove(e.clientX);
        }},
        [swiping, handleMove]
    );

    const handleEnd = useCallback(() => {
        setSwiping(false);
        if (!trackRef.current || !itemWidth) return;

        const threshold = containerWidth * 0.2;
        const movedDistance = Math.abs(currentTranslate - prevTranslate);

        let newIndex = currentIndex;
        if (movedDistance > threshold) {
            newIndex = currentTranslate < prevTranslate ? currentIndex + 1 : currentIndex - 1;
        }
        // 這是一個限制newIndex範圍的操作，使用Math.max和Math.min來確保newIndex在特定的範圍內
        // Math.min(newIndex, children.length - 1)會取newIndex和children.length -1中較小的一個值，
        // 這樣可以確保newIndex不會超過children.length -1
        // Math.max(0, 上面的結果)會取這個值和0中較大的一個，這樣newIndex就不會小於0。
        // 如果newIndex是-1，Math.min(-1, 2)是-1，然後Math.max(0, -1)變成0，確保索引不會是負數。
        newIndex = Math.max(0, Math.min(newIndex, children.length - 1));
        setCurrentIndex(newIndex);
        const newTranslate = newIndex * -(itemWidth + 15);
        setCurrentTranslate(newTranslate);

        trackRef.current.style.transition = 'transform 0.3s ease-out';
        trackRef.current.style.transform = `translateX(${newTranslate}px)`;
    }, [currentIndex, currentTranslate, prevTranslate, itemWidth, containerWidth, children.length]);


    // const handleMouseUp = useCallback(() => {
    //     window.removeEventListener('mousemove', handleMouseMove);
    //     window.removeEventListener('mouseup', handleMouseUp);
    //     handleEnd();
    // }, [handleMouseMove, handleEnd]);

    // useEffect(() => {
    //     if (swiping) {
    //         window.addEventListener('mousemove', handleMouseMove);
    //         window.addEventListener('mouseup', handleMouseUp);
    //     }
    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove);
    //         window.removeEventListener('mouseup', handleMouseUp);
    //     };
    // }, [swiping, handleMouseMove, handleMouseUp]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.overflow = 'hidden'; // 確保父容器不會滾動
        }
    }, []);

    return (
        <>
        <h1 className='swipe-title'>為您推薦</h1>
        <div
            ref={containerRef}
            className={`swipe-container ${className || ''}`}
            style={{ ...style, touchAction: 'none' }} // 禁止觸控事件的默認行為
        >
            <div
                ref={trackRef}
                className="swipe-track"
                style={{
                    // transform: `translateX(${currentIndex * -(itemWidth + 15)}px)`,
                    paddingLeft: `${(containerWidth - itemWidth) / 2}px`,
                }}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove} // 使用防止滾動的觸控滑動事件
                onTouchEnd={handleEnd}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleEnd}
            >
                {children.map((child, index) => (
                <div
                    key={index}
                    className="slide-item"
                    style={{
                        width: `${itemWidth}px`,
                        height: `${itemWidth * 0.6}px`, // 維持 3:2 比例
                    }}
                >
                    {child}
                </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Swipeable;
