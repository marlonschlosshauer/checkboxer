import React from 'react';
import './CheckboxOutput.css';

export const CheckboxOutput = ({ grid }) => (
  <div className="checkbox-output">
    <textarea
      className="output"
      value={JSON.stringify(grid).replaceAll("],[", "]\n[").replaceAll(",", " ")} />
  </div>
)
