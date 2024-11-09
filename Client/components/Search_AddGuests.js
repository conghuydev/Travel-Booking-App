import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const Search_AddGuests = () => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const navigation = useNavigation();
  const route = useRoute();
  
  // Lấy dữ liệu location, startDate, endDate từ params
  const [selectedLocation, setSelectedLocation] = useState(route.params?.selectedLocation || 'No location selected');
  const [startDate, setStartDate] = useState(route.params?.startDate || null);
  const [endDate, setEndDate] = useState(route.params?.endDate || null);

  const formatDate = (date) => {
    if (date) {
      const options = { day: 'numeric', month: 'long' };
      return new Date(date).toLocaleDateString('vi-VN', options);
    }
    return '';
  };

  const increaseCount = (type) => {
    if (type === 'adults') {
      setAdults(adults + 1);
    } else if (type === 'children') {
      setChildren(children + 1);
    }
  };

  const decreaseCount = (type) => {
    if (type === 'adults' && adults > 0) {
      setAdults(adults - 1);
    } else if (type === 'children' && children > 0) {
      setChildren(children - 1);
    }
  };

  // Hàm xử lý khi nhấn "Clear all"
  const clearAll = () => {
    setAdults(0);
    setChildren(0);
    setSelectedLocation('No location selected'); // Reset location
    setStartDate(null); // Reset startDate
    setEndDate(null);   // Reset endDate
  };

  return (
    <ScrollView>
      <AntDesign
        name="close"
        size={24}
        color="black"
        style={{ marginTop: 30, textAlign: 'right', marginRight: 45 }}
        onPress={() => navigation.navigate('Search_SelectTimeRange', { selectedLocation })}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Location</Text>
        <Text style={styles.selectedLocationText}>{selectedLocation}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.label}>Dates</Text>
        <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 5 }}>
          {`${startDate ? formatDate(startDate) : 'No start date'} - ${endDate ? formatDate(endDate) : 'No end date'}`}
        </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>How many guests?</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Adults</Text>
          <View style={styles.counter}>
            <TouchableOpacity onPress={() => decreaseCount('adults')} style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{adults}</Text>
            <TouchableOpacity onPress={() => increaseCount('adults')} style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Children</Text>
          <View style={styles.counter}>
            <TouchableOpacity onPress={() => decreaseCount('children')} style={styles.button}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.count}>{children}</Text>
            <TouchableOpacity onPress={() => increaseCount('children')} style={styles.button}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={clearAll}>
          <Text style={styles.clearText}>Clear all</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.searchButton}
          onPress={() => navigation.navigate('SearchResults', {
            selectedLocation, startDate, endDate, adults, children
          })}
        >
          <FontAwesome name="search" size={24} color="white" style={{ marginRight: 1 }} />
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Search_AddGuests;

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    padding: 13,
    borderRadius: 12,
    borderWidth: 1,
    width: '96%',
    alignSelf: 'center',
    borderColor: '#d3d3d3',
    marginBottom: 20,
  },
  label: {
    fontSize: 22,
  },
  selectedLocationText: {
    fontSize: 23,
    color: '#333',
    fontWeight: 'bold',
  },
  container: {
    padding: 20,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#ddd',
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
  count: {
    marginHorizontal: 10,
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    marginTop: 170,
    padding: 13,
    width: '96%',
    alignSelf: 'center',
    borderColor: 'rgba(211, 211, 211, 0.5)',
  },
  clearText: {
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
