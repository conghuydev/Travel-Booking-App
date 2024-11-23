import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);
  const navigation = useNavigation();

  // Hàm tải dữ liệu yêu thích từ AsyncStorage
  const loadFavorites = async () => {
    try {
      const storedFavorites = await AsyncStorage.getItem('favorites');
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites)); // Hiển thị dữ liệu đã lưu
      } else {
        setFavorites([]);  // Không có dữ liệu yêu thích
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
  };

  // Sử dụng useFocusEffect để tải lại dữ liệu mỗi khi người dùng quay lại trang này
  useFocusEffect(
    React.useCallback(() => {
      loadFavorites();  // Tải lại dữ liệu mỗi khi màn hình được focus
    }, [])
  );

  // Hàm để xóa tất cả yêu thích
  const handleClearFavorites = async () => {
    try {
      await AsyncStorage.removeItem('favorites');  // Xóa tất cả dữ liệu yêu thích trong AsyncStorage
      setFavorites([]);  // Cập nhật lại state để giao diện hiển thị danh sách yêu thích trống
    } catch (error) {
      console.error('Error clearing favorites:', error);
    }
  };

  // Hàm để quay lại trang trước và xóa tất cả yêu thích
  const handleGoBack = () => {
    handleClearFavorites();  // Clear favorites
    navigation.goBack();  // Quay lại trang trước
  };

  return (
    <View style={styles.container}>
      {/* Nút quay lại trang trước */}
      <TouchableOpacity onPress={handleGoBack}>
        <AntDesign name="left" size={30} color="black" />
      </TouchableOpacity>

      <ScrollView>
        <Text style={styles.header}>Your Favorites</Text>
        {favorites.length > 0 ? (
          favorites.map((item, index) => (
            <View key={index} style={styles.card}>
              <Image source={item.imageSource} style={styles.image} />
              <Text style={styles.title}>{item.title}</Text>
              <Text>Rating: {item.rating}</Text>
              <Text>Location: {item.location}</Text>
              <Text>Price: ${item.price}/night</Text>        
            </View>
          ))
        ) : (
          <Text style={styles.emptyText}>No favorites yet!</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
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
  removeText: {
    color: 'red',
    marginTop: 10,
  },
});

export default Favorite;
