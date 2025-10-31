export const myCasesData = [
  {
    caseId: '101',
    caseTitle: 'Child Counseling',
    status: 'In-progress',
    category: 'Active',
    description: 'Individual therapy for anxiety disorders in teenagers',

    dates: {
      startDate: '25 Sep 2025',
      endDate: '25 Sep 2025',
    },

    treatmentPlan: {
      clientAge: '16-year-old',
      issues: 'anxiety-related challenges in school settings',
      approach: 'comprehensive behavioral therapy',
      sessions: 'weekly individual sessions',
      techniques: [
        'cognitive behavioral techniques',
        'social skills development',
      ],
      focusAreas: [
        'emotional regulation strategies',
        'communication skills enhancement',
        'gradual exposure therapy for classroom participation anxiety',
      ],
    },

    caseNotes: [
      {
        role: 'Clinician',
        date: '25 Sep 2025, 10:45am',
        note: 'Initial assessment completed. Client shows good rapport and willingness to engage. Identified primary concerns around social anxiety and academic performance.',
      },
      {
        role: 'Counselor',
        date: '28 Sep 2025, 10:45am',
        note: 'Follow-up scheduled with family. Discussed coping strategies and homework assignments. Client responded well to cognitive behavioral techniques',
      },
    ],

    clientInformation: {
      name: 'Sarah Johnson',
      age: '16 years old',
      dateOfBirth: 'March 15, 2009',
      gender: 'Female',
      phone: '+1 (555) 123-4567',
      email: 'sarah.j@gmail.com',
      emergencyContact: '+1 (555) 123-4567',
    },
  },

  {
    caseId: '102',
    caseTitle: 'Family Therapy',
    status: 'Pending',
    category: 'Pending',
    description: 'Family counseling for communication issues',

    dates: {
      startDate: '30 Sep 2025',
      endDate: '15 Dec 2025',
    },

    treatmentPlan: {
      clientAge: 'Family unit',
      issues: 'communication breakdowns and conflict resolution',
      approach: 'systemic family therapy',
      sessions: 'bi-weekly family sessions',
      techniques: [
        'structural family therapy',
        'communication skills training',
      ],
      focusAreas: [
        'improving family dynamics',
        'conflict resolution strategies',
        'establishing healthy boundaries',
      ],
    },

    caseNotes: [
      {
        role: 'Intake Coordinator',
        date: '29 Sep 2025, 2:30pm',
        note: 'Initial intake completed. Family of four seeking help with teenage behavioral issues and parent-child communication.',
      },
    ],

    clientInformation: {
      name: 'Martinez Family',
      age: 'Multiple clients',
      dateOfBirth: 'N/A',
      gender: 'Mixed',
      phone: '+1 (555) 987-6543',
      email: 'martinez.family@email.com',
      emergencyContact: '+1 (555) 987-6543',
    },
  },

  {
    caseId: '103',
    caseTitle: 'Adult Depression Treatment',
    status: 'Completed',
    category: 'Completed',
    description: 'Individual therapy for major depressive disorder',

    dates: {
      startDate: '15 Jul 2025',
      endDate: '20 Sep 2025',
    },

    treatmentPlan: {
      clientAge: '32-year-old',
      issues: 'major depressive disorder with work-related stress',
      approach: 'cognitive behavioral therapy and mindfulness',
      sessions: 'completed 12 weekly sessions',
      techniques: [
        'CBT for depression',
        'mindfulness-based stress reduction',
        'behavioral activation',
      ],
      focusAreas: [
        'mood regulation',
        'stress management',
        'work-life balance improvement',
      ],
    },

    caseNotes: [
      {
        role: 'Primary Therapist',
        date: '20 Sep 2025, 11:00am',
        note: 'Treatment successfully completed. Client demonstrated significant improvement in mood and coping strategies. Provided relapse prevention plan.',
      },
      {
        role: 'Primary Therapist',
        date: '15 Sep 2025, 11:00am',
        note: 'Session 11 - Client reports sustained improvement in mood and energy. Discussed termination and maintenance strategies.',
      },
    ],

    clientInformation: {
      name: 'Michael Chen',
      age: '32 years old',
      dateOfBirth: 'June 8, 1993',
      gender: 'Male',
      phone: '+1 (555) 456-7890',
      email: 'm.chen@workplace.com',
      emergencyContact: '+1 (555) 789-0123',
    },
  },

  {
    caseId: '104',
    caseTitle: 'Couples Therapy',
    status: 'In-progress',
    category: 'Active',
    description: 'Marriage counseling for relationship strengthening',

    dates: {
      startDate: '18 Sep 2025',
      endDate: '18 Dec 2025',
    },

    treatmentPlan: {
      clientAge: 'Adult couple',
      issues: 'communication difficulties and intimacy concerns',
      approach: 'emotionally focused therapy',
      sessions: 'weekly couples sessions',
      techniques: [
        'attachment-based interventions',
        'communication enhancement exercises',
      ],
      focusAreas: [
        'emotional connection',
        'conflict resolution',
        'intimacy rebuilding',
      ],
    },

    caseNotes: [
      {
        role: 'Couples Therapist',
        date: '25 Sep 2025, 6:00pm',
        note: 'Session 2 - Both partners engaged well. Identified attachment patterns and began exploring communication styles.',
      },
      {
        role: 'Couples Therapist',
        date: '18 Sep 2025, 6:00pm',
        note: 'Initial session completed. Couple motivated for change. Established therapy goals and expectations.',
      },
    ],

    clientInformation: {
      name: 'David & Lisa Thompson',
      age: '35 & 33 years old',
      dateOfBirth: 'Multiple',
      gender: 'Male & Female',
      phone: '+1 (555) 321-9876',
      email: 'thompson.couple@email.com',
      emergencyContact: '+1 (555) 321-9876',
    },
  },
];

export const availableCasesData = [
  {
    caseId: '101',
    caseTitle: 'Child Counseling',
    status: 'In-progress',
    category: 'Child',
    description: 'Individual therapy for anxiety disorders in teenagers',
    location: 'Main Office - Room 201',
    assigned: true,

    dates: {
      startDate: '25 Sep 2025',
      endDate: '25 Sep 2025',
    },

    treatmentPlan: {
      clientAge: '16-year-old',
      issues: 'anxiety-related challenges in school settings',
      approach: 'comprehensive behavioral therapy',
      sessions: 'weekly individual sessions',
      techniques: [
        'cognitive behavioral techniques',
        'social skills development',
      ],
      focusAreas: [
        'emotional regulation strategies',
        'communication skills enhancement',
        'gradual exposure therapy for classroom participation anxiety',
      ],
    },

    caseNotes: [
      {
        role: 'Clinician',
        date: '25 Sep 2025, 10:45am',
        note: 'Initial assessment completed. Client shows good rapport and willingness to engage. Identified primary concerns around social anxiety and academic performance.',
      },
      {
        role: 'Counselor',
        date: '28 Sep 2025, 10:45am',
        note: 'Follow-up scheduled with family. Discussed coping strategies and homework assignments. Client responded well to cognitive behavioral techniques',
      },
    ],

    clientInformation: {
      name: 'Sarah Johnson',
      age: '16 years old',
      dateOfBirth: 'March 15, 2009',
      gender: 'Female',
      phone: '+1 (555) 123-4567',
      email: 'sarah.j@gmail.com',
      emergencyContact: '+1 (555) 123-4567',
    },
  },

  {
    caseId: '102',
    caseTitle: 'Family Therapy',
    status: 'Pending',
    category: 'Family',
    description: 'Family counseling for communication issues',
    location: 'West Branch - Conference Room A',
    assigned: false,

    dates: {
      startDate: '30 Sep 2025',
      endDate: '15 Dec 2025',
    },

    treatmentPlan: {
      clientAge: 'Family unit',
      issues: 'communication breakdowns and conflict resolution',
      approach: 'systemic family therapy',
      sessions: 'bi-weekly family sessions',
      techniques: [
        'structural family therapy',
        'communication skills training',
      ],
      focusAreas: [
        'improving family dynamics',
        'conflict resolution strategies',
        'establishing healthy boundaries',
      ],
    },

    caseNotes: [
      {
        role: 'Intake Coordinator',
        date: '29 Sep 2025, 2:30pm',
        note: 'Initial intake completed. Family of four seeking help with teenage behavioral issues and parent-child communication.',
      },
    ],

    clientInformation: {
      name: 'Martinez Family',
      age: 'Multiple clients',
      dateOfBirth: 'N/A',
      gender: 'Mixed',
      phone: '+1 (555) 987-6543',
      email: 'martinez.family@email.com',
      emergencyContact: '+1 (555) 987-6543',
    },
  },

  {
    caseId: '103',
    caseTitle: 'Adult Depression Treatment',
    status: 'Urgent',
    category: 'Urgent',
    description: 'Individual therapy for major depressive disorder',
    location: 'Main Office - Room 105',
    assigned: true,

    dates: {
      startDate: '15 Jul 2025',
      endDate: '20 Sep 2025',
    },

    treatmentPlan: {
      clientAge: '32-year-old',
      issues: 'major depressive disorder with work-related stress',
      approach: 'cognitive behavioral therapy and mindfulness',
      sessions: 'completed 12 weekly sessions',
      techniques: [
        'CBT for depression',
        'mindfulness-based stress reduction',
        'behavioral activation',
      ],
      focusAreas: [
        'mood regulation',
        'stress management',
        'work-life balance improvement',
      ],
    },

    caseNotes: [
      {
        role: 'Primary Therapist',
        date: '20 Sep 2025, 11:00am',
        note: 'Treatment successfully completed. Client demonstrated significant improvement in mood and coping strategies. Provided relapse prevention plan.',
      },
      {
        role: 'Primary Therapist',
        date: '15 Sep 2025, 11:00am',
        note: 'Session 11 - Client reports sustained improvement in mood and energy. Discussed termination and maintenance strategies.',
      },
    ],

    clientInformation: {
      name: 'Michael Chen',
      age: '32 years old',
      dateOfBirth: 'June 8, 1993',
      gender: 'Male',
      phone: '+1 (555) 456-7890',
      email: 'm.chen@workplace.com',
      emergencyContact: '+1 (555) 789-0123',
    },
  },

  {
    caseId: '104',
    caseTitle: 'Couples Therapy',
    status: 'Trauma',
    category: 'Trauma',
    description: 'Marriage counseling for relationship strengthening',
    location: 'Downtown Center - Suite 302',
    assigned: true,

    dates: {
      startDate: '18 Sep 2025',
      endDate: '18 Dec 2025',
    },

    treatmentPlan: {
      clientAge: 'Adult couple',
      issues: 'communication difficulties and intimacy concerns',
      approach: 'emotionally focused therapy',
      sessions: 'weekly couples sessions',
      techniques: [
        'attachment-based interventions',
        'communication enhancement exercises',
      ],
      focusAreas: [
        'emotional connection',
        'conflict resolution',
        'intimacy rebuilding',
      ],
    },

    caseNotes: [
      {
        role: 'Couples Therapist',
        date: '25 Sep 2025, 6:00pm',
        note: 'Session 2 - Both partners engaged well. Identified attachment patterns and began exploring communication styles.',
      },
      {
        role: 'Couples Therapist',
        date: '18 Sep 2025, 6:00pm',
        note: 'Initial session completed. Couple motivated for change. Established therapy goals and expectations.',
      },
    ],

    clientInformation: {
      name: 'David & Lisa Thompson',
      age: '35 & 33 years old',
      dateOfBirth: 'Multiple',
      gender: 'Male & Female',
      phone: '+1 (555) 321-9876',
      email: 'thompson.couple@email.com',
      emergencyContact: '+1 (555) 321-9876',
    },
  },
];

export const upcomingMeetingsData = [
  {
    id: 1,
    doctorName: 'Dr. Sarah Johnson',
    date: 'Today',
    time: '2:30 PM - 3:00 PM',
    status: 'Booked',
    statusColor: 'green',
    joinButtonEnabled: true,
    joinButtonText: 'Join Zoom Meeting',
    cancelOption: 'Cancel',
    cancelButtonColor: 'light-pink',
  },
  {
    id: 2,
    doctorName: 'Prof. Michael Chen',
    date: 'Tomorrow',
    time: '10:00 - 10:30 AM',
    status: 'Scheduled',
    statusColor: 'orange',
    joinButtonEnabled: false,
    joinButtonText: 'Join Zoom Meeting',
    cancelOption: 'Cancel',
    cancelButtonColor: 'light-pink',
  },
  {
    id: 3,
    doctorName: 'Dr. Emily Ridriguez',
    date: 'Dec 15',
    time: '4:00 PM - 4:30 PM',
    status: 'Booked',
    statusColor: 'green',
    joinButtonEnabled: false,
    joinButtonText: 'Join Zoom Meeting',
    cancelOption: 'Cancel (< 30 mins)',
    cancelButtonColor: 'red-outline',
  },
  {
    id: 4,
    doctorName: 'Dr. Mark Thompson',
    date: 'Dec 16',
    time: '11:00 AM - 11:30 AM',
    status: 'Scheduled',
    statusColor: 'orange',
    joinButtonEnabled: false,
    joinButtonText: 'Join Zoom Meeting',
    cancelOption: 'Cancel',
    cancelButtonColor: 'light-pink',
  },
];

export const availableMeetingsData = [
  {
    id: 1,
    date: 'Sep 25',
    time: '9:00 AM - 9:30 AM',
    duration: '30 minutes',
    status: 'Free',
    statusColor: 'pink',
    available: true,
    buttonText: 'Book Slot',
    buttonColor: 'black',
  },
  {
    id: 2,
    date: 'Sep 25',
    time: '10:00 AM - 10:30 AM',
    duration: '30 minutes',
    status: 'Booked',
    statusColor: 'pink',
    available: false,
    buttonText: 'Book Slot',
    buttonColor: 'gray',
  },
  {
    id: 3,
    date: 'Sep 26',
    time: '9:00 AM - 9:30 AM',
    duration: '30 minutes',
    status: 'Free',
    statusColor: 'pink',
    available: true,
    buttonText: 'Book Slot',
    buttonColor: 'black',
  },
  {
    id: 4,
    date: 'Sep 26',
    time: '10:00 AM - 10:30 AM',
    duration: '30 minutes',
    status: 'Booked',
    statusColor: 'pink',
    available: false,
    buttonText: 'Book Slot',
    buttonColor: 'gray',
  },
  {
    id: 5,
    date: 'Sep 27',
    time: '9:00 AM - 9:30 AM',
    duration: '30 minutes',
    status: 'Free',
    statusColor: 'pink',
    available: true,
    buttonText: 'Book Slot',
    buttonColor: 'black',
  },
];

export const statusOptions = [
  { label: 'All ', value: 'all' },
  { label: 'Food', value: 'food' },
  { label: 'Health', value: 'health' },
  { label: 'Clothing', value: 'clothing' },
];

export const countryOptions = [
  { label: 'United States', value: 'us' },
  { label: 'Canada', value: 'ca' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Australia', value: 'au' },
  { label: 'India', value: 'in' },
  { label: 'Japan', value: 'jp' },
  { label: 'China', value: 'cn' },
  { label: 'Brazil', value: 'br' },
];

import { Store, Shirt, Hospital, ShoppingBag } from 'lucide-react-native';

// export const resourcesData = [
//   {
//     id: 1,
//     title: 'Food',
//     subtitle: 'Nutrition & Recipes',
//     category: 'Food',
//     iconColor: '#EC4899',
//     backgroundColor: '#FCE7F3',
//     allData: [
//       {
//         id: 1,
//         name: 'NYC Food Bank',
//         location: 'New York, NY',
//         hours: 'Mon-Fri, 9AM-5PM',
//         icon: Store,
//         iconColor: '#EC4899',
//         iconBackground: '#FCE7F3',
//         bookmarked: false,
//       },
//       {
//         id: 2,
//         name: 'LA Community Meals',
//         location: 'Los Angeles, CA',
//         hours: 'Daily, 10 AM-7PM',
//         icon: Store,
//         iconColor: '#EC4899',
//         iconBackground: '#FCE7F3',
//         bookmarked: true,
//       },
//     ],
//   },
//   {
//     id: 2,
//     title: 'Health',
//     subtitle: 'Medical Resources',
//     category: 'Health',
//     iconColor: '#EC4899',
//     backgroundColor: '#FCE7F3',
//     allData: [
//       {
//         id: 1,
//         name: 'Chicago Free Clinic',
//         location: 'Chicago, IL',
//         hours: 'Mon- Sat, 9AM-5PM',
//         type: null, // No special badge
//         icon: Hospital,
//         iconColor: '#EC4899',
//         iconBackground: '#FCE7F3',
//         bookmarked: false,
//       },
//       {
//         id: 2,
//         name: 'Boston Health Center',
//         location: 'Boston, MA',
//         hours: '24/7 Emergency',
//         type: null,
//         icon: Hospital,
//         iconColor: '#EC4899',
//         iconBackground: '#FCE7F3',
//         bookmarked: true,
//       },
//       {
//         id: 3,
//         name: 'Community Health Hub',
//         location: 'New York, NY',
//         hours: 'Mon- Fri, 9AM-5Pm',
//         type: 'Walk-in',
//         icon: Hospital,
//         iconColor: '#EC4899',
//         iconBackground: '#FCE7F3',
//         bookmarked: true,
//       },
//     ],
//   },
//   {
//     id: 3,
//     title: 'Clothing',
//     subtitle: 'Fashion & style',
//     category: 'Clothing',
//     iconColor: '#EC4899',
//     backgroundColor: '#FCE7F3',
//     allData: [
//       {
//         id: 1,
//         name: 'San Francisco Clothing Bank',
//         location: 'San Francisco, CA',
//         hours: 'Tue- Sun, 10AM-6PM',
//         type: null,
//         icon: Shirt,
//         iconColor: '#EC4899',
//         iconBackground: '#FCE7F3',
//         bookmarked: false,
//       },
//       {
//         id: 2,
//         name: 'Dallas Winter Wear Centere',
//         location: 'Dallas, TX',
//         hours: 'Mon-Fri, 9AM-4PM',
//         type: null,
//         icon: Shirt,
//         iconColor: '#EC4899',
//         iconBackground: '#FCE7F3',
//         bookmarked: true,
//       },
//       {
//         id: 3,
//         name: 'Community Health Hub',
//         location: 'New York, NY',
//         hours: 'Mon- Fri, 9AM-5Pm',
//         type: null,
//         icon: Shirt,
//         iconColor: '#EC4899',
//         iconBackground: '#FCE7F3',
//         bookmarked: true,
//       },
//     ],
//   },
// ];

export const resourcesData = [
  {
    id: 1,
    title: 'Food',
    subtitle: 'Nutrition & Recipes',
    category: 'Food',
    iconColor: '#EC4899',
    backgroundColor: '#FCE7F3',
    allData: [
      {
        id: 1,
        name: 'NYC Food Bank',
        location: 'New York, NY',
        hours: 'Mon-Fri, 9AM-5PM',
        icon: Store,
        iconColor: '#EC4899',
        iconBackground: '#FCE7F3',
        bookmarked: false,
        about: {
          description:
            'Provides nutritious food packages and fresh produce for families in need throughout New York City.',
        },
        contact: {
          address: {
            street: '123 Broadway',
            city: 'New York, NY 10001',
          },
          phone: {
            number: '(212) 555-0100',
            label: 'main line',
          },
        },
        services: [
          {
            id: 1,
            name: 'Fresh produce and vegetables',
            available: true,
          },
          {
            id: 2,
            name: 'Canned goods and dry foods',
            available: true,
          },
          {
            id: 3,
            name: 'Baby food and formula',
            available: true,
          },
          {
            id: 4,
            name: 'Weekly meal planning assistance',
            available: true,
          },
        ],
      },
      {
        id: 2,
        name: 'LA Community Meals',
        location: 'Los Angeles, CA',
        hours: 'Daily, 10 AM-7PM',
        icon: Store,
        iconColor: '#EC4899',
        iconBackground: '#FCE7F3',
        bookmarked: true,
        about: {
          description:
            'Serves hot meals daily and provides food assistance programs for individuals and families experiencing food insecurity.',
        },
        contact: {
          address: {
            street: '456 Main Street',
            city: 'Los Angeles, CA 90012',
          },
          phone: {
            number: '(213) 555-0200',
            label: 'main line',
          },
        },
        services: [
          {
            id: 1,
            name: 'Hot meals served daily',
            available: true,
          },
          {
            id: 2,
            name: 'Take-home meal packages',
            available: true,
          },
          {
            id: 3,
            name: 'Nutrition counseling',
            available: true,
          },
          {
            id: 4,
            name: 'Cooking classes',
            available: true,
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Health',
    subtitle: 'Medical Resources',
    category: 'Health',
    iconColor: '#EC4899',
    backgroundColor: '#FCE7F3',
    allData: [
      {
        id: 1,
        name: 'Chicago Free Clinic',
        location: 'Chicago, IL',
        hours: 'Mon- Sat, 9AM-5PM',
        type: null,
        icon: Hospital,
        iconColor: '#EC4899',
        iconBackground: '#FCE7F3',
        bookmarked: false,
        about: {
          description:
            'Offers free medical care, preventive services, and health education to uninsured and underinsured individuals.',
        },
        contact: {
          address: {
            street: '789 Michigan Ave',
            city: 'Chicago, IL 60611',
          },
          phone: {
            number: '(312) 555-0300',
            label: 'main line',
          },
        },
        services: [
          {
            id: 1,
            name: 'General medical consultations',
            available: true,
          },
          {
            id: 2,
            name: 'Preventive care and screenings',
            available: true,
          },
          {
            id: 3,
            name: 'Prescription assistance',
            available: true,
          },
          {
            id: 4,
            name: 'Health education programs',
            available: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Boston Health Center',
        location: 'Boston, MA',
        hours: '24/7 Emergency',
        type: null,
        icon: Hospital,
        iconColor: '#EC4899',
        iconBackground: '#FCE7F3',
        bookmarked: true,
        about: {
          description:
            'Provides 24/7 emergency medical services and comprehensive healthcare for the Boston community.',
        },
        contact: {
          address: {
            street: '321 Commonwealth Ave',
            city: 'Boston, MA 02215',
          },
          phone: {
            number: '(617) 555-0400',
            label: 'emergency line',
          },
        },
        services: [
          {
            id: 1,
            name: '24/7 emergency care',
            available: true,
          },
          {
            id: 2,
            name: 'Urgent care services',
            available: true,
          },
          {
            id: 3,
            name: 'Primary care appointments',
            available: true,
          },
          {
            id: 4,
            name: 'Mental health services',
            available: true,
          },
        ],
      },
      {
        id: 3,
        name: 'Community Health Hub',
        location: 'New York, NY',
        hours: 'Mon- Fri, 9AM-5Pm',
        type: 'Walk-in',
        icon: Hospital,
        iconColor: '#EC4899',
        iconBackground: '#FCE7F3',
        bookmarked: true,
        about: {
          description:
            'Walk-in health center offering accessible medical care and wellness programs for the community.',
        },
        contact: {
          address: {
            street: '555 Park Avenue',
            city: 'New York, NY 10022',
          },
          phone: {
            number: '(212) 555-0500',
            label: 'main line',
          },
        },
        services: [
          {
            id: 1,
            name: 'Walk-in consultations',
            available: true,
          },
          {
            id: 2,
            name: 'Vaccinations and immunizations',
            available: true,
          },
          {
            id: 3,
            name: 'Wellness checks',
            available: true,
          },
          {
            id: 4,
            name: 'Health screenings',
            available: true,
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Clothing',
    subtitle: 'Fashion & style',
    category: 'Clothing',
    iconColor: '#EC4899',
    backgroundColor: '#FCE7F3',
    allData: [
      {
        id: 1,
        name: 'San Francisco Clothing Bank',
        location: 'San Francisco, CA',
        hours: 'Tue- Sun, 10AM-6PM',
        type: null,
        icon: Shirt,
        iconColor: '#EC4899',
        iconBackground: '#FCE7F3',
        bookmarked: false,
        about: {
          description:
            'Distributes free clothing and accessories to individuals and families in need throughout the Bay Area.',
        },
        contact: {
          address: {
            street: '888 Market Street',
            city: 'San Francisco, CA 94102',
          },
          phone: {
            number: '(415) 555-0600',
            label: 'main line',
          },
        },
        services: [
          {
            id: 1,
            name: 'Adult clothing all sizes',
            available: true,
          },
          {
            id: 2,
            name: "Children's clothing",
            available: true,
          },
          {
            id: 3,
            name: 'Shoes and accessories',
            available: true,
          },
          {
            id: 4,
            name: 'Professional attire for job seekers',
            available: true,
          },
        ],
      },
      {
        id: 2,
        name: 'Dallas Winter Wear Centere',
        location: 'Dallas, TX',
        hours: 'Mon-Fri, 9AM-4PM',
        type: null,
        icon: Shirt,
        iconColor: '#EC4899',
        iconBackground: '#FCE7F3',
        bookmarked: true,
        about: {
          description:
            'Provides free winter clothing such as jackets, blankets, and coats for families in need during the winter season.',
        },
        contact: {
          address: {
            street: '1234 Main Street',
            city: 'Dallas, TX 75201',
          },
          phone: {
            number: '(214) 555-0123',
            label: 'main line',
          },
        },
        services: [
          {
            id: 1,
            name: 'Winter jackets and coats',
            available: true,
          },
          {
            id: 2,
            name: 'Blankets and bedding',
            available: true,
          },
          {
            id: 3,
            name: "Children's winter clothing",
            available: true,
          },
          {
            id: 4,
            name: 'Hats, gloves, and scarves',
            available: true,
          },
        ],
      },
      {
        id: 3,
        name: 'Community Health Hub',
        location: 'New York, NY',
        hours: 'Mon- Fri, 9AM-5Pm',
        type: null,
        icon: Shirt,
        iconColor: '#EC4899',
        iconBackground: '#FCE7F3',
        bookmarked: true,
        about: {
          description:
            'Community center offering clothing donations and essential items for individuals and families.',
        },
        contact: {
          address: {
            street: '999 Broadway',
            city: 'New York, NY 10010',
          },
          phone: {
            number: '(212) 555-0700',
            label: 'main line',
          },
        },
        services: [
          {
            id: 1,
            name: 'Seasonal clothing donations',
            available: true,
          },
          {
            id: 2,
            name: 'School uniforms and supplies',
            available: true,
          },
          {
            id: 3,
            name: 'Footwear all sizes',
            available: true,
          },
          {
            id: 4,
            name: 'Personal care items',
            available: true,
          },
        ],
      },
    ],
  },
];

export const foodResourcesData = [
  {
    id: 1,
    name: 'NYC Food Bank',
    location: 'New York, NY',
    hours: 'Mon-Fri, 9AM-5PM',
    icon: ShoppingBag,
    iconColor: '#EC4899',
    iconBackground: '#FCE7F3',
    bookmarked: true,
    about: {
      description:
        'Provides nutritious food packages and fresh produce for families in need throughout New York City.',
    },
    contact: {
      address: {
        street: '123 Broadway',
        city: 'New York, NY 10001',
      },
      phone: {
        number: '(212) 555-0100',
        label: 'main line',
      },
    },
    services: [
      {
        id: 1,
        name: 'Fresh produce and vegetables',
        available: true,
      },
      {
        id: 2,
        name: 'Canned goods and dry foods',
        available: true,
      },
      {
        id: 3,
        name: 'Baby food and formula',
        available: true,
      },
      {
        id: 4,
        name: 'Weekly meal planning assistance',
        available: true,
      },
    ],
  },
  {
    id: 2,
    name: 'LA Community Meals',
    location: 'Los Angeles, CA',
    hours: 'Daily, 10 AM-7PM',
    icon: ShoppingBag,
    iconColor: '#EC4899',
    iconBackground: '#FCE7F3',
    bookmarked: true,
    about: {
      description:
        'Walk-in health center offering accessible medical care and wellness programs for the community.',
    },
    contact: {
      address: {
        street: '555 Park Avenue',
        city: 'New York, NY 10022',
      },
      phone: {
        number: '(212) 555-0500',
        label: 'main line',
      },
    },
    services: [
      {
        id: 1,
        name: 'Walk-in consultations',
        available: true,
      },
      {
        id: 2,
        name: 'Vaccinations and immunizations',
        available: true,
      },
      {
        id: 3,
        name: 'Wellness checks',
        available: true,
      },
      {
        id: 4,
        name: 'Health screenings',
        available: true,
      },
    ],
  },
];

export const userProfileData = {
  name: 'Sarah Johnson',
  email: 'sarahjohnson@gmail.com',
  role: 'Clinician',
  profileImage:
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg', // Replace with actual image URL
};

export const notificationsData = [
  {
    id: 1,
    type: 'password',
    title: 'Password Changed',
    description: 'Your password was updated.',
    time: 'Just now',
  },
  {
    id: 2,
    type: 'case',
    title: 'New Case Assigned',
    description: 'Case #123 has been assigned to you.',
    time: '2h',
  },
  {
    id: 3,
    type: 'meeting',
    title: 'Meeting Confirmed',
    description: 'Supervisor John scheduled at 4PM.',
    time: '10m',
  },
  {
    id: 4,
    type: 'resource',
    title: 'New Resource Added',
    description: 'Winter Clothing Program added.',
    time: '1d ago',
  },
];

export const slotData = {
  totalAvailable: 5,
  booked: 3,
  available: 2,
};

export const timeSlotsData = [
  {
    id: 1,
    time: '10:00- 10:30 AM',
    status: 'booked',
    bookedBy: 'Counselor Name',
  },
  {
    id: 2,
    time: '10:00- 10:30 AM',
    status: 'available',
  },
  {
    id: 3,
    time: '02:00- 02:30 AM',
    status: 'booked',
    bookedBy: 'Clinician Name',
  },
];

export const supervisorUpcomingMeetingsData = [
  {
    id: 1,
    date: 'Sep 22, 10:00 AM',
    counselor: 'Counselor A',
    status: 'active',
  },
  {
    id: 2,
    date: 'Sep 22, 09:00 AM',
    counselor: 'Dr. Johnson',
    status: 'scheduled',
  },
  {
    id: 3,
    date: 'Sep 23, 09:00 AM',
    counselor: 'Dr. Johnson',
    status: 'scheduled',
  },
];

export const supervisorHistoryMeetingsData = [
  {
    id: 1,
    date: 'Sep 15, 2025-\n11:00AM',
    provider: 'Counselor N',
    status: 'Completed',
    notes: '',
  },
  {
    id: 2,
    date: 'Sep 15, 2025-\n11:00AM',
    provider: 'Clinician N',
    status: 'Completed',
    notes: 'Canceled by Clinician',
  },
  {
    id: 3,
    date: 'Sep 15, 2025-\n11:00AM',
    provider: 'Clinician N',
    status: 'Completed',
    notes: '',
  },
];
