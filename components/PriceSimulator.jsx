'use client';
import { useState } from 'react';

export default function PriceSimulator() {
  const [type, setType] = useState('house');
  const [size, setSize] = useState(1500);

  const rate = type === 'house' ? 0.13 : 0.11;
  const price = (size * rate).toFixed(2);

  return (
    <div className="simulator-card glass-card">
      {/* Property Type */}
      <div className="prop-type-row">
        <span className="prop-type-label">Property Type</span>
        <span className="prop-type-value">
          {type === 'house' ? 'House' : 'Apartment'}
        </span>
      </div>
      <div className="prop-btns">
        <button
          className={`prop-btn${type === 'house' ? ' active' : ''}`}
          onClick={() => setType('house')}
        >
          House
        </button>
        <button
          className={`prop-btn${type === 'apartment' ? ' active' : ''}`}
          onClick={() => setType('apartment')}
        >
          Apartment
        </button>
      </div>

      {/* Size Slider */}
      <div className="slider-row">
        <span className="slider-label">Property Size (sq ft)</span>
        <span className="slider-value">{size.toLocaleString()} sq ft</span>
      </div>
      <input
        type="range"
        min={500}
        max={5000}
        step={100}
        value={size}
        onChange={(e) => setSize(Number(e.target.value))}
        className="price-slider"
        aria-label="Property size slider"
      />
      <div className="slider-range">
        <span>500</span>
        <span>5,000</span>
      </div>

      {/* Price Result */}
      <div className="price-result">
        <div>
          <p className="price-label">Estimated Investment</p>
          <p className="price-value">${price}</p>
        </div>
        <a href="/contact" className="btn btn-secondary">
          Book Now
        </a>
      </div>
    </div>
  );
}
