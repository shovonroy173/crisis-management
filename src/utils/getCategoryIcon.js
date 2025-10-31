// // import {
// //   AlertTriangle,
// //   Users,
// //   HeartPulse,
// //   Baby,
// //   Utensils,
// //   Heart,
// //   Shirt,
// //   Tag,
// // } from 'lucide-react-native'; // Example icons

// // export const getCategoryIcon = (category, size = 16, color = '#222') => {
// //   switch (category) {
// //     case 'Urgent':
// //       return <AlertTriangle color={color} size={size} />;
// //     case 'Family':
// //       return <Users color={color} size={size} />;
// //     case 'Trauma':
// //       return <HeartPulse color={color} size={size} />;
// //     case 'Child':
// //       return <Baby color={color} size={size} />;
// //     case 'Food':
// //       return <Utensils color={color} size={size} />;
// //     case 'Health':
// //       return <Heart color={color} size={size} />;
// //     case 'Clothing':
// //       return <Shirt color={color} size={size} />;
// //     default:
// //       return <Tag color={color} size={size} />;
// //   }
// // };

// import {
//   AlertTriangle,
//   Users,
//   HeartPulse,
//   Baby,
//   Utensils,
//   Heart,
//   Shirt,
//   Tag,
//   Home,
//   Book,
//   Briefcase,
// } from 'lucide-react-native'; // Example icons

// export const getCategoryIcon = (category, size = 16, color = '#222') => {
//   switch (category) {
//     case 'Urgent':
//       return <AlertTriangle color={color} size={size} />;
//     case 'Family':
//       return <Users color={color} size={size} />;
//     case 'Trauma':
//       return <HeartPulse color={color} size={size} />;
//     case 'Child':
//       return <Baby color={color} size={size} />;
//     case 'Food':
//       return <Utensils color={color} size={size} />;
//     case 'Health':
//       return <Heart color={color} size={size} />;
//     case 'Clothing':
//       return <Shirt color={color} size={size} />;
//     case 'Housing':
//       return <Home color={color} size={size} />;
//     case 'Education':
//       return <Book color={color} size={size} />;
//     case 'Employment':
//       return <Briefcase color={color} size={size} />;
//     default:
//       return <Tag color={color} size={size} />;
//   }
// };

import {
  AlertTriangle,
  Users,
  HeartPulse,
  Baby,
  Utensils,
  Heart,
  Shirt,
  Tag,
  Home,
  Book,
  Briefcase,
  Loader, // For In Progress
  Clock, // For Pending
  PlayCircle, // For Ongoing
  CheckCircle2, // For Complete
} from 'lucide-react-native';

export const getCategoryIcon = (category, size = 16, color = '#222') => {
  switch (category) {
    case 'Urgent':
      return <AlertTriangle color={color} size={size} />;
    case 'Family':
      return <Users color={color} size={size} />;
    case 'Trauma':
      return <HeartPulse color={color} size={size} />;
    case 'Child':
      return <Baby color={color} size={size} />;
    case 'Food':
      return <Utensils color={color} size={size} />;
    case 'Health':
      return <Heart color={color} size={size} />;
    case 'Clothing':
      return <Shirt color={color} size={size} />;
    case 'Housing':
      return <Home color={color} size={size} />;
    case 'Education':
      return <Book color={color} size={size} />;
    case 'Employment':
      return <Briefcase color={color} size={size} />;
    // Status categories with more meaningful icons
    case 'Ongoing':
      return <PlayCircle color="#3B82F6" size={size} />; // Blue
    case 'Pending':
      return <Clock color="#F59E0B" size={size} />; // Amber
    case 'In Progress':
      return <Loader color="#10B981" size={size} />; // Green
    case 'Complete':
      return <CheckCircle2 color="#059669" size={size} />; // Emerald
    default:
      return <Tag color={color} size={size} />;
  }
};
