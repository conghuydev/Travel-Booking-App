import { View, StyleSheet, TouchableOpacity, Image, Text, ScrollView } from 'react-native'; 
import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Modal } from 'react-native';
// Add a formatDate function or use a library like moment.js or date-fns
const formatDate = (date) => {
  if (date) {
    const options = { day: 'numeric', month: 'long' };
    return new Date(date).toLocaleDateString('vi-VN', options);
  }
  return '';
};

const SearchResults = () => {
  const navigation = useNavigation();
  const route = useRoute();
  
  // Get the parameters passed from the previous screen
  const { selectedLocation, startDate, endDate, adults, children } = route.params || {};

  const [checked, setChecked] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const toggleCheckbox = () => {
    setChecked(!checked);
    if (!checked) {

    }
  };
  const [modalVisible, setModalVisible] = useState(false);
  const saveFavorite = async (favorite) => {
    try {
      const existingFavorites = await AsyncStorage.getItem('favorites');
      const favoritesList = existingFavorites ? JSON.parse(existingFavorites) : [];
  
      // Kiểm tra trùng lặp
      const isDuplicate = favoritesList.some(
        (item) => item.title === favorite.title && item.location === favorite.location
      );
  
      if (!isDuplicate) {
        favoritesList.push(favorite);
        await AsyncStorage.setItem('favorites', JSON.stringify(favoritesList));
        alert('Added to favorites!');
      } else {
        alert('This item is already in your favorites!');
      }
    } catch (error) {
      console.error('Error saving favorite:', error);
    }
  };

  // Modal close handler
  const handleCloseModal = () => {
    setModalVisible(false);  // Close the modal
  };
  
  
  
  return (
    <ScrollView>
      <View style={styles.searchBarContainer}>
        <View style={styles.searchInputContainer}>
          <Image
            resizeMode="contain"
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7e492261ef299d22c85f7d0df1df53f8d8ef747efce7ecf9f83fa17983b03896?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac" }}
            style={styles.searchIcon}
          />
          <View style={styles.searchTextContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Text style={styles.searchText}>
                {`${selectedLocation}, ${startDate ? formatDate(startDate) : 'No start date'} - ${endDate ? formatDate(endDate) : 'No end date'}, ${adults} Adults, ${children} Children`}
              </Text>
            </ScrollView>
          </View>
        </View>
        <View>
        <TouchableOpacity>
        <Image
          resizeMode="contain"
          source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4c6c982599dc0339582452115999cce2cf7b8604e84759693a6e981ef21b9c30?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac" }}
          style={styles.preferencesIcon}
        />
        </TouchableOpacity>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}  // Điều khiển việc hiển thị modal
        onRequestClose={handleCloseModal} // Đóng modal khi nhấn phím quay lại trên Android
      >
        <View style={styles.customModalOverlay}>
          <View style={styles.customModalContainer}>
            <Text style={styles.customModalText}>You have checked the box!</Text>
            <TouchableOpacity style={styles.customButton} onPress={handleCloseModal}>
              <Text style={styles.customButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        </View>
      </View>

      <View style={styles.line}></View>

      <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Present total price</Text>
        <View style={styles.detailsContainer}>
          <Text style={styles.description}>All-inclusive, pre-tax</Text>
          <View style={styles.checkboxContainer}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={toggleCheckbox} 
            />
          </View>
        </View>
      </View>
    </View>

      {/* Example Content */}
      <TouchableOpacity 
  onPress={() => navigation.navigate('HouseDetails', {
    imageSource: require('../assets/Data/Image_22.png')
  })}
>
  <View style={styles.content}>
    <Image source={require('../assets/Data/Image_22.png')} style={{ marginTop: 20, alignSelf: 'center' }} />
    <TouchableOpacity
  style={styles.heartIcon}
  onPress={() => saveFavorite({
    imageSource: require('../assets/Data/Image_22.png'),
    title: 'Apartment in Omaha',
    rating: 5.0,
    location: 'Beach',
    price: 20
  })}
>
  <FontAwesome
    name="heart"
    size={25}
    color="white"
    style={styles.heartIconStyle}
  />
</TouchableOpacity>
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: 'bold', marginTop: 18 }}>Apartment in Omaha</Text>
      <AntDesign name="star" size={15} color="orange" style={{ marginTop: 20, marginLeft: 150 }} />
      <Text style={{ marginTop: 20, marginLeft: 5 }}>5.0</Text>
    </View>
    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 8 }}>
      <Text>Beach</Text>
      <Text style={{ marginLeft: 249 }}><Text style={{ fontWeight: "bold" }}>$20</Text>/night</Text>
    </View>
  </View>
</TouchableOpacity>

<TouchableOpacity 
  onPress={() => navigation.navigate('HouseDetails', {
    imageSource: require('../assets/Data/Image_23.png')
  })}
>
  <View style={styles.content}>
    <Image source={require('../assets/Data/Image_23.png')} style={{ marginTop: 20, alignSelf: 'center' }} />
    <TouchableOpacity
  style={styles.heartIcon}
  onPress={() => saveFavorite({
    imageSource: require('../assets/Data/Image_23.png'),
    title: 'Apartment in Milwaukee',
    rating: 5.0,
    location: 'Beach',
    price: 20
  })}
>
  <FontAwesome
    name="heart"
    size={25}
    color="white"
    style={styles.heartIconStyle}
  />
</TouchableOpacity>
    <View style={{ flexDirection: 'row' }}>
      <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: 'bold', marginTop: 18 }}>Apartment in Milwaukee</Text>
      <AntDesign name="star" size={15} color="orange" style={{ marginTop: 20, marginLeft: 120 }} />
      <Text style={{ marginTop: 20, marginLeft: 5 }}>5.0</Text>
    </View>
    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 8 }}>
      <Text>Beach</Text>
      <Text style={{ marginLeft: 249 }}><Text style={{ fontWeight: "bold" }}>$20</Text>/night</Text>
    </View>
  </View>
</TouchableOpacity>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Search_SelectADestination')}>
          <FontAwesome5 name="search" size={24} color="blue" style={{ marginLeft: 10 }} />
          <Text style={{color:'blue'}}>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Favorite')}>
        <View>
          <MaterialIcons name="favorite-border" size={24} color="black" style={{ marginLeft: 10 }} />
          <Text>Favorite</Text>
        </View>
        </TouchableOpacity>
        <View>
          <MaterialIcons name="dashboard" size={24} color="black" style={{ marginLeft: 10 }} />
          <Text>Bookings</Text>
        </View>
        <View>
          <Ionicons name="chatbox-ellipses-outline" size={24} color="black" style={{ marginLeft: 5 }} />
          <Text>Inbox</Text>
        </View>
        <View>
          <FontAwesome5 name="user-circle" size={24} color="black" style={{ marginLeft: 5 }} />
          <Text>Profile</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default SearchResults;

const styles = StyleSheet.create({
  searchBarContainer: {
    borderRadius: 8,
    borderColor: "rgba(188, 193, 202, 1)",
    borderStyle: "solid",
    borderWidth: 1,
    alignSelf: "center",
    display: "flex",
    marginTop: 12,
    width: "100%",
    maxWidth: 350,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 9,
    paddingBottom: 9,
    alignItems: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchInputContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: "auto",
  },
  searchIcon: {
    width: 20,
    aspectRatio: 1,
  },
  searchTextContainer: {
    flex: 1,
    width: '100%', // Ensure the container takes full width
    maxWidth: 350, // You can adjust the max width if needed
    overflow: 'hidden', // Prevent content overflow
  },
  
  preferencesIcon: {
    width: 20,
    aspectRatio: 1,
  },
  line: {
    height: 1,
    backgroundColor: '#D3D3D3',
    marginVertical: 20,  
  },
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: '90%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  description: {
    fontSize: 17,
    marginTop: 3,
  },
  checkboxContainer: {
    marginLeft: 20,
  },
  footer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: 'white',
  },
  iconContainer: {
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative', 
  },
  heartIcon: {
    position: 'absolute',   
    top: 30,                
    right: 30,              
                
  },
 customModalOverlay: {
    flex: 1,
    justifyContent: 'center',  // Center content vertically
    alignItems: 'center',      // Center content horizontally
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Darker overlay
  },
  customModalContainer: {
    width: '100%',  // This makes the modal take up the full width of the screen
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 12,
    elevation: 5, // Optional shadow for Android
    alignItems: 'center',  // Center content inside the modal horizontally
  },
  customModalText: {
    fontSize: 18,
    color: '#333',
    marginBottom: 20,
  },
  customButton: {
    backgroundColor: '#FF5733', // Button color
    padding: 12,
    borderRadius: 8,
  },
  customButtonText: {
    color: 'white',
    fontSize: 16,
  },
});
