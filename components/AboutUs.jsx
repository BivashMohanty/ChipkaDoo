import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const teamMembers = [
  { name: 'Tanmaya Sahoo', uri: '/assets/naruto.jpg' },
  { name: 'Darshan Mishra', uri: '/assets/indra.jpg' },
  { name: 'Abhishek Dhal', uri: '/assets/madara.jpg' },
  { name: 'Ansuman Panda', uri: '/assets/sasuke.jpg' },
  { name: 'Bivash Bishmit Mohanty', uri: '/assets/minato.png' },
];

const AboutUs = () => {
  const [isHovered, setIsHovered] = useState(false);

  const renderTeamMembers = () => {
    return teamMembers.map((member, index) => (
      <View key={index} style={styles.teamMember}>
        <Image style={styles.teamMemberImage} source={{ uri: member.uri }} />
        <Text style={styles.teamMemberName}>{member.name}</Text>
      </View>
    ));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.headerBackgroundImage}
          source={{ uri: '/assets/mainheadingpicture.jpg' }}
        />
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerTitle}>About Us</Text>
          <Text style={styles.headerSubtitle}>Welcome to CoolStickers! Your one-stop shop for fun and creative stickers.</Text>
          <TouchableOpacity
            style={[styles.button, isHovered && styles.buttonHover]}
            onPress={() => {}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Text style={styles.buttonText}>EXPLORE</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.sectionText}>
          We aim to provide a wide variety of unique and high-quality stickers to help you express yourself creatively.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Why Choose Us?</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Wide Variety</Text>
          <Text style={styles.cardText}>
            Explore an extensive collection of stickers for every occasion and interest.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quality Products</Text>
          <Text style={styles.cardText}>
            All our stickers are made with premium materials for long-lasting use.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Customer Satisfaction</Text>
          <Text style={styles.cardText}>
            We prioritize our customers and strive to provide the best shopping experience.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Meet the Team</Text>
        <View style={styles.teamContainer}>
          {renderTeamMembers()}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    position: 'relative',
  },
  headerBackgroundImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  headerTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'white',
  },
  headerSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
  },
  button: {
    paddingTop: 12,
    paddingRight: 32,
    paddingBottom: 12,
    paddingLeft: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#1b748ad3',
    borderRadius: 500,
    backgroundColor: 'black',
    transitionProperty: 'color, backgroundColor',
    transitionDuration: '300ms',
    transitionTimingFunction: 'ease, ease-in-out',
  },
  buttonHover: {
    backgroundColor: 'transparent',
    borderColor: '#a6d0f27b',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    letterSpacing: 1,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
  },
  card: {
    backgroundColor: '#F97272',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 14,
    lineHeight: 20,
  },
  teamContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 40,
  },
  teamMember: {
    width: '45%',
    alignItems: 'center',
    margin: 10,
  },
  teamMemberImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  teamMemberName: {
    fontSize: 14,
    marginTop: 5,
    textAlign: 'center',
  },
});

export default AboutUs;
