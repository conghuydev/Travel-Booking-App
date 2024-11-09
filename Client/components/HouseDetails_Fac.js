import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { TouchableOpacity } from 'react-native-web';
const HouseDetails_Fac = () => {
    const navigation = useNavigation();
    const FacilityItem = ({ icon, title }) => (
        <View style={styles.itemContainer}>
          <MaterialCommunityIcons name={icon} size={24} color="black" />
          <Text style={styles.itemText}>{title}</Text>
        </View>
      );
  return (
    <ScrollView style={styles.container}>
        <View style={{flexDirection:'row', marginTop:20, marginLeft:20}}>
        <TouchableOpacity>
        <AntDesign name="left" size={30} color="black" onPress={() => navigation.goBack()} />
        </TouchableOpacity>
        <Text style={{fontSize:20, fontWeight:'bold', marginLeft:40}}>Facilities & services</Text>
      </View>

      <View style={styles.section}>
        <Text style={{fontSize:20,fontWeight:'bold',marginBottom:10, marginTop:20}}>Facilities</Text>
        <Text style={styles.infoText}>2 Guests    1 bedroom    1 bed    1 bath</Text>

        <FacilityItem icon="wifi" title="Wifi" />
        <View style={styles.divider} />
        <FacilityItem icon="kettle-outline" title="Kitchen" />
        <View style={styles.divider} />
        <FacilityItem icon="dumbbell" title="Exercise equipment" />
        <View style={styles.divider} />
        <FacilityItem icon="pool" title="Pool" />
        <View style={styles.divider} />
        <FacilityItem icon="flower-outline" title="Garden" />
        <View style={styles.divider} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Services</Text>

        <Text style={styles.subSectionHeader}>Cleaning & laundry</Text>
        <FacilityItem icon="washing-machine" title="Washer" />
        <View style={styles.divider} />
        <FacilityItem icon="tumble-dryer" title="Free dryer - In unit" />
        <View style={styles.divider} />
        <FacilityItem icon="iron-outline" title="Iron" />
        <View style={styles.divider} />
        <Text style={styles.subSectionHeader}>Bathroom</Text>
        <FacilityItem icon="bathtub-outline" title="Bathtub" />
        <View style={styles.divider} />
        <FacilityItem icon="hair-dryer" title="Hair dryer" />
      </View>
    </ScrollView>
  )
}

export default HouseDetails_Fac

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
      },
      header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      section: {
        marginBottom: 20,
      },
      sectionHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 8,
      },
      infoText: {
        fontSize: 14,
        color: '#666',
        marginBottom: 12,
      },
      subSectionHeader: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 16,
        marginBottom: 8,
      },
      itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
      },
      itemText: {
        marginLeft: 12,
        fontSize: 14,
      },
      divider: {
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        marginBottom:5,
        marginTop:5,
      },
})