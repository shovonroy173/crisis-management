import { View, FlatList } from 'react-native';
import React from 'react';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
// import { availableMeetingsData } from '../../assets/data/data';
import HistoryMeetingCard from '../components/HistoryMeetingCard';
import { useGetMyMeetingsHistoryQuery } from '../redux/slices/meetings/meetingsSlice';
import { transformMeetingData } from '../utils/trasformedMeetingData';
import GlobalLoading from '../components/GlobalLoading';
import GlobalError from '../components/GlobalError';
import GlobalEmpty from '../components/GlobalEmpty';
const HistoryMeetingScreen = () => {
  const {
    data: myMeetingsHistory,
    isLoading,
    isError,
    refetch,
  } = useGetMyMeetingsHistoryQuery();

  const transformedMeetings =
    myMeetingsHistory?.data?.map(transformMeetingData) ||
    myMeetingsHistory?.map(transformMeetingData) ||
    [];
  console.log('LINE AT 18', myMeetingsHistory, transformedMeetings);

  const renderMeetingCard = ({ item }) => <HistoryMeetingCard meeting={item} />;

  return (
    <View
      className="flex-1 bg-white"
      style={{
        paddingHorizontal: responsiveWidth(5),
      }}
    >
      <FlatList
        data={transformedMeetings}
        renderItem={renderMeetingCard}
        // keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: responsiveHeight(3),
        }}
        ListEmptyComponent={
          <View>
            {isLoading && <GlobalLoading />}
            {isError && <GlobalError />}
            {myMeetingsHistory?.data?.length === 0 && <GlobalEmpty />}
          </View>
        }
        refreshing={isLoading}
        onRefresh={refetch}
      />
    </View>
  );
};

export default HistoryMeetingScreen;
