import { StyleSheet, Text, View } from 'react-native'
import React, {useState,useEffect} from 'react'
import { useNavigation } from '@react-navigation/native';
import { TextInput, TouchableOpacity } from 'react-native-web';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
const SignUp = () => {
    const navigation = useNavigation();
    const [mobile, setMobile] = useState('');
    const handleLogin = async () => {
      if (!mobile) {
          alert('Please fill all fields.');
          return;
      }
      try {
          const response = await fetch('http://localhost:4000/api/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({mobile}),
          });
  
          const data = await response.json();
          console.log("API response data:", data); // Kiểm tra dữ liệu trả về từ server
  
          if (response.ok) {
              // Điều hướng đến trang Home
              navigation.navigate("Login", { 
         
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
    <View>
        <Text style={{marginTop:25,fontSize:28,marginLeft:20, fontWeight:'bold'}}>Create an account</Text>
        <View style={styles.headerTop}>
            <Text style={{marginTop:35, marginLeft:20, fontSize:18}}>Enter your mobile number:</Text>
            <View style={styles.textInp}>
              <View style={styles.textInpLeft}>
                
              </View>
              <View style={styles.textInpRight}>
                <TextInput
                  style={{ width: '63%', height: 50, borderColor: 'black', borderWidth: 1, padding: 10, marginLeft:130, marginTop:18}}
                  placeholder='+1 Mobile number'
                  value={mobile}
                  onChangeText={setMobile}
                />
              </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        <Text style={styles.orText}>or</Text>
        <TouchableOpacity style={styles.buttonApple} onPress={() => navigation.navigate('')}>
              <Ionicons name="logo-apple" size={24} color="black" style={{marginLeft:33}}/>
              <Text style={styles.buttonTextApple}>Continue with Apple</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonFB} onPress={() => navigation.navigate('')}>
          <FontAwesome name="facebook" size={24} color="blue" style={{marginLeft:33}} />
              <Text style={styles.buttonTextFB}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonG} onPress={() => navigation.navigate('')}>
              <AntDesign name="google" size={24} color="red" style={{marginLeft:33}} />
              <Text style={styles.buttonTextG}>Continue with Google</Text>
        </TouchableOpacity>
          <View style={styles.textBottom}>
            <Text style={styles.agreementText}>
              <Text>By signing up, you agree to our</Text>{'\n'}
              <Text style={styles.linkText} > Terms of Service </Text>
              and
              <Text style={styles.linkText}> Privacy Policy</Text>.
            </Text>
          </View>
          <View style={{flexDirection:'row' ,justifyContent:'center', alignItems:'center', marginTop:18}}>
            <Text style={{textAlign:'center',marginTop:10,fontSize:16, textAlign:'center'}}>Already have an account?</Text> 
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={{textAlign:'center',color:'blue',fontSize:16, marginTop:10, marginLeft:7}}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3ebde0',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    width: '88%',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  orText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 19,
    color: 'gray',
  },
  buttonApple: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 15,
    alignSelf: 'center',
    width: '88%',
    border: '1px solid black',
    flexDirection:'row',
  },
  buttonTextApple: {
    color: 'black',
    marginLeft:10,
    fontSize :17,
  },
  buttonFB: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
    width: '88%',
    border: '1px solid blue',
    flexDirection:'row',
  },
  buttonTextFB: {
    color: 'blue',
    marginLeft:10,
    fontSize:17,
  },
  buttonG: {
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
    alignSelf: 'center',
    width: '88%',
    border: '1px solid red',
    flexDirection:'row',
  },
  buttonTextG: {
    fontSize:17,
    color: 'red',
    marginLeft:10,
  },
  textBottom: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  agreementText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 16,
    lineHeight: 22,
    borderColor: '#D0C1F7',
    padding: 17,
  },
  linkText: {
    textDecorationLine: 'underline',
  },
})