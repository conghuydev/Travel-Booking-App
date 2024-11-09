import { StyleSheet, Image, Text, View } from 'react-native';
import React, { useState } from 'react';
import { TextInput, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const Search_SelectADestination = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const navigation = useNavigation();

  const handlePress = (location) => {
    setSelectedLocation(location);
    console.log('Selected location:', location);
    navigation.navigate('Search_SelectTimeRange', { selectedLocation: location });
  };

  const handleClear = () => {
    setSelectedLocation(null);
  };

  return (
    <View style={styles.mainContainer}>
      <AntDesign
        name="close"
        size={24}
        color="black"
        style={styles.closeIcon}
        onPress={() => navigation.navigate('Home')}
      />
      <View style={styles.container}>
        <Text style={styles.titleText}>Where to?</Text>
        <View style={styles.searchBox}>
          <FontAwesome name="search" size={24} color="black" />
          <TextInput placeholder="  Search" style={styles.searchInput} />
        </View>
      </View>

      {/* Location Selection */}
      <View style={styles.locationSelection}>
        <TouchableOpacity onPress={() => handlePress('Anywhere')} style={styles.locationOption}>
          <Image source={require('../assets/Data/Screenshot 2024-11-05 143631.png')} style={styles.locationImage} />
          <Text style={styles.locationText}>Anywhere</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Europe')} style={styles.locationOption}>
          <Image source={require('../assets/Data/Screenshot 2024-11-05 143645.png')} style={styles.locationImage} />
          <Text style={styles.locationText}>Europe</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('Asia')} style={styles.locationOption}>
          <Image source={require('../assets/Data/Screenshot 2024-11-05 143729.png')} style={styles.locationImage} />
          <Text style={styles.locationText}>Asia</Text>
        </TouchableOpacity>
      </View>

      {/* Time and Guest Selection */}
      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>When</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search_SelectTimeRange', { selectedLocation })}>
          <Text style={styles.optionButtonText}>Add time</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.optionContainer}>
        <Text style={styles.optionTitle}>Guests</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Search_AddGuests', { selectedLocation })}>
          <Text style={styles.optionButtonText}>Add guests</Text>
        </TouchableOpacity>
      </View>

      {/* Clear and Search Button */}
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={handleClear}>
          <Text style={styles.clearText}>Clear all</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton}>
          <FontAwesome name="search" size={24} color="white" />
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search_SelectADestination;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  closeIcon: {
    textAlign: 'right',
    marginTop: 20,
  },
  container: {
    marginTop: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    backgroundColor: 'white',
    width: '90%',
    marginLeft: 20,
    borderColor: '#E0E0E0',
    marginTop: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 5,
  },
  locationSelection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  locationOption: {
    marginHorizontal: 5,
  },
  locationImage: {
    width: 125,
    height: 125,
  },
  locationText: {
    textAlign: 'center',
    marginTop: 8,
  },
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    padding: 13,
    borderRadius: 12,
    borderWidth: 1,
    width: '96%',
    alignSelf: 'center',
    borderColor: 'rgba(211, 211, 211, 0.5)',
  },
  optionTitle: {
    fontSize: 22,
  },
  optionButtonText: {
    fontSize: 19,
    fontWeight: 'bold',
  },
  actionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 35,
    width: '96%',
    alignSelf: 'center',
  },
  clearText: {
    fontSize: 22,
  },
  searchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#3ebde0',
    width: 115,
    justifyContent: 'center',
  },
  searchButtonText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 6,
  },
});
