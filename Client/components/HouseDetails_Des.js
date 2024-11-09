import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const featureData = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e212f790663e0f9754b5c3596bb90e418876617317718192ddd1bef327b6524f?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac',
    text: 'Consectetur magna consectetur',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e212f790663e0f9754b5c3596bb90e418876617317718192ddd1bef327b6524f?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac',
    text: 'Voluptate magna fugiat tempor incididunt',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e212f790663e0f9754b5c3596bb90e418876617317718192ddd1bef327b6524f?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac',
    text: 'Aliqua in in mollit laboris tempor in ut incididunt',
  },
];

const FeatureItem = ({ icon, text }) => (
  <View style={styles.featureContainer}>
    <Image resizeMode="contain" source={{ uri: icon }} style={styles.featureIcon} />
    <Text style={styles.featureText}>{text}</Text>
  </View>
);

const HouseDetails_Des = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleOpenMap = () => {
    Linking.openURL('https://maps.google.com/?q=Bali,Indonesia');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerContainer}>
       
        <View style={styles.headerTextContainer}>
          <TouchableOpacity onPress={handleBackPress} accessibilityLabel="Go back">
            <Image
              resizeMode="contain"
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/97cf53779798d50f969f733d234cc48adf36db161c1f2fb4c0201ea3820a3707?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac' }}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <View style={styles.descriptionTextContainer}>
            <Text style={styles.descriptionText}>Description</Text>
          </View>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <Image
          resizeMode="contain"
          source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0bc9eac6cbc0f5fd5b23ea9607f72fcdc7f8e676306ffa7b9ef714b3c58e3542?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac' }}
          style={styles.contentImage}
          accessible={true}
          accessibilityLabel="Image of the house interior"
        />
        <Text style={styles.mainDescription}>
          Looking for the perfect place to relax and unwind? This stunning Balinese villa is the ultimate tropical getaway. Located on a quiet street just minutes from the beach, this beautiful home offers everything you need for a luxurious and comfortable stay.
        </Text>
        <View style={styles.locationContainer}>
          <View style={styles.locationInfo}>
            <Image
              resizeMode="contain"
              source={{ uri: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8ad80825edef20255d951261f5924a89371f40882f3b5d0870804acd4d6760aa?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac' }}
              style={styles.locationIcon}
            />
            <Text style={styles.locationText}>Bali, Indonesia</Text>
          </View>
          <TouchableOpacity onPress={handleOpenMap} accessibilityLabel="Open map">
            <Text style={styles.openMapText}>Open map</Text>
          </TouchableOpacity>
        </View>
        {featureData.map((feature, index) => (
          <FeatureItem key={index} icon={feature.icon} text={feature.text} />
        ))}
      </View>
    </ScrollView>
  );
};

export default HouseDetails_Des;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 230,
    maxWidth: 480,
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  headerContainer: {
    width: '100%',
    alignItems: 'stretch',
  },
  headerImage: {
    width: '100%',
    aspectRatio: 9.71,
  },
  headerTextContainer: {
    flexDirection: 'row',
    marginTop: 12,
    paddingHorizontal: 20,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backIcon: {
    width: 24,
    aspectRatio: 1,
  },
  descriptionTextContainer: {
    flex: 1,
  },
  descriptionText: {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: 14,
    fontWeight: '700',
    color: 'rgba(50, 56, 66, 1)',
    textAlign: 'center',
  },
  contentContainer: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
  contentImage: {
    width: '100%',
    aspectRatio: 1.67,
    borderRadius: 4,
  },
  mainDescription: {
    marginTop: 16,
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 12,
    lineHeight: 20,
    color: 'rgba(50, 56, 66, 1)',
  },
  locationContainer: {
    flexDirection: 'row',
    marginTop: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    width: 16,
    aspectRatio: 1,
    marginRight: 4,
  },
  locationText: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 14,
    color: 'rgba(50, 56, 66, 1)',
  },
  openMapText: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 14,
    color: 'rgba(62, 189, 224, 1)',
  },
  featureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  featureIcon: {
    width: 16,
    aspectRatio: 1,
    marginRight: 8,
  },
  featureText: {
    flex: 1,
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 14,
    color: 'rgba(50, 56, 66, 1)',
  },
});
