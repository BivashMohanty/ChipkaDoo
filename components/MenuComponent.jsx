import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MenuComponent = ({ setMenuVisible }) => {
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => setMenuVisible(false)}>
        <Text style={styles.menuItem}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setMenuVisible(false)}>
        <Text style={styles.menuItem}>Shop</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setMenuVisible(false)}>
        <Text style={styles.menuItem}>About Us</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    // backgroundColor: '#fff',
    // padding: 20,
    // borderRadius: 8,
    // marginHorizontal: 10,
    // marginTop: 10,
    position:'absolute',
    top:1,
    left:14,
    right:14,
    backgroundColor:'#fff',
    padding:20,
    zindex:1,
    borderRadius:8,
    boxShadow:'0 2px 10px rgba(0,0,0,0.1)'
  },
  menuItem: {
    fontSize: 18,
    padding: 10,
  },
});

export default MenuComponent;