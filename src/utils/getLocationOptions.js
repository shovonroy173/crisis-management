export const getLocationOptions = (data) => {
  if (!data || !Array.isArray(data)) return [];
  
  const locationMap = new Map();
  
  data.forEach(item => {
    if (item.location && typeof item.location === 'string') {
      const location = item.location.trim();
      if (location && !locationMap.has(location)) {
        locationMap.set(location, {
          label: location,
          value: location.toLowerCase().replace(/\s+/g, '_')
        });
      }
    }
  });
  
  // Convert to array and add "All" option
  const locationOptions = Array.from(locationMap.values());
  locationOptions.unshift({ label: 'All Locations', value: 'all' });
  
  return locationOptions;
};