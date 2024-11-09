import { StyleSheet, Image,Text, View } from 'react-native'
import React, {useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'
import { TextInput, TouchableOpacity } from 'react-native-web';

const Login = () => {
    const navigation = useNavigation();
    const [mobile, setMobile] = useState('');
    const handleLogin = async () => {
      if (!mobile) {
          alert('Please fill all fields.');
          return;
      }
  
      try {
          const response = await fetch('http://localhost:4000/api/login', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ mobile }),
          });
  
          const data = await response.json();
          console.log("API response data:", data); // Kiểm tra dữ liệu trả về từ server
  
          if (response.ok) {
              // Điều hướng đến trang Home
              navigation.navigate("Home", { 
              });
              setMobile("");
          } else {
              alert(data.message || 'Invalid mobile.');
          }
      } catch (error) {
          console.error('Error:', error);
          alert('Something went wrong!');
      }
  };
  return (

    <View style={{marginTop:60, padding:25}}>
      <Text style={{fontFamily:'outfit-bold', fontSize:30}}>Let's Sign You In</Text>
      <Text style={{fontFamily:'outfit', fontSize:30, marginTop:20, color:'gray'}}>Welcome Back</Text>
      <Text style={{fontFamily:'outfit-bold', fontSize:30, marginTop:20, color:'gray'}}>You've been missed</Text>
      <View style={{marginTop:30}}>
        <TextInput
        style={{borderWidth:1, borderColor:'gray', borderRadius:8, padding:15, marginTop:10}}
          placeholder='Mobile number'
          value={mobile}
          onChangeText={setMobile}
        />
      </View>
      <TouchableOpacity style={{padding:15, borderRadius:15, borderWidth:1, marginTop:30, backgroundColor:'blue'}} onPress={handleLogin}>
        <Text style={{textAlign:'center', color:'white', fontSize:15}}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{padding:15, borderRadius:15, borderWidth:1, marginTop:30, backgroundColor:'white'}}  onPress={() => navigation.navigate('SignUp')} >
        <Text style={{textAlign:'center', color:'black', fontSize:15}}>Creat Account</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})