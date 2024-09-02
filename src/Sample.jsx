import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';

const Degrees = [
  { degree: 'BE' },
  { degree: 'ME' },
  { degree: 'Bsc' },
  { degree: 'Msc' },
  { degree: 'Mba' }
];

export default function BasicSelect() {
  const [selectedDegree, setSelectedDegree] = useState('');

  const handleCheck = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedDegree(value);
    }
  };

  const handleClick = () => {
    console.log(selectedDegree);
  };

  return (
    <Box sx={{ width: 500 }}>
      <FormControl fullWidth>
        <div className="check">
          {Degrees.map((degree) => (
            <div key={degree.degree}>
              <Checkbox
                value={degree.degree}
                onChange={handleCheck}
              />
              {degree.degree}
            </div>
          ))}
          <br />
          <br />
        </div>
        <button onClick={handleClick}>CLICK</button>
      </FormControl>
    </Box>
  );
}
