// export const getUniqueCategories = (data) => {
//   if (!data || !Array.isArray(data)) return [];

//   const uniqueCategories = data.reduce((acc, item) => {
//     if (item.category && item.category._id) {
//       const existingCategory = acc.find(cat => cat._id === item.category._id);
//       if (!existingCategory) {
//         acc.push(item.category);
//       }
//     }
//     return acc;
//   }, []);

//   return uniqueCategories;
// };

// export const getUniqueCategories = (data) => {
//   if (!data || !Array.isArray(data)) return [];

//   const categoryMap = new Map();

//   data.forEach(item => {
//     if (item.category && item.category._id && item.category.name) {
//       if (!categoryMap.has(item.category._id)) {
//         categoryMap.set(item.category._id, {
//           label: item.category.name,
//           value: item.category.name.toLowerCase()
//         });
//       }
//     }
//   });

//   return Array.from(categoryMap.values());
// };

// export const getUniqueCategories = (data) => {
//   if (!data || !Array.isArray(data)) return [];

//   const categoryMap = new Map();

//   data.forEach(item => {
//     if (item.category && item.category._id && item.category.name) {
//       if (!categoryMap.has(item.category._id)) {
//         categoryMap.set(item.category._id, {
//           label: item.category.name,
//           value: item.category.name.toLowerCase()
//         });
//       }
//     }
//   });

//   // Convert to array and add "All" option at the beginning
//   const categoryOptions = Array.from(categoryMap.values());
//   categoryOptions.unshift({ label: 'All', value: 'all' });

//   return categoryOptions;
// };

export const getUniqueCategories = categories => {
  if (!categories || !Array.isArray(categories)) return [];

  // Start with "All" option
  const options = [{ label: 'All', value: 'all' }];

  // Add each category as an option
  categories.forEach(category => {
    if (category && category.name) {
      options.push({
        label: category.name,
        value: category.name.toLowerCase(),
      });
    }
    else{
      options.push({
        label: category,
        value: category.toLowerCase(),
      });
    }
  });

  return options;
};
