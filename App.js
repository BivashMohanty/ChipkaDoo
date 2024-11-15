// import React, { useState } from 'react';
// import { SafeAreaView, StyleSheet, ScrollView, ImageBackground } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Navbar from './components/Navbar';
// import CardComponent from './components/CardComponent';
// import MenuComponent from './components/MenuComponent';
// import Carousel from './components/Carousel';
// import CartScreen from './components/CartScreen';

// const Stack = createStackNavigator();

// const HomeScreen = ({ navigation }) => {
//   const [menuVisible, setMenuVisible] = useState(false);

//   return (
//     <SafeAreaView style={styles.container}>
//       <ImageBackground
//         source={require('./assets/nature.jpg')}
//         style={styles.backgroundImage}
//       >
//         <Navbar setMenuVisible={setMenuVisible} navigation={navigation} />
//         <ScrollView contentContainerStyle={styles.scrollContainer}>
//           {menuVisible && <MenuComponent setMenuVisible={setMenuVisible} />}
//           <CardComponent />
//           <Carousel />
//           <Carousel />
//           <Carousel />
//           <Carousel />
//         </ScrollView>
//       </ImageBackground>
//     </SafeAreaView>
//   );
// };

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen} />
//         <Stack.Screen name="Cart" component={CartScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   backgroundImage: {
//     flex: 1,
//     resizeMode: 'cover',
//     height:493,
//   },
//   scrollContainer: {
//     paddingTop: 70, 
//   },
// });

// export default App;


// import React from 'react';
// import { CartProvider } from './components/CartContext';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import HomeScreen from './components/HomeScreen';
// import CartScreen from './components/CartScreen';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <CartProvider>
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Home">
//           <Stack.Screen name="Home" component={HomeScreen} />
//           <Stack.Screen name="Cart" component={CartScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </CartProvider>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Navbar from './components/Navbar';
import CardComponent from './components/CardComponent';
import MenuComponent from './components/MenuComponent';
import Carousel from './components/Carousel';
import CartScreen from './components/CartScreen';
import ProductScreen from './components/ProductScreen';
import SummaryScreen from './components/SummaryScreen';
import { CartProvider } from './components/CartContext';

// Separate HomeScreen component
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
          <CardComponent navigation={navigation} />
          <Carousel />
          <Carousel />
          <Carousel />
          <Carousel />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

// Stack navigators for Home and Cart sections
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
    <Stack.Screen name="Product" component={ProductScreen} />
  </Stack.Navigator>
);

const CartStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Cart" component={CartScreen} />
    <Stack.Screen name="Summary" component={SummaryScreen} />
  </Stack.Navigator>
);

// Main App component
export default function App() {
  return (
    <CartProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Cart') {
                iconName = focused ? 'cart' : 'cart-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
          <Tab.Screen name="Cart" component={CartStack} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </CartProvider>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    height: 493,
  },
  scrollContainer: {
    paddingTop: 70,
  },
});
