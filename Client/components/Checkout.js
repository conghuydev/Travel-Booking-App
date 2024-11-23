import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import AntDesign from '@expo/vector-icons/AntDesign';
const Checkout = () => {
    const navigation = useNavigation();
  const [paymentOption, setPaymentOption] = React.useState('payInFull');
  
  return (
    <ScrollView style={styles.container}>
        <View style={{flexDirection:"row"}}>
        <TouchableOpacity onPress={() => navigation.goBack() }>
          <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Confirm and pay</Text>
        </View>

      {/* Accommodation Info */}
      <View style={styles.card}>
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Text style={styles.priceText}>$20/night</Text>
            <Text style={styles.accommodationTitle}>Balian treehouse</Text>
            <View style={styles.ratingContainer}>
              <Text style={styles.ratingText}>⭐ 5.0</Text>
              <Text style={styles.reviewCount}>(262)</Text>
            </View>
          </View>
          <Image
            source={{
              uri: '', // Replace with your image URL
            }}
            style={styles.accommodationImage}
          />
        </View>
      </View>

      {/* Trip Info */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Your trip</Text>
        <View style={styles.row}>
          <View style={styles.tripInfoItem}>
            <Text style={styles.tripInfoLabel}>Dates</Text>
            <Text style={styles.tripInfoValue}></Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.editButton}>✎</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <View style={styles.tripInfoItem}>
            <Text style={styles.tripInfoLabel}>Guests</Text>
            <Text style={styles.tripInfoValue}></Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.editButton}>✎</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Payment Options */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Payment options</Text>
        <View style={styles.row}>
          <RadioButton
            value="payInFull"
            status={paymentOption === 'payInFull' ? 'checked' : 'unchecked'}
            onPress={() => setPaymentOption('payInFull')}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.paymentOptionTitle}>Pay in full</Text>
            <Text style={styles.paymentOptionDescription}>
              Pay $30 now to finalize your booking.
            </Text>
          </View>
        </View>
        <View style={styles.row}>
          <RadioButton
            value="payPart"
            status={paymentOption === 'payPart' ? 'checked' : 'unchecked'}
            onPress={() => setPaymentOption('payPart')}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.paymentOptionTitle}>Pay a part now</Text>
            <Text style={styles.paymentOptionDescription}>
              You can make a partial payment now and the remaining amount at a later time.
            </Text>
          </View>
        </View>
      </View>

      {/* Price Details */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Price details</Text>
        <View style={styles.row}>
          <Text>$20 x 1 night</Text>
          <Text>$20</Text>
        </View>
        <View style={styles.row}>
          <Text>Kayak fee</Text>
          <Text>$5</Text>
        </View>
        <View style={styles.row}>
          <Text>Street parking fee</Text>
          <Text>$5</Text>
        </View>
        <View style={[styles.row, styles.totalRow]}>
          <Text>Total (USD)</Text>
          <Text style={styles.totalPrice}>$30</Text>
        </View>
      </View>

      {/* Book Now Button */}
      <TouchableOpacity style={styles.bookNowButton}>
        <Text style={styles.bookNowButtonText}>Book now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 20,
  },
  headerText: {
    marginLeft:70,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    elevation: 3,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  priceText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  accommodationTitle: {
    fontSize: 16,
    color: '#555',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: 'orange',
    marginRight: 5,
  },
  reviewCount: {
    color: '#777',
  },
  accommodationImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  tripInfoItem: {
    flex: 1,
  },
  tripInfoLabel: {
    color: '#555',
  },
  tripInfoValue: {
    fontSize: 15,
  },
  editButton: {
    color: '#007bff',
    fontSize: 16,
  },
  paymentOptionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  paymentOptionDescription: {
    fontSize: 14,
    color: '#555',
  },
  totalRow: {
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    paddingTop: 10,
    marginTop: 10,
  },
  totalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bookNowButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  bookNowButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
