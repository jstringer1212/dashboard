// src/components/Transactions.jsx
import React from 'react';
import { Paper, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { mockTransactions } from '../data/mockData'; // Import transactions data

function Transactions() {
  const navigate = useNavigate();

  // Sort transactions by date and get the most recent four
  const recentTransactions = mockTransactions
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 4);

  const handleViewAllTransactions = () => {
    navigate('/all-transactions'); // Navigate to the AllTransactions page
  };

  return (
    <Paper style={{ padding: '16px', backgroundColor: '#ed7782' }}>
      <Typography variant="h5">Transactions</Typography>
      <ul style={{ textAlign: 'left', margin: 0, padding: 0 }}>
        {recentTransactions.map(transaction => (
          <li key={transaction.txId}>
            <strong>User:</strong> {transaction.user} | <strong>Date:</strong> {transaction.date} | <strong>Cost:</strong> ${transaction.cost}
          </li>
        ))}
      </ul>
      <Button variant="contained" color="primary" onClick={handleViewAllTransactions}>
        View All Transactions
      </Button>
    </Paper>
  );
}

export default Transactions;
