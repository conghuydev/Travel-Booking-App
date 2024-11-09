import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const LaunchScreen = () => {
const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Data/LaunchScreen.png')} style={{top:100}}/>
    </View>
  )
}

export default LaunchScreen

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        flex: 1,
        backgroundColor: 'rgb(255, 255, 255)',
        paddingTop: 200,
    }
    
})