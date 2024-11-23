import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from './components/SignUp';
import LaunchScreen from './components/LaunchScreen';
import Login from './components/Login';
import Home from './components/Home';
import Search_SelectADestination from './components/Search_SelectADestination';
import Search_SelectTimeRange from './components/Search_SelectTimeRange';
import Search_AddGuests from './components/Search_AddGuests';
import SearchResults from './components/SearchResults';
import HouseDetails from './components/HouseDetails';
import HouseDetails_All from './components/HouseDetails_All';
import HouseDetails_Des from './components/HouseDetails_Des';
import HouseDetails_Fac from './components/HouseDetails_Fac';
import Checkout from './components/Checkout';
import Favorite from './components/Favorite';
import PaymentSuccess from './components/PaymentSuccess';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PaymentSuccess" screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Search_SelectADestination" component={Search_SelectADestination} />
        <Stack.Screen name="Search_SelectTimeRange" component={Search_SelectTimeRange} /> 
        <Stack.Screen name="Search_AddGuests" component={Search_AddGuests} />
        <Stack.Screen name="HouseDetails_All" component={HouseDetails_All}/>
        <Stack.Screen name="HouseDetails_Des" component={HouseDetails_Des} />
        <Stack.Screen name="HouseDetails_Fac" component={HouseDetails_Fac} />
        <Stack.Screen name="SearchResults" component={SearchResults} />
        <Stack.Screen name="Favorite" component={Favorite} />
        <Stack.Screen name="HouseDetails" component={HouseDetails} />
        <Stack.Screen name="Checkout" component={Checkout} /> */}
        <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
