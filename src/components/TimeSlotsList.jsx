import React from 'react';
import { FlatList, View } from 'react-native';
import TimeSlotCard from './TimeSlotCard';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import GlobalError from './GlobalError';
import GlobalEmpty from './GlobalEmpty';
import GlobalLoading from './GlobalLoading';

const TimeSlotsList = ({
  slots,
  onEdit,
  onDelete,
  loading,
  error,
  refetch,
}) => {
  const renderItem = ({ item }) => (
    <TimeSlotCard slot={item} onEdit={onEdit} onDelete={onDelete} />
  );

  return (
    <FlatList
      data={slots}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{ gap: responsiveHeight(2) }}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <View style={{ marginTop: responsiveHeight(20) }}>
          {loading && <GlobalLoading />}
          {error && <GlobalError />}
          {!loading && !error && slots.length === 0 && <GlobalEmpty />}
        </View>
      }
      refreshing={loading}
      onRefresh={refetch}
    />
  );
};

export default TimeSlotsList;
