export const transformMeetingData = meeting => {
  const startTime = new Date(meeting.startTime);
  const endTime = new Date(meeting.endTime);

  // Calculate duration in hours
  const durationMs = endTime - startTime;
  const durationHours = (durationMs / (1000 * 60 * 60)).toFixed(2);

  return {
    id: meeting.id,
    date: startTime.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    }),
    beginTime: startTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }),
    endTime: endTime.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }),
    duration: `${durationHours} hour${durationHours > 1 ? 's' : ''}`,
    status: meeting.status,
    available: meeting.status === 'Available',
    rawData: meeting, // Keep original data for reference
  };
};
