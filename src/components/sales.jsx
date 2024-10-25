// src/components/Sales.jsx
import React, { useState } from 'react';
import { Paper, Typography, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { mockTransactions } from '../data/mockData'; // Import transactions data
import { format, isThisWeek, isThisMonth, isSameDay, subWeeks, subMonths } from 'date-fns';

function Sales() {
  const [filter, setFilter] = useState('all'); // Default filter is 'all'

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Function to filter transactions based on selected filter
  const filterTransactions = () => {
    const today = new Date();

    switch (filter) {
      case 'today':
        return mockTransactions.filter(transaction =>
          isSameDay(new Date(transaction.date), today)
        );
      case 'currentWeek':
        return mockTransactions.filter(transaction =>
          isThisWeek(new Date(transaction.date))
        );
      case 'previousWeek':
        return mockTransactions.filter(transaction =>
          new Date(transaction.date) >= subWeeks(today, 2) &&
          new Date(transaction.date) < subWeeks(today, 1)
        );
      case 'currentMonth':
        return mockTransactions.filter(transaction =>
          isThisMonth(new Date(transaction.date))
        );
      case 'previousMonth':
        return mockTransactions.filter(transaction =>
          new Date(transaction.date) >= subMonths(today, 2) &&
          new Date(transaction.date) < subMonths(today, 1)
        );
      case 'all':
      default:
        return mockTransactions;
    }
  };

  // Calculate total based on filtered transactions
  const totalSales = filterTransactions().reduce(
    (acc, transaction) => acc + parseFloat(transaction.cost),
    0
  );

  return (
    <Paper style={{ padding: '16px', backgroundColor: 'lightblue' }}>
      <Typography variant="h5" gutterBottom>
        Sales
      </Typography>
      <FormControl fullWidth variant="outlined" style={{ marginBottom: '16px' }}>
        <InputLabel>Filter</InputLabel>
        <Select value={filter} onChange={handleFilterChange} label="Filter">
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="today">Today</MenuItem>
          <MenuItem value="currentWeek">Current Week</MenuItem>
          <MenuItem value="previousWeek">Previous Week</MenuItem>
          <MenuItem value="currentMonth">Current Month</MenuItem>
          <MenuItem value="previousMonth">Previous Month</MenuItem>
        </Select>
      </FormControl>
      <Typography variant="h6">
        Total Sales: ${totalSales.toFixed(2)}
      </Typography>
    </Paper>
  );
}

export default Sales;
