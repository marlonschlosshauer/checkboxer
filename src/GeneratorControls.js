import React from 'react';
import './GeneratorControls.css';

export const GeneratorControls = ({ width, height, setWidth, setHeight }) => (
  <div className="generator-controls">
    <input name="width" type="number" value={width} onChange={e => setWidth(e?.target?.value)} />
    <input name="height" type="number" value={height} onChange={e => setHeight(e?.target?.value)} />
  </div>
)
