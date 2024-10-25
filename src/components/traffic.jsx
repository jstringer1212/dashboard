// src/components/Traffic.jsx
import React from 'react';
import { Paper, Typography } from '@mui/material';

function Traffic() {
    
  const trafficData = [
    { id: 1, source: "Google", visits: 150 },
    { id: 2, source: "Facebook", visits: 75 },
    { id: 3, source: "Twitter", visits: 50 },
  ];

  return (
    <Paper style={{ padding: '16px', marginTop: '16px', backgroundColor: 'lightgreen'}}>
      <Typography variant="h5">Recent Traffic</Typography>
      
        {trafficData.map((data) => (
          <li key={data.id}>
            {data.source}: {data.visits} visits
          </li>
        ))}
      
    </Paper>
  );
}

export default Traffic;
