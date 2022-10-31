import React, { useEffect, useState } from 'react';
import './App.css';
import { GeneratorControls } from './GeneratorControls';
import { CheckboxGenerator } from './CheckboxGenerator';
import { CheckboxOutput } from './CheckboxOutput';

export const App = () => {
  const [width, setWidth] = useState(4);
  const [height, setHeight] = useState(4);
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    if (width && height && !isNaN(width) && !isNaN(height)) {
      setGrid([...Array(parseInt(height))].map(() => [...Array(parseInt(width))].map(() => false)));
    }
    document.title = `${width}:${height}`;
  }, [width, height]);

  return (
    <div className="app">
      <GeneratorControls height={height} width={width} setHeight={setHeight} setWidth={setWidth} />
      <CheckboxGenerator grid={grid} setGrid={setGrid} />
      <CheckboxOutput grid={grid}/>
    </div>
  )
}
