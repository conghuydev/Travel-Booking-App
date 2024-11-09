import { StyleSheet, Text, TouchableOpacity, Image, View, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Favorite = ({ route }) => {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const loadFavorites = async () => {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    };
    loadFavorites();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={{flexDirection:'row', marginTop:20, marginLeft:20}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={25} color="black" />
          </TouchableOpacity>
          <Text style={{fontSize:20, fontWeight:'bold', marginLeft:100}}>Favorites</Text>
        </View>

        <Text style={{fontSize:25, fontWeight:'bold', marginLeft:20, marginTop:20}}>Places you liked</Text>

        {/* Show list of favorites here */}
       
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Search_SelectADestination')}>
          <FontAwesome5 name="search" size={24} color="black" style={{ marginLeft: 10 }} />
          <Text>Search</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
          <View>
            <MaterialIcons name="favorite-border" size={24} color="blue" style={{ marginLeft: 10 }} />
            <Text  style={{color:'blue'}}>Favorite</Text>
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
    </View>
  );
};

export default Favorite;

const styles = StyleSheet.create({
  container: {
    flex: 1, // Makes sure the container takes up the full screen
  },
  scrollViewContent: {
    paddingBottom: 100, // Adds extra space at the bottom to prevent footer from covering content
  },
  card: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  emptyText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 50,
  },
  footer: {
    position: 'absolute', // Fixes footer at the bottom of the screen
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
    backgroundColor: 'white',
  },
});
