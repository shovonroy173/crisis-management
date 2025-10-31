const getStatusColor = status => {
  switch (status) {
    case 'In-progress':
      return 'bg-blue-500';
    case 'Completed':
      return 'bg-green-500';
    case 'Pending':
      return 'bg-yellow-500';
    default:
      return 'bg-gray-500';
  }
};
export default getStatusColor;
