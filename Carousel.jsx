import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const images = [
    require('../assets/f11.jpg'),
    require('../assets/footer3.jpg'),
    require('../assets/sa.jpg'),
    require('../assets/c4.jpg'),
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [leftArrowPressed, setLeftArrowPressed] = useState(false);
  const [rightArrowPressed, setRightArrowPressed] = useState(false);

  const handleNext = () => {
    setRightArrowPressed(true);
    setTimeout(() => setRightArrowPressed(false), 200);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setLeftArrowPressed(true);
    setTimeout(() => setLeftArrowPressed(false), 200);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <View style={styles.carouselContainer}>
      <View style={styles.imageContainer}>
        <Image source={images[currentIndex]} style={styles.image} />
        <TouchableOpacity
          onPress={handlePrev}
          style={[styles.arrowContainer, styles.leftArrow, leftArrowPressed && styles.arrowPressed]}
        >
          <Ionicons name="arrow-back" size={32} color={leftArrowPressed ? 'white' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNext}
          style={[styles.arrowContainer, styles.rightArrow, rightArrowPressed && styles.arrowPressed]}
        >
          <Ionicons name="arrow-forward" size={32} color={rightArrowPressed ? 'white' : 'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: 'center',
    //padding:20,
    marginLeft:14,
    marginRight:14,
    marginTop:70,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: 335,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  arrowContainer: {
    position: 'absolute',
    top: '50%',
    padding: 10,
    backgroundColor: 'lightgray',
    borderRadius: 20,
    transform: [{ translateY: -16 }],
  },
  leftArrow: {
    left: 10,
  },
  rightArrow: {
    right: 10,
  },
  arrowPressed: {
    backgroundColor: 'black',
  },
});

export default Carousel;