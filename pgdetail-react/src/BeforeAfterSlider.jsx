import { useState } from 'react';
import before1 from './resources/cupralimpio.jpeg';
import after1 from './resources/cuprasucio.jpeg';

function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = (clientX, containerRect) => {
    const newPosition = ((clientX - containerRect.left) / containerRect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    updatePosition(e.clientX, rect);
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const rect = e.currentTarget.getBoundingClientRect();
    updatePosition(touch.clientX, rect);
  };

  const handleTouchStart = () => {
    setIsDragging(true);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <div 
      className="before-after-container"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="before-after-wrapper">
        <img 
          src={before1}
          alt="Before"
          className="before-after-image before"
        />
        <img 
          src={after1}
          alt="After"
          className="before-after-image after"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        />
        <div className="before-after-slider-handle" style={{ left: `${sliderPosition}%` }}>
          <div className="slider-line"></div>
          <div className="slider-arrow left-arrow">❮</div>
          <div className="slider-arrow right-arrow">❯</div>
        </div>
      </div>
      <p className="before-after-label">Desliza para ver la transformación</p>
    </div>
  );
}

export default BeforeAfterSlider;
