import { StyleSheet,Image, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-web';
const HouseDetails_All = () => {
  const navigation = useNavigation();
  const rating = 4.5;
  const reviews = [50, 30, 15, 5, 2]; 

  const totalReviews = reviews.reduce((sum, count) => sum + count, 0);

  const rating1 = 4; 
  const rating2 = 5;
  const rating3 = 3;
  const reviewText = "We loved staying in this charming home! It had all the amenities we needed, and the historic...";
  return (
    <ScrollView style={{backgroundColor:'white'}}>
      <View style={{flexDirection:'row', marginTop:20, marginLeft:20}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{fontSize:25, fontWeight:'bold', marginLeft:100}}>Review</Text>
      </View>
      <Text style={{fontWeight:'bold', fontSize:27, marginTop:20, marginLeft:20}}>262 reviews</Text>
      <View style={styles.container}>
     
      <View>
      <Text style={styles.ratingText}>{rating}/5</Text>
      <View style={styles.overallRating}>
        <View style={styles.stars}>
          {Array.from({ length: 5 }, (_, index) => (
            <Icon
              key={index}
              name={index < Math.floor(rating) ? 'star' : 'star-half-o'}
              size={20}
              color="gold"
            />
          ))}
        </View>
      </View>
      </View>

      
      <View style={styles.breakdownContainer}>
        {reviews.map((count, index) => {
          const percentage = (count / totalReviews) * 100;
          return (
            <View key={index} style={styles.breakdownRow}>
              <View style={styles.barContainer}>
                <View style={[styles.barFill, { width: `${percentage}%` }]} />
              </View>
              <Text style={styles.starLabel}>{5 - index}</Text>
            </View>
          );
        })}
      </View>
    </View>
    <View style={styles.container1}>
      {/* User Info */}
      <View style={styles.userInfo}>
        <Image
          source={require('../assets/Data/Anh-profile-nam-2-min.jpg')} // URL ảnh đại diện thay thế, có thể thay bằng ảnh người dùng thật
          style={styles.avatar}
        />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>John King</Text>
          <Text style={styles.reviewDate}>A day ago</Text>
        </View>
        <View style={styles.stars}>
          {/* Render stars based on rating1 */}
          {Array.from({ length: 5 }, (_, index) => (
            <Icon
              key={index}
              name={index < rating1 ? 'star' : 'star-o'}
              size={16}
              color={index < rating1 ? 'gold' : '#d3d3d3'}
            />
          ))}
        </View>
      </View>

      {/* Review Text */}
      <Text style={styles.reviewText}>{reviewText}</Text>
    </View>
    <View style={styles.divider} />
    <View style={styles.container1}>
      {/* User Info */}
      <View style={styles.userInfo}>
        <Image
          source={require('../assets/Data/z4813277681529-bd965f8ec0d57a2f9cbfc32cc5c0ca99-7819-1698218518898-16982185191991540570444.webp')} // URL ảnh đại diện thay thế, có thể thay bằng ảnh người dùng thật
          style={styles.avatar}
        />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>Jennifer Harris</Text>
          <Text style={styles.reviewDate}>A day ago</Text>
        </View>
        <View style={styles.stars}>
          {/* Render stars based on rating1 */}
          {Array.from({ length: 5 }, (_, index) => (
            <Icon
              key={index}
              name={index < rating3 ? 'star' : 'star-o'}
              size={16}
              color={index < rating3 ? 'gold' : '#d3d3d3'}
            />
          ))}
        </View>
      </View>

      {/* Review Text */}
      <Text style={styles.reviewText}>{reviewText}</Text>
    </View>
    <View style={styles.divider} />
    <View style={styles.container1}>
      {/* User Info */}
      <View style={styles.userInfo}>
        <Image
          source={require('../assets/Data/chan-dung-phu-nu-16-15205309909711055682562.webp')} // URL ảnh đại diện thay thế, có thể thay bằng ảnh người dùng thật
          style={styles.avatar}
        />
        <View style={styles.userDetails}>
          <Text style={styles.userName}>John Edwards</Text>
          <Text style={styles.reviewDate}>A day ago</Text>
        </View>
        <View style={styles.stars}>
          {/* Render stars based on rating1 */}
          {Array.from({ length: 5 }, (_, index) => (
            <Icon
              key={index}
              name={index < rating2 ? 'star' : 'star-o'}
              size={16}
              color={index < rating2 ? 'gold' : '#d3d3d3'}
            />
          ))}
        </View>
      </View>

      {/* Review Text */}
      <Text style={styles.reviewText}>{reviewText}</Text>
    </View>
    <View style={styles.divider} />
    </ScrollView>
  )
}

export default HouseDetails_All

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection:'row',
    backgroundColor:'#f8f9fa',
    marginTop:15,
  },
 
  stars: {
    flexDirection: 'row',
   marginTop:5,
  },
  ratingText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  breakdownContainer: {
    
    
  },
  breakdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  starLabel: {
    width: 20,
    fontSize: 16,
  },
  barContainer: {
    width: 160, 
    height: 7, 
    backgroundColor: '#e0e0e0',
    borderRadius: 4,
    marginHorizontal: 8,
    marginLeft:70,
  },
  barFill: {
    height: '100%',
    backgroundColor: 'gold',
    borderRadius: 5,
  },
  countText: {
    width: 25,
    fontSize: 12, 
    textAlign: 'right',
  },


  container1: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    // Removed shadow and border radius
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userDetails: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  reviewDate: {
    color: '#888',
    fontSize: 12,
  },
  stars: {
    flexDirection: 'row',
  },
  reviewText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginTop: 10,
  },
})