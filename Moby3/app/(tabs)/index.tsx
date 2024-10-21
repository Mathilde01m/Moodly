import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Icone de profil en haut à droite */}
      <TouchableOpacity style={styles.profileIcon}>
        <Image 
          source={require('../../assets/images/home.png')} 
          style={styles.profileImage} 
        />
      </TouchableOpacity>

      {/* Section Onboarding */}
      <TouchableOpacity style={[styles.section, styles.onboarding]}>
        <Text style={styles.sectionText}>Onboarding</Text>
      </TouchableOpacity>

      {/* Section Stat */}
      <View style={styles.row}>
        <TouchableOpacity style={[styles.sectionSmall, styles.stat]}>
          <Text style={styles.sectionText}>Stat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.sectionSmall, styles.stat]}>
          <Text style={styles.sectionText}>Stat</Text>
        </TouchableOpacity>
      </View>

      {/* Section Achat */}
      <TouchableOpacity style={[styles.section, styles.achat]}>
        <Text style={styles.sectionText}>Achat</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileIcon: {
    alignSelf: 'flex-end',
    padding: 10,
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15, // Optionnel, si tu veux arrondir l'icône
  },
  section: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  onboarding: {
    backgroundColor: '#F4A261',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionSmall: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FDE2E4',
    borderRadius: 10,
    marginHorizontal: 5,
    marginBottom: 20,
  },
  achat: {
    backgroundColor: '#D9E2EC',
  },
  sectionText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});