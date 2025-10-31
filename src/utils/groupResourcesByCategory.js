import { getCategoryIcon } from './getCategoryIcon';

// Function to convert API data into category-wise grouped structure
export const groupResourcesByCategory = apiData => {
  if (!apiData || !Array.isArray(apiData)) {
    return [];
  }

  // Group resources by category
  const categoryGroups = {};

  apiData.forEach(resource => {
    const categoryName = resource.category?.name || 'Uncategorized';
    const categoryId = resource.category?._id || categoryName;

    if (!categoryGroups[categoryId]) {
      categoryGroups[categoryId] = {
        id: categoryId,
        title: categoryName,
        subtitle: getSubtitleByCategory(categoryName),
        category: categoryName,
        iconColor: getColorByCategory(categoryName).iconColor,
        backgroundColor: getColorByCategory(categoryName).backgroundColor,
        allData: [],
      };
    }

    // Transform individual resource
    const transformedResource = {
      id: resource.id,
      name: resource.title,
      location: resource.location,
      hours: formatOperatingHours(resource.operatingHours),
      icon: getCategoryIcon(categoryName),
      iconColor: getColorByCategory(categoryName).iconColor,
      iconBackground: getColorByCategory(categoryName).backgroundColor,
      bookmarked: resource.isBookmarked || false,
      about: {
        description: resource.description,
      },
      contact: {
        address: {
          street: resource.contactInfo?.address || resource.location,
          city: resource.location,
        },
        phone: {
          number: resource.contactInfo?.phoneNumber || 'Not available',
          label: 'main line',
        },
        email: resource.contactInfo?.emailAddress || null,
      },
      services: transformServices(resource.servicesAvailable),
      // Keep original data if needed
      originalData: resource,
    };

    categoryGroups[categoryId].allData.push(transformedResource);
  });

  // Convert to array and add sequential IDs
  return Object.values(categoryGroups).map((group, index) => ({
    ...group,
    displayId: index + 1, // Sequential ID for display
  }));
};

// Helper functions
const formatOperatingHours = operatingHours => {
  if (!operatingHours || !Array.isArray(operatingHours)) {
    return 'Check operating hours';
  }

  // Find the first day that has operating hours
  const firstDayWithHours = operatingHours.find(
    day =>
      day.open && day.close && day.open !== 'Closed' && day.close !== 'Closed',
  );

  if (firstDayWithHours) {
    return `Mon-Fri, ${firstDayWithHours.open}-${firstDayWithHours.close}`;
  }

  return 'Check operating hours';
};

// const getIconByCategory = category => {
//   const iconMap = {
//     Health: 'Hospital',
//     Food: 'Store',
//     Clothing: 'Shirt',
//     Housing: 'Home',
//     Education: 'Book',
//     Employment: 'Briefcase',
//     // Add more categories as needed
//   };

//   return iconMap[category] || 'HelpCircle';
// };

const getColorByCategory = category => {
  const colorMap = {
    Health: { iconColor: '#EC4899', backgroundColor: '#FCE7F3' },
    Food: { iconColor: '#10B981', backgroundColor: '#D1FAE5' },
    Clothing: { iconColor: '#F59E0B', backgroundColor: '#FEF3C7' },
    Housing: { iconColor: '#3B82F6', backgroundColor: '#DBEAFE' },
    Education: { iconColor: '#8B5CF6', backgroundColor: '#EDE9FE' },
    Employment: { iconColor: '#EF4444', backgroundColor: '#FEE2E2' },
  };

  return (
    colorMap[category] || { iconColor: '#6B7280', backgroundColor: '#F3F4F6' }
  );
};

const getSubtitleByCategory = category => {
  const subtitleMap = {
    Health: 'Medical Resources',
    Food: 'Nutrition & Recipes',
    Clothing: 'Fashion & Style',
    Housing: 'Shelter & Accommodation',
    Education: 'Learning & Development',
    Employment: 'Jobs & Career',
  };

  return subtitleMap[category] || 'Resources & Services';
};

const transformServices = servicesAvailable => {
  if (!servicesAvailable || !Array.isArray(servicesAvailable)) {
    return [
      {
        id: 1,
        name: 'Services information not available',
        available: false,
      },
    ];
  }

  return servicesAvailable.map((service, index) => ({
    id: index + 1,
    name: service,
    available: true,
  }));
};
