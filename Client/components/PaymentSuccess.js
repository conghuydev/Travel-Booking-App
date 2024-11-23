import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const PaymentSuccess = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    // Lấy giờ hiện tại
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    setCurrentTime(formattedTime); // Lưu giờ định dạng vào state
  }, []);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://img.icons8.com/emoji/96/000000/check-mark-emoji.png' }} // Link biểu tượng check
          style={styles.icon}
        />
        <Text style={styles.successText}>Payment success!</Text>
      </View>

      {/* Details */}
      <View style={styles.detailsContainer}>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Ref number:</Text>
          <Text style={styles.value}>00000072697027</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Date:</Text>
          <Text style={styles.value}>{new Date().toLocaleDateString()}</Text> {/* Hiển thị ngày hiện tại */}
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Time:</Text>
          <Text style={styles.value}>{currentTime}</Text> {/* Hiển thị giờ hiện tại */}
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.label}>Payment method:</Text>
          <Text style={styles.value}>Credit card</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.detailRow}>
          <Text style={styles.label}>Amount:</Text>
          <Text style={styles.value}>$30</Text>
        </View>
        <TouchableOpacity style={styles.buttonPDF}>
          <Text style={styles.buttonText}>Get PDF receipt</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonView}>
          <Text style={styles.buttonTextView}>View booking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F8FA',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  successText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 10,
  },
  detailsContainer: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Tạo khoảng cách giữa label và value
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  value: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  buttonPDF: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 40,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  buttonView: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonTextView: {
    fontSize: 16,
    color: '#FFF',
  },
});

export default PaymentSuccess;
