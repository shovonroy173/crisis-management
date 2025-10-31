import moment from 'moment';

export const convertDate = (isoString) => {
  return moment(isoString).format('D MMM, YYYY');
};

// Usage
// console.log(formatDate('1999-02-10T00:00:00.000Z')); // "10 Feb, 1999"
// console.log(formatDate('2025-10-02T00:00:00.000Z')); // "2 Oct, 2025"