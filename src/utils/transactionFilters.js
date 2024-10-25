// src/utils/transactionFilters.js
import { isToday, isYesterday, isThisWeek, isLastWeek, isThisMonth, isLastMonth, isThisYear } from './dateUtils'; // Import date helper functions

export const getFilteredTransactions = (transactions, filter) => {
  const today = new Date();

  switch (filter) {
    case 'today':
      return transactions.filter(txn => isToday(new Date(txn.date), today));
    case 'yesterday':
      return transactions.filter(txn => isYesterday(new Date(txn.date), today));
    case 'thisWeek':
      return transactions.filter(txn => isThisWeek(new Date(txn.date), today));
    case 'lastWeek':
      return transactions.filter(txn => isLastWeek(new Date(txn.date), today));
    case 'thisMonth':
      return transactions.filter(txn => isThisMonth(new Date(txn.date), today));
    case 'lastMonth':
      return transactions.filter(txn => isLastMonth(new Date(txn.date), today));
    case 'thisYear':
      return transactions.filter(txn => isThisYear(new Date(txn.date), today));
    default:
      return transactions; // 'all' filter returns all transactions
  }
};
