// import { View, Text, ScrollView, Image } from 'react-native';
// import React from 'react';
// import {
//   responsiveHeight,
//   responsiveWidth,
// } from 'react-native-responsive-dimensions';
// import Navbar from '../components/Navbar';
// import { User } from 'lucide-react-native';

// const CaseDetailsScreen = ({ route }) => {
//   const { case: caseItem } = route.params;
//   console.log('route at line 4', route, caseItem);
//   return (
//     <View
//       className="flex-1 bg-white"
//       style={{ padding: responsiveWidth(5), gap: responsiveHeight(3) }}
//     >
//       <Navbar title="Case Details" />

//       <ScrollView className="flex-1 bg-white "
//       showsVerticalScrollIndicator={false}
//       >
//         {/* Case Card */}
//         <View className="bg-white border border-neutral-200 rounded-2xl p-4 mb-6">
//           {/* Header */}
//           <View className="flex-row justify-between items-start mb-2">
//             <View className="flex-1">
//               <Text className="text-base font-bold text-black">
//                 Case #101- Child Counseling
//               </Text>
//               <Text className="text-sm text-zinc-500 mt-1">
//                 Individual therapy for anxiety disorders in teenagers
//               </Text>
//             </View>

//             {/* Status */}
//             <View className="flex-row items-center bg-pink-50 px-3 py-1 rounded-full">
//               <View className="w-2 h-2 rounded-full bg-pink-400 mr-1" />
//               <Text className="text-xs text-black">In- progress</Text>
//             </View>
//           </View>

//           {/* Dates */}
//           <View className="flex-row justify-between mt-4">
//             <View>
//               <Text className="text-xs text-zinc-400">Start Date</Text>
//               <Text className="text-sm text-black">25 Sep 2025</Text>
//             </View>
//             <View>
//               <Text className="text-xs text-zinc-400">End Date</Text>
//               <Text className="text-sm text-black">25 Sep 2025</Text>
//             </View>
//           </View>

//           {/* Description */}
//           <Text className="text-sm text-zinc-600 mt-4 leading-relaxed">
//             This case involves comprehensive behavioral therapy for a 8-year-old
//             client presenting with anxiety-related challenges in school
//             settings. The treatment plan includes weekly individual sessions
//             focusing on cognitive behavioral techniques and social skills
//             development.
//             {'\n\n'}
//             Current focus areas include emotional regulation strategies,
//             communication skills enhancement, and gradual exposure therapy for
//             classroom participation anxiety.
//           </Text>
//         </View>

//         {/* Case Notes */}
//         <Text className="text-lg font-bold text-black mb-3">Case Notes</Text>

//         {/* Clinician Note */}
//         <View className="mb-4">
//           <View className="flex-row justify-between mb-1">
//             <Text className="text-sm font-semibold text-black">Clinician</Text>
//             <Text className="text-xs text-zinc-400">25 Sep 2025, 10:45am</Text>
//           </View>
//           <Text className="text-sm text-zinc-600 leading-relaxed">
//             Initial assessment completed. Client shows good rapport and
//             willingness to engage. Identified primary concerns around social
//             anxiety and academic performance.
//           </Text>
//         </View>

//         {/* Counselor Note */}
//         <View className="mb-6">
//           <View className="flex-row justify-between mb-1">
//             <Text className="text-sm font-semibold text-black">Counselor</Text>
//             <Text className="text-xs text-zinc-400">28 Sep 2025, 10:45am</Text>
//           </View>
//           <Text className="text-sm text-zinc-600 leading-relaxed">
//             Follow-up scheduled with family. Discussed coping strategies and
//             homework assignments. Client responded well to cognitive behavioral
//             techniques.
//           </Text>
//         </View>

//         {/* Client Info */}
//         <View className="bg-white border border-neutral-200 rounded-2xl p-4">
//           <View className="flex-row items-center mb-4">
//             <User size={18} color="black" />
//             <Text className="ml-2 text-base font-semibold text-black">
//               Client Information
//             </Text>
//           </View>

//           {/* Avatar + Name */}
//           <View className="flex-row items-center mb-3">
//             <Image
//               source={{
//                 uri: 'https://randomuser.me/api/portraits/women/44.jpg',
//               }}
//               className="w-12 h-12 rounded-full mr-3"
//             />
//             <View>
//               <Text className="text-sm font-semibold text-black">
//                 Sarah Johnson
//               </Text>
//               <Text className="text-xs text-zinc-500">16 years old</Text>
//             </View>
//           </View>

//           {/* Info List */}
//           <View className="gap-y-5">
//             <View className="flex-row justify-between">
//               <Text className="text-xs text-zinc-400">Date of Birth</Text>
//               <Text className="text-xs text-black">March 15, 2009</Text>
//             </View>
//             <View className="flex-row justify-between">
//               <Text className="text-xs text-zinc-400">Gender</Text>
//               <Text className="text-xs text-black">Female</Text>
//             </View>
//             <View className="flex-row justify-between">
//               <Text className="text-xs text-zinc-400">Phone</Text>
//               <Text className="text-xs text-black">+1 (555) 123-4567</Text>
//             </View>
//             <View className="flex-row justify-between">
//               <Text className="text-xs text-zinc-400">Email</Text>
//               <Text className="text-xs text-black">sarah.j@gmail.com</Text>
//             </View>
//             <View className="flex-row justify-between">
//               <Text className="text-xs text-zinc-400">Emergency Contact</Text>
//               <Text className="text-xs text-black">+1 (555) 123-4567</Text>
//             </View>
//           </View>
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default CaseDetailsScreen;

import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Navbar from '../components/Navbar';
import { User } from 'lucide-react-native';
import { convertDate } from '../utils/convertDate';
import { getCategoryIcon } from '../utils/getCategoryIcon';

const CaseDetailsScreen = ({ route }) => {
  // support either `case` or `caseItem` param
  const caseItem = route?.params?.case || route?.params?.caseItem || {};

  const caseTitle = caseItem.title || '—';
  const caseNumber = caseItem.caseNumber || caseItem._id || '—';
  const description = caseItem.description || 'No description provided.';
  const status = caseItem.status || '—';
  const startDate = caseItem.startDate ? convertDate(caseItem.startDate) : '—';
  const endDate = caseItem.endDate ? convertDate(caseItem.endDate) : '—';
  const client = caseItem.client || {};
  const counsellor = caseItem.Counsellor || caseItem.counsellor || {};

  // console.log('LINE AT 178', caseItem);

  // const statusBg =
  //   status === 'Pending'
  //     ? 'bg-yellow-100'
  //     : status === 'In- progress' || status === 'In Progress'
  //     ? 'bg-pink-50'
  //     : 'bg-green-50';
  // const statusDot =
  //   status === 'Pending'
  //     ? 'bg-yellow-400'
  //     : status === 'In- progress'
  //     ? 'bg-pink-400'
  //     : 'bg-green-400';

  return (
    <View
      className="flex-1 bg-white"
      style={{ padding: responsiveWidth(5), gap: responsiveHeight(3) }}
    >
      <Navbar title="Case Details" />

      <ScrollView
        className="flex-1 bg-white"
        showsVerticalScrollIndicator={false}
      >
        {/* Case Card */}
        <View className="bg-white border border-neutral-200 rounded-2xl p-4 mb-6">
          {/* Header */}
          <View className="flex-row justify-between items-start mb-2">
            <View className="flex-1">
              <Text className="text-base font-bold text-black">
                {caseNumber} - {caseTitle}
              </Text>
              <Text className="text-sm text-zinc-500 mt-1">
                {description.slice(0, 120)}
                {description.length > 120 ? '...' : ''}
              </Text>
            </View>

            {/* Status */}

            <View
              className="flex-row items-center bg-neutral-200 px-2 py-1 rounded-md self-start"
              style={{ gap: responsiveWidth(1) }}
            >
              {getCategoryIcon(status)}
              <Text className="text-xs text-zinc-700">{status}</Text>
            </View>
          </View>

          {/* Dates */}
          <View className="flex-row justify-between mt-4">
            <View>
              <Text className="text-xs text-zinc-400">Start Date</Text>
              <Text className="text-sm text-black">{startDate}</Text>
            </View>
            <View>
              <Text className="text-xs text-zinc-400">End Date</Text>
              <Text className="text-sm text-black">{endDate}</Text>
            </View>
          </View>

          {/* Description */}
          <Text className="text-sm text-zinc-600 mt-4 leading-relaxed">
            {description}
          </Text>
        </View>

        {/* Case Notes */}
        <Text className="text-lg font-bold text-black mb-3">Case Notes</Text>

        {/* Example notes (keep if real notes exist replace accordingly) */}
        {(caseItem.notes || []).length ? (
          (caseItem.notes || []).map((n, i) => (
            <View key={i} className="mb-4">
              <View className="flex-row justify-between mb-1">
                <Text className="text-sm font-semibold text-black">
                  {n.author || 'Note'}
                </Text>
                <Text className="text-xs text-zinc-400">
                  {n.date ? convertDate(n.date) : ''}
                </Text>
              </View>
              <Text className="text-sm text-zinc-600 leading-relaxed">
                {n.text}
              </Text>
            </View>
          ))
        ) : (
          <View className="mb-4">
            <Text className="text-sm text-zinc-600">No notes available.</Text>
          </View>
        )}

        {/* Client Info */}
        <View className="bg-white border border-neutral-200 rounded-2xl p-4">
          <View className="flex-row items-center mb-4">
            <User size={18} color="black" />
            <Text className="ml-2 text-base font-semibold text-black">
              Client Information
            </Text>
          </View>

          {/* Avatar + Name */}
          <View className="flex-row items-center mb-3">
            <Image
              source={{
                uri:
                  client?.avatar ||
                  client?.photo ||
                  'https://randomuser.me/api/portraits/lego/1.jpg',
              }}
              className="w-12 h-12 rounded-full mr-3"
            />
            <View>
              <Text className="text-sm font-semibold text-black">
                {client?.fullName || client?.name || '—'}
              </Text>
              <Text className="text-xs text-zinc-500">
                {client?.age ?? client?.dob ? `${client.age || ''}` : ''}
              </Text>
            </View>
          </View>

          {/* Info List */}
          <View className="gap-y-5">
            <View className="flex-row justify-between">
              <Text className="text-xs text-zinc-400">Address</Text>
              <Text className="text-xs text-black">
                {client?.address || '—'}
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-xs text-zinc-400">Gender</Text>
              <Text className="text-xs text-black">
                {client?.gender || '—'}
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-xs text-zinc-400">Phone</Text>
              <Text className="text-xs text-black">{client?.phone || '—'}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-xs text-zinc-400">Email</Text>
              <Text className="text-xs text-black">{client?.email || '—'}</Text>
            </View>
            <View className="flex-row justify-between">
              <Text className="text-xs text-zinc-400">Emergency Contact</Text>
              <Text className="text-xs text-black">
                {client?.emergencyContact || client?.emergency || '—'}
              </Text>
            </View>
          </View>
        </View>

        {/* Counsellor / Created By */}
        <View className="mt-4">
          <Text className="text-sm font-semibold text-black mb-2">
            Assigned Counsellor
          </Text>
          <View className="bg-white border border-neutral-200 rounded-2xl p-4">
            <Text className="text-sm font-medium text-black">
              {counsellor?.fullName || counsellor?.name || '—'}
            </Text>
            <Text className="text-xs text-zinc-400">
              {counsellor?.email || '—'}
            </Text>
            <Text className="text-xs text-zinc-400 mt-2">
              Created by:{' '}
              {caseItem.createdBy?.fullName || caseItem.createdBy?.email || '—'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CaseDetailsScreen;
