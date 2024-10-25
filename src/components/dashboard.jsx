import React from 'react';
import { Grid2, Paper, Typography } from '@mui/material';
import Traffic from './traffic';
import Transactions from './transactions'; 
import Sales from './sales';

function Dashboard() {
  const boxStyle = {
    padding: '16px',
    textAlign: 'center',
    color: '#eee',
    backgroundColor: 'lightgreen',
    border: '2px solid black',
    minHeight: '150px',
  };

  const salesBoxStyle = { ...boxStyle, backgroundColor: '#3f51b5' }; // Blue
  const trafficBoxStyle = { ...boxStyle, backgroundColor: '#4caf50' }; // Green
  const transactionBoxStyle = { ...boxStyle, backgroundColor: '#ff0019' }; // Red

  const dashboardStyle = {
    backgroundColor: '#bdf0c0',
    padding: '16px',
    marginLeft: '25%',
    marginRight: 'auto',
    border: '1px solid black', 
    width: '700%',
    maxWidth: '1200px',
  };

  return (
    <div style={dashboardStyle}>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid2 container spacing={2} justifyContent="left" alignItems="left">
        <Grid2 item xs={12} sm={4} display="flex" justifyContent="left">
          <Paper style={salesBoxStyle}>
            <Typography variant="h5">Traffic</Typography>
              <Sales />
          </Paper> 
        </Grid2>
        
        <Grid2 item xs={12} sm={4} display="flex" justifyContent="left">
          <Paper style={trafficBoxStyle}>
            <Typography variant="h5">Traffic</Typography>
            <Traffic />
          </Paper>
        </Grid2>
      </Grid2>
      <Grid2 container spacing={2} justifyContent={"right"} alignItems={"center"}>
        <Paper style={transactionBoxStyle}>
          <Grid2 item xs={12} sm={4} display="flex" justifyContent="center">
            <Transactions /> 
          </Grid2>
        </Paper>
        </Grid2>
    </div>
  );
}

export default Dashboard;
