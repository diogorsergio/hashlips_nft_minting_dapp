export { default as leadZeros } from './leadZeros';
export { default as calculateTimeDifference } from './calculateTimeDifference';

export const isInRange = (startDate, targetDate) => new Date().getTime() > startDate.getTime()
  && new Date().getTime() < targetDate.getTime();

export const delay = 30 * 60 * 1000;

export const delayedDate = (date) => new Date(date.getTime() + delay);
