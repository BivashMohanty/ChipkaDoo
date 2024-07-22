import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Navbar from './components/Navbar';
import CardComponent from './components/CardComponent';
import MenuComponent from './components/MenuComponent';
import Carousel from './components/Carousel';
import CartPage from './components/CartPage';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('./assets/nature.jpg')}
        style={styles.backgroundImage}
      >
        <Navbar setMenuVisible={setMenuVisible} navigation={navigation} />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {menuVisible && <MenuComponent setMenuVisible={setMenuVisible} />}
          <CardComponent />
          <Carousel />
          <Carousel />
          <Carousel />
          <Carousel />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Cart" component={CartPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height:493,
  },
  scrollContainer: {
    paddingTop: 70, 
  },
});

export default App;