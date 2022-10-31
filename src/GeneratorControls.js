import React from 'react';

export const GeneratorControls = ({ width, height, setWidth, setHeight }) => (
  <div className="generator-controls">
    <input name="width" type="number" value={width} onChange={e => setWidth(e?.target?.value)} />
    <input name="heihgt" type="number" value={height} onChange={e => setHeight(e?.target?.value)} />
  </div>
)
