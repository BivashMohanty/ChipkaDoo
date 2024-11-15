
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const CardComponent = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>NEW ARRIVALS</Text>
      <Text style={styles.description}>
        Our new collection of anime stickers are available, now go check out now!!!
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#F0F0F0',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50, // Added marginTop to create space between Navbar and CardComponent
    paddingHorizontal: 30, // Adjust left and right space
    marginLeft: 14,
    marginRight: 14,
    marginTop: 104,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    // backgroundColor: '#000',
    // paddingVertical: 10,
    // paddingHorizontal: 20,
    // borderRadius: 5,
    paddingTop: 12, // 0.75rem = 12px
    paddingRight: 32, // 2rem = 32px
    paddingBottom: 12, // 0.75rem = 12px
    paddingLeft: 32, // 2rem = 32px
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2, // 0.125rem = 2px (same for all sides)
    borderColor: '#1b748ad3', // Example HEX color equivalent
    borderRadius: 500, // same for all corners
    backgroundColor: 'black',
    fontFamily: 'Hkgrotesk', 
    color: 'hsla(0, 0%, 100%, 1)',
    fontSize: 18.29,
    textAlign: 'center',
    letterSpacing: 0.5, 
  },
  buttonHover: {
    backgroundColor: 'transparent',
    color: '#a6d0f27b', 
  },
  buttonMedium: {
    fontSize: 16, 
  },

  buttonText: {
    color: '#FFF',
    fontSize: 16,
  },
});

export default CardComponent;
