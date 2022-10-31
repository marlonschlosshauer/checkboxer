import React from 'react';
import './CheckboxOutput.css';

export const CheckboxOutput = ({ grid }) => (
  <div className="checkbox-output">
    <textarea
      className="output"
      value={JSON
        .stringify(grid)
        .replaceAll("],[", "]\n[")
        .replaceAll(",", " ")
        // I should probably just map over it but am too lazy
        .replaceAll("false", "0")
        .replaceAll("true", "1")
      } />
  </div>
)
