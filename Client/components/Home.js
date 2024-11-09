import { StyleSheet,TextInput,Image, TouchableOpacity,Text,hoveredIcon, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ScrollView } from 'react-native-web';
import AntDesign from '@expo/vector-icons/AntDesign';
const Home = () => {
    const navigation = useNavigation();
    const [hoveredIcon, setHoveredIcon] = useState(null);
    const [selectedIcon, setSelectedIcon] = useState(null);
  return (
    <ScrollView>
        <View style={styles.header}>
            <View style={{ flexDirection: 'row',marginTop:24, borderWidth: 1, borderRadius: 7, padding: 10, backgroundColor:'white', width:"90%", marginLeft:20 }}>
                <FontAwesome name="search" size={24} color="black" style={{marginRight: 1}}/>
                    <TextInput
                        placeholder="  Where do you want to stay?"
                        style={{ flex: 1 }}   
                    />
            </View>
            <View style={styles.headerIcon}>
                <TouchableOpacity
                    onPressIn={() => setHoveredIcon('Beach')}
                    onPressOut={() => setHoveredIcon(null)}
                    onPress={() => setSelectedIcon('Beach')}
                >
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons
                            name="beach"
                            size={50}
                            color={hoveredIcon === 'Beach' || selectedIcon === 'Beach' ? '#00bcd4' : '#565e6c'}
                        />
                        <Text style={[styles.iconText, (hoveredIcon === 'Beach' || selectedIcon === 'Beach') && styles.hoveredText]}>
                            Beach
                        </Text>
                        {(hoveredIcon === 'Beach' || selectedIcon === 'Beach') && <View style={styles.underline} />}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPressIn={() => setHoveredIcon('Mountain')}
                    onPressOut={() => setHoveredIcon(null)}
                    onPress={() => setSelectedIcon('Mountain')}
                >
                    <View style={styles.iconContainer}>
                        <FontAwesome5
                            name="mountain"
                            size={30}
                            color={hoveredIcon === 'Mountain' || selectedIcon === 'Mountain' ? '#00bcd4' : '#565e6c'}
                            style={{ marginTop: 14 }}
                        />
                        <Text style={[styles.iconText, (hoveredIcon === 'Mountain' || selectedIcon === 'Mountain') && styles.hoveredText]}>
                            Mountain
                        </Text>
                        {(hoveredIcon === 'Mountain' || selectedIcon === 'Mountain') && <View style={styles.underline} />}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    onPressIn={() => setHoveredIcon('Camping')}
                    onPressOut={() => setHoveredIcon(null)}
                    onPress={() => setSelectedIcon('Camping')}
                >
                    <View style={styles.iconContainer}>
                        <MaterialCommunityIcons
                            name="tent"
                            size={30}
                            color={hoveredIcon === 'Camping' || selectedIcon === 'Camping' ? '#00bcd4' : '#565e6c'}
                            style={{ marginTop: 14 }}
                        />
                        <Text style={[styles.iconText, (hoveredIcon === 'Camping' || selectedIcon === 'Camping') && styles.hoveredText]}>
                            Camping
                        </Text>
                        {(hoveredIcon === 'Camping' || selectedIcon === 'Camping') && <View style={styles.underline} />}
                    </View>
                </TouchableOpacity>
            </View>

            {/* Hiển thị ảnh mặc định khi chưa chọn icon */}
            {!selectedIcon && (
    <View style={styles.content}>
        <View style={styles.imageContainer}>
            <Image source={require('../assets/Data/Image_9.png')} style={{ marginTop: 20, alignSelf: 'center' }} />
            <TouchableOpacity style={styles.heartIcon}>
                <FontAwesome
                    name="heart"
                    size={24}
                    color="white"
                    style={{ position: 'absolute', top: 10, right: 10 }}  // Đặt icon vào góc trên bên phải của ảnh
                />
            </TouchableOpacity>
        </View>
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
)}

            {!selectedIcon && (
                <View style={styles.content}>
                <Image source={require('../assets/Data/Image_10.png')} style={{ marginTop: 20, alignSelf: 'center' }} />
                <TouchableOpacity style={styles.heartIcon}>
                <FontAwesome
                    name="heart"
                    size={24}
                    color="white"
                    style={{ position: 'absolute', top: 10, right: 10 }}  // Đặt icon vào góc trên bên phải của ảnh
                />
            </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: 'bold', marginTop: 18 }}>Apartment in Lon Don</Text>
                    <AntDesign name="star" size={15} color="orange" style={{ marginTop: 20, marginLeft: 140 }} />
                    <Text style={{ marginTop: 20, marginLeft: 5 }}>5.0</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 8 }}>
                    <Text>Mountain</Text>
                    <Text style={{ marginLeft: 227 }}><Text style={{ fontWeight: "bold" }}>$30</Text>/night</Text>
                </View>
            </View>
            )}
            {!selectedIcon && (
                <View style={styles.content}>
                <Image source={require('../assets/Data/Image_22.png')} style={{ marginTop: 20, alignSelf: 'center' }} />
                <TouchableOpacity style={styles.heartIcon}>
                <FontAwesome
                    name="heart"
                    size={24}
                    color="white"
                    style={{ position: 'absolute', top: 10, right: 10 }}  // Đặt icon vào góc trên bên phải của ảnh
                />
            </TouchableOpacity>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: 'bold', marginTop: 18 }}>Apartment in San Jose</Text>
                    <AntDesign name="star" size={15} color="orange" style={{ marginTop: 20, marginLeft: 140 }} />
                    <Text style={{ marginTop: 20, marginLeft: 5 }}>5.0</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 8 }}>
                    <Text>Camping</Text>
                    <Text style={{ marginLeft: 227 }}><Text style={{ fontWeight: "bold" }}>$28</Text>/night</Text>
                </View>
            </View>
            )}
            {/* Chỉ hiển thị nội dung nếu có icon được chọn */}
            {selectedIcon === 'Beach' && (
                <View style={styles.content}>
                    <Image source={require('../assets/Data/Image_9.png')} style={{ marginTop: 20, alignSelf: 'center' }} />
                    <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: 'bold', marginTop: 18 }}>Beach</Text>
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
            )}

            {selectedIcon === 'Mountain' && (
                <View style={styles.content}>
                    <Image source={require('../assets/Data/Image_10.png')} style={{ marginTop: 20, alignSelf: 'center' }} />
                    <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: 'bold', marginTop: 18 }}>Mountain</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: 'bold', marginTop: 18 }}>Apartment in San Jose</Text>
                        <AntDesign name="star" size={15} color="orange" style={{ marginTop: 20, marginLeft: 140 }} />
                        <Text style={{ marginTop: 20, marginLeft: 5 }}>5.0</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 8 }}>
                        <Text>Mountain</Text>
                        <Text style={{ marginLeft: 227 }}><Text style={{ fontWeight: "bold" }}>$28</Text>/night</Text>
                    </View>
                </View>
            )}

            {selectedIcon === 'Camping' && (
                <View style={styles.content}>
                <Image source={require('../assets/Data/Image_22.png')} style={{ marginTop: 20, alignSelf: 'center' }} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginLeft: 20, fontSize: 16, fontWeight: 'bold', marginTop: 18 }}>Apartment in San Jose</Text>
                    <AntDesign name="star" size={15} color="orange" style={{ marginTop: 20, marginLeft: 140 }} />
                    <Text style={{ marginTop: 20, marginLeft: 5 }}>5.0</Text>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 20, marginTop: 8 }}>
                    <Text>Camping</Text>
                    <Text style={{ marginLeft: 227 }}><Text style={{ fontWeight: "bold" }}>$30</Text>/night</Text>
                </View>
            </View>
            )}
            <View style={styles.footer}>
                <TouchableOpacity onPress={() => navigation.navigate('Search_SelectADestination')}>
                    <FontAwesome name="search" size={24} color="black" style={{ marginLeft: 10 }} />
                    <Text>Search</Text>
                </TouchableOpacity>
                <View>
                    <MaterialIcons name="favorite-border" size={24} color="black" style={{ marginLeft: 10 }} />
                    <Text>Favorite</Text>
                </View>
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
        
    </ScrollView>
    
  )
}

export default Home

const styles = StyleSheet.create({
    header:{
        backgroundColor:'#f2fafd',
        height:150,
    },
    headerIcon: {
        marginTop:17,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#f0f8ff',
        paddingVertical: 10,
      },
      iconContainer: {
        alignItems: 'center',
      },
      iconText: {
        color: '#565e6c',
        marginTop: 5,
      },
      hoveredText: {
        color: '#00bcd4', 
        fontWeight: 'bold',
        textDecorationLine: 'none',
      },
      underline: {
        position: 'absolute',
        width: '100%', 
        height: 3, 
        backgroundColor: '#00bcd4', 
        bottom: -10, 
        left: 0, 
      },
      footer: {
        marginTop:25,
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
        alignItems: 'center', 
      },
      
      heartIcon: {
        position: 'absolute',  
        top: 20,               
        right: 20,             
      }
})