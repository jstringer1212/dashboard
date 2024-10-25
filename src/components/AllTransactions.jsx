import React, { useState } from 'react';
import { Paper, Typography, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { mockTransactions } from '../data/mockData'; // Import transactions data
import { getFilteredTransactions } from '../utils/transactionFilters'; // Import helper function for filtering

function AllTransactions() {
  const [filter, setFilter] = useState('all'); // Default filter is 'all'

  // Handle filter change
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Get filtered transactions based on the selected filter
  const filteredTransactions = getFilteredTransactions(mockTransactions, filter);

  return (
    <div style={{
        backgroundColor: '#bdf0c0',
        padding: '16px',
        marginLeft: '25%',
        marginRight: 'auto',
        border: '1px solid black', 
        width: '600%',
        maxWidth: '1200px',
    }}>
        <Paper style={{ padding: '16px', backgroundColor: '#f5f5f5' }}>
      <Typography variant="h4" gutterBottom>
        All Transactions
      </Typography>

      {/* Dropdown for filtering */}
      <FormControl fullWidth variant="outlined" style={{ marginBottom: '16px' }}>
        <InputLabel>Filter</InputLabel>
        <Select value={filter} onChange={handleFilterChange} label="Filter">
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="today">Today</MenuItem>
          <MenuItem value="yesterday">Yesterday</MenuItem>
          <MenuItem value="thisWeek">This Week</MenuItem>
          <MenuItem value="lastWeek">Last Week</MenuItem>
          <MenuItem value="thisMonth">This Month</MenuItem>
          <MenuItem value="lastMonth">Last Month</MenuItem>
          <MenuItem value="thisYear">This Year</MenuItem>
        </Select>
      </FormControl>

      {/* Display filtered transactions */}
      <ul >
        {filteredTransactions.map(transaction => (
          <li key={transaction.txId} style={{ marginBottom: '8px' }}>
            <Typography variant="body1">
              <strong>User:</strong> {transaction.user} | <strong>Date:</strong> {transaction.date} | <strong>Cost:</strong> ${transaction.cost}
            </Typography>
          </li>
        ))}
      </ul>
    </Paper>
    </div>
  );
}

export default AllTransactions;
