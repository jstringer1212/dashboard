// src/utils/dateUtils.js
import { startOfToday, startOfYesterday, startOfWeek, startOfMonth, startOfYear, isWithinInterval, endOfYesterday, endOfWeek, endOfMonth, endOfYear } from 'date-fns';

export const isToday = (date, today) => isWithinInterval(date, { start: startOfToday(), end: today });
export const isYesterday = (date, today) => isWithinInterval(date, { start: startOfYesterday(), end: endOfYesterday() });
export const isThisWeek = (date, today) => isWithinInterval(date, { start: startOfWeek(today), end: endOfWeek(today) });
export const isLastWeek = (date, today) => {
  const lastWeekStart = startOfWeek(new Date(today.setDate(today.getDate() - 7)));
  return isWithinInterval(date, { start: lastWeekStart, end: endOfWeek(lastWeekStart) });
};
export const isThisMonth = (date, today) => isWithinInterval(date, { start: startOfMonth(today), end: endOfMonth(today) });
export const isLastMonth = (date, today) => {
  const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
  return isWithinInterval(date, { start: startOfMonth(lastMonthStart), end: endOfMonth(lastMonthStart) });
};
export const isThisYear = (date, today) => isWithinInterval(date, { start: startOfYear(today), end: endOfYear(today) });
