import React from 'react';
import './CheckboxGenerator.css';

export const CheckboxGenerator = ({ grid, setGrid }) => {
  const toggleBox = (x, y) => {
    grid[y][x] = !grid[y][x];
    setGrid(JSON.parse(JSON.stringify(grid)));
  }
  return (
    <div className="checkbox-generator">
      <div className="checkbox-column">
        {
          grid.map((row, y) =>
            <div key={y} className="checkbox-row">
              {
                row.map((cell, x) => (
                  <input key={`${y}:${x}`} name={`${y}:${x}`} type="checkbox" value={cell} onChange={e => toggleBox(x, y, e.target.value)} />
                ))
              }
            </div>
          )
        }
      </div>
    </div>
  )
}
