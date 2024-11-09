import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AntDesign from '@expo/vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';
import { useNavigation, useRoute } from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Search_SelectTimeRange = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [startDate, setStartDate] = useState(null); // State để lưu ngày bắt đầu
  const [endDate, setEndDate] = useState(null); // State để lưu ngày kết thúc
  const [selectedLocation, setSelectedLocation] = useState(route.params?.selectedLocation || 'Chưa chọn địa điểm'); // Thêm state để lưu location

  const onDateChange = (date, type) => {
    if (type === 'END_DATE') {
      setEndDate(date); // Cập nhật ngày kết thúc
    } else {
      setStartDate(date); // Cập nhật ngày bắt đầu
      setEndDate(null); // Đặt lại endDate khi chọn startDate mới
    }
  };

  // Hàm xử lý khi nhấn "Clear all"
  const handleClearAll = () => {
    setStartDate(null); // Reset startDate
    setEndDate(null);   // Reset endDate
    setSelectedLocation('Chưa chọn địa điểm'); // Reset location về mặc định
  };

  return (
    <ScrollView>
      <AntDesign
        name="close"
        size={24}
        color="black"
        style={{ marginTop: 30, textAlign: 'right', marginRight: 45 }}
        onPress={() => navigation.navigate('Search_SelectADestination')}
      />
      
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>Location</Text>
        <Text style={styles.selectedLocationText}>{selectedLocation}</Text>
      </View>
      
      <View style={styles.calendarContainer}>
        <CalendarPicker 
          onDateChange={onDateChange} 
          allowRangeSelection={true} 
          minDate={new Date()} 
          selectedStartDate={startDate} // Cập nhật lại trạng thái khi chọn ngày
          selectedEndDate={endDate}     // Cập nhật lại trạng thái khi chọn ngày kết thúc
        />
      </View>
      
      <View style={styles.navigationButtons}>
        <TouchableOpacity onPress={() => navigation.navigate('Search_SelectADestination')}>
          <Text style={styles.skipText}>Skip</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => navigation.navigate('Search_AddGuests', { selectedLocation, startDate, endDate })}
        >
          <Text style={styles.nextButton}>Next</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.footer}>
        <TouchableOpacity onPress={handleClearAll}>
          <Text style={styles.clearAllText}>Clear all</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton}>
          <FontAwesome name="search" size={24} color="white" style={{ marginRight: 1 }} />
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Search_SelectTimeRange;

const styles = StyleSheet.create({
  locationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    padding: 13,
    borderRadius: 12,
    borderWidth: 1,
    width: '96%',
    marginLeft: 7,
    borderColor: 'gray',
    marginBottom: 20,
  },
  locationText: {
    fontSize: 22,
  },
  selectedLocationText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  calendarContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    width: '95%',
    alignSelf: 'center',
    marginTop: 55,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  skipText: {
    fontSize: 22,
    marginTop: 10,
  },
  nextButton: {
    fontSize: 22,
    backgroundColor: '#3ebde0',
    paddingVertical: 5,
    paddingHorizontal: 40,
    borderRadius: 5,
    color: 'white',
    marginTop: 5,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 25,
    padding: 13,
    width: '96%',
    marginLeft: 7,
    borderColor: 'rgba(211, 211, 211, 0.5)',
  },
  clearAllText: {
    fontSize: 22,
  },
  searchButton: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#3ebde0',
    marginLeft: 170,
    width: 115,
    flexDirection: 'row',
  },
  searchButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
    marginLeft: 6,
  },
});
