import { View, StyleSheet, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
const HouseDetails = ({ route }) => {
  const navigation = useNavigation();
  const { imageSource } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          style={styles.headerImage}
          source={imageSource} 
          resizeMode="cover"
        />
        <View style={styles.headerOverlay}>
          <View style={styles.headerButtons}>
            <TouchableOpacity style={styles.iconButton} onPress={()=> navigation.navigate('SearchResults')}>
              <Image
                style={styles.icon}
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8adf6a88577ae22a413b99dbd4ebb0ca29900a9e6ac4449b271b0b2c63aa7738?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac" }}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image
                style={styles.icon}
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/483f3bb71ef4ec39359d9a9c0152b785b4678b9d643a7e30454ab5a94efe8b49?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac" }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <View style={styles.tagContainer}>
            <Image
              style={styles.menuIcon}
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/bb1c6787afc086f73f33ecb38159d5d4e1e4b66634fc17f5da23531020c0a869?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac" }}
              resizeMode="contain"
            />
            <View style={styles.tag}>
              <View style={styles.tagFrame} />
            </View>
          </View>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Balian treehouse</Text>
          <View style={styles.locationContainer}>
            <Image
              style={styles.locationIcon}
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8ad80825edef20255d951261f5924a89371f40882f3b5d0870804acd4d6760aa?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac" }}
              resizeMode="contain"
            />
            <Text style={styles.locationText}>Bali, Indonesia</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.viewMapText}>View map</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingInner}>
            <Image
              style={styles.starIcon}
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/cd2e9632f523109b525d69a63c2d9155bc3136fb6b8550ccb89f70aa55af820b?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac" }}
              resizeMode="contain"
            />
            <Text style={styles.ratingText}>4.5/5</Text>
          </View>
          <TouchableOpacity style={styles.reviewsButton}>
            <Text style={styles.reviewsText} onPress={()=>navigation.navigate('HouseDetails_All')}>262 reviews</Text>
            <Image
              style={styles.chevronIcon}
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/81c33e8ec50dba8d0cbe00f371206f20aa53c096ead671bd7ffcf2c31bfc4ef1?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <View style={styles.facilitiesContainer}>
          <Text style={styles.sectionTitle}>Facilities & services</Text>
          <View style={styles.tagContainer}>
            {["2 Guests", "1 bedroom", "1 bed", "1 bath"].map((item, index) => (
              <View key={index} style={styles.facilityTag}>
                <Text style={styles.facilityTagText}>{item}</Text>
              </View>
            ))}
          </View>
          {[
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/b5e64224c76d2c263ebd15c4bca3fee7de60fe9b80b5e0cfbeaa5e6696047b50?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac", name: "Wifi" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/531a144911c1478e652082522fd8378739e9cf15bc5818f1c4b581951a7547d9?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac", name: "Kitchen" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f89c664fea989c8acccef77d092bfe8d0e936899046562fee72dfbe24fdb9184?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac", name: "Pool" },
            { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/f219e3355919bd8fb6e854277738de6fd5c24743f3a68b344a6f143d4ebb274d?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac", name: "Garden" },
          ].map((facility, index) => (
            <View key={index} style={styles.facilityItem}>
              <Image
                style={styles.facilityIcon}
                source={{ uri: facility.icon }}
                resizeMode="contain"
              />
              <Text style={styles.facilityName}>{facility.name}</Text>
            </View>
          ))}
          <TouchableOpacity style={styles.showAllButton}>
            <Text style={styles.showAllText} onPress={()=>navigation.navigate('HouseDetails_Fac')}>Show all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.reviewsContainer}>
          <View style={styles.reviewsHeader}>
            <View>
              <Text style={styles.sectionTitle}>Reviews</Text>
              <Text style={styles.overallRating}>4.5 /5</Text>
            </View>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>See all</Text>
              <Image
                style={styles.chevronIcon}
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/9155d7791a25713f23d642c8af33206a6eadd85119af3e25bbd8c05115ca6b6b?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac" }}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          {[
            {
              name: "Jinny Oslin",
              avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/368434c44ce302fbf587ac51a747c6996a547ace59645ca6a979274244f92a2e?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac",
              time: "A day ago",
              rating: "https://cdn.builder.io/api/v1/image/assets/TEMP/828364a1d5b805c71cae4b946f2e31eba56c5516e74d1e7268391ce0a3caaa77?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac",
              comment: "The location was perfect, the house was spacious and clean, and the amenities ....",
            },
            {
              name: "Christopher Brown",
              avatar: "https://cdn.builder.io/api/v1/image/assets/TEMP/e8372435d56da1be19c29e6b649b13600582baf53954abddb93f9e7321e24179?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac",
              time: "A day ago",
              comment: "We loved staying in this charming home! It had all the amenities we needed, and ....",
            },
          ].map((review, index) => (
            <View key={index} style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <Image
                  style={styles.avatar}
                  source={{ uri: review.avatar }}
                  resizeMode="contain"
                />
                <View>
                  <Text style={styles.reviewerName}>{review.name}</Text>
                  <Text style={styles.reviewTime}>{review.time}</Text>
                </View>
              </View>
              {review.rating && (
                <Image
                  style={styles.ratingStars}
                  source={{ uri: review.rating }}
                  resizeMode="contain"
                />
              )}
              <Text style={styles.reviewComment}>{review.comment}</Text>
            </View>
          ))}
        </View>

        <View style={styles.policiesContainer}>
          <Text style={styles.sectionTitle}>Policies</Text>
          <View style={styles.rulesContainer}>
            <Text style={styles.subtitle}>House rules</Text>
            <View style={styles.ruleItem}>
              <Image
                style={styles.icon}
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/29207c08b2475cfcd56191a1490aece2c4b96c9241c8f8de3ca142d43dceefef?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac" }}
                resizeMode="contain"
              />
              <Text style={styles.ruleText}>Earliest check-in time: 14:00</Text>
            </View>
            <View style={styles.ruleItem}>
              <Image
                style={styles.icon}
                source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/29207c08b2475cfcd56191a1490aece2c4b96c9241c8f8de3ca142d43dceefef?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac" }}
                resizeMode="contain"
              />
              <Text style={styles.ruleText}>Latest check-out time: 12:00</Text>
            </View>
          </View>
          <Text style={styles.subtitle}>Check-in policies</Text>
          <Text style={styles.policyText}>
            It's always a good idea to confirm the check-in policy directly with the owner/manager before your arrival so that you can...
          </Text>
          <TouchableOpacity style={styles.viewMoreButton}>
            <Text style={styles.viewMoreText}>View more</Text>
            <Image
              style={styles.chevronIcon}
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8357d17070c09a46b49cbb4c71f822ad6d630d558916288ababc65bff720498d?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Image
            style={styles.descriptionImage}
            source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/6bc476a2148cc2757b57f69dd8e7b925c23ae1a10df74d64203063b3576d4a1e?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac" }}
            resizeMode="contain"
          />
          <Text style={styles.descriptionText}>
            Looking for the perfect place to relax and unwind? This stunning Balinese villa is the ultimate tropical getaway. Located on a quiet street just minutes from the beach, this...
          </Text>
          <TouchableOpacity style={styles.viewMoreButton}>
            <Text style={styles.viewMoreText} onPress={()=>navigation.navigate('HouseDetails_Des')}>View more</Text>
            <Image
              style={styles.chevronIcon}
              source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/8357d17070c09a46b49cbb4c71f822ad6d630d558916288ababc65bff720498d?placeholderIfAbsent=true&apiKey=1fd0be268d7749f998daac11bd5b81ac" }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bookingBar}>
        <View style={styles.priceContainer}>
          <Text style={styles.fromText}>From:</Text>
          <Text style={styles.priceText}>$20 /night</Text>
        </View>
        <TouchableOpacity style={styles.bookButton}>
          <Text style={styles.bookButtonText}>Book now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default HouseDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    width: '100%',
  },
  headerImage: {
    width: '100%',
    aspectRatio: 1.67,
  },
  headerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    justifyContent: 'space-between',
  },
  headerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  tagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    width: 24,
    height: 24,
  },
  tag: {
    marginLeft: 20,
    width: 50,
    height: 28,
    borderRadius: 14,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagFrame: {
    width: 40,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
  },
  titleContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: '#171A1F',
    fontFamily: 'Montserrat, sans-serif',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  locationIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  locationText: {
    fontSize: 14,
    color: '#323842',
  },
  viewMapText: {
    fontSize: 14,
    color: '#3EBDE0',
    marginTop: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#F8F9FA',
    borderRadius: 4,
    marginHorizontal: 20,
  },
  ratingInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    width: 12,
    height: 12,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#323842',
  },
  reviewsButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reviewsText: {
    fontSize: 14,
    color: '#323842',
    marginRight: 7,
  },
  chevronIcon: {
    width: 20,
    height: 20,
  },
  contentContainer: {
    paddingHorizontal: 20,
  },
  facilitiesContainer: {
    paddingVertical: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#171A1F',
    fontFamily: 'Montserrat, sans-serif',
    marginBottom: 8,
  },
  facilityTag: {
    backgroundColor: '#F8F9FA',
    borderRadius: 14,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 4,
    marginBottom: 4,
  },
  facilityTagText: {
    fontSize: 12,
    color: '#323842',
  },
  facilityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  facilityIcon: {
    width: 16,
    height: 16,
    marginRight: 8,
  },
  facilityName: {
    fontSize: 14,
    color: '#323842',
  },
  showAllButton: {
    borderWidth: 1,
    borderColor: '#909590',
    borderRadius: 4,
    paddingVertical: 7,
    alignItems: 'center',
    marginTop: 20,
  },
  showAllText: {
    fontSize: 14,
    color: '#909590',
  },
  reviewsContainer: {
    paddingVertical: 20,
  },
  reviewsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  overallRating: {
    fontSize: 24,
    color: '#323842',
    marginTop: 4,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontSize: 12,
    color: '#424955',
    marginRight: 4,
  },
  reviewItem: {
    backgroundColor: '#F8F9FA',
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 8,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#171A1F',
  },
  reviewTime: {
    fontSize: 12,
    color: '#565E6C',
  },
  ratingStars: {
    width: 80,
    height: 16,
    marginBottom: 8,
  },
  reviewComment: {
    fontSize: 14,
    color: '#323842',
  },
  policiesContainer: {
    paddingVertical: 20,
  },
  rulesContainer: {
    backgroundColor: '#F8F9FA',
    borderRadius: 4,
    padding: 12,
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#171A1F',
    marginBottom: 8,
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  ruleText: {
    fontSize: 14,
    color: '#323842',
    marginLeft: 8,
  },
  policyText: {
    fontSize: 14,
    color: '#323842',
    marginBottom: 12,
  },
  viewMoreButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#909590',
    borderRadius: 4,
    paddingVertical: 7,
    marginTop: 12,
  },
  viewMoreText: {
    fontSize: 14,
    color: '#909590',
    marginRight: 4,
  },
  descriptionContainer: {
    paddingVertical: 20,
  },
  descriptionImage: {
    width: '100%',
    aspectRatio: 1.67,
    marginBottom: 12,
  },
  descriptionText: {
    fontSize: 14,
    color: '#323842',
    marginBottom: 12,
  },
  bookingBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  fromText: {
    fontSize: 12,
    color: '#909590',
    marginRight: 4,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#171A1F',
  },
  bookButton: {
    backgroundColor: '#3EBDE0',
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  bookButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
})
