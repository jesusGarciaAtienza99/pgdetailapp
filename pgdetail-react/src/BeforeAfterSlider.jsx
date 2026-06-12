import { useState } from 'react';

function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, newPosition)));
  };

  return (
    <div className="before-after-container" onMouseMove={handleMouseMove}>
      <div className="before-after-wrapper">
        <img 
          src="https://images.unsplash.com/photo-1599232386681-425f3dbfcab4?auto=format&fit=crop&w=1000&q=80"
          alt="Before"
          className="before-after-image before"
        />
        <div className="before-after-image-overlay" style={{ width: `${sliderPosition}%` }}>
          <img 
            src="https://images.unsplash.com/photo-1607860340706-869f7ddfb1a9?auto=format&fit=crop&w=1000&q=80"
            alt="After"
            className="before-after-image after"
          />
        </div>
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
