// Navbar.jsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native';

const Navbar = ({ setMenuVisible, navigation }) => {
  const [searchActive, setSearchActive] = useState(false);

  const handleSearch = () => {
    setSearchActive(!searchActive);
    navigation.navigate('Cart');
  };

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/logo.png')} style={styles.logo} />
          
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={handleSearch}>
            <View style={styles.cartIcon}>
              <Text style={styles.cartIconText}>O</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setMenuVisible(true)}>
            <View style={styles.menuIcon}>
              <Text style={styles.menuIconText}>≡</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* {searchActive && (
        <View style={styles.searchBar}>
          <TextInput style={styles.searchInput} placeholder="Search..." />
        </View>
      )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 4,
    paddingLeft: 14,
    paddingRight: 14,
    backgroundColor: 'transparent',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 8,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  logoText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartIcon: {
    backgroundColor: '#666',
    borderRadius: 20,
    padding: 10,
  },
  cartIconText: {
    color: '#fff',
    fontSize: 18,
  },
  menuIcon: {
    backgroundColor: '#666',
    borderRadius: 20,
    padding: 10,
    marginLeft: 10,
  },
  menuIconText: {
    color: '#fff',
    fontSize: 24,
  },
  searchBar: {
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  searchInput: {
    fontSize: 18,
  },
  menu: {
    marginTop: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
});

export default Navbar;