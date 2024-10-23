import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import 'react-native-gesture-handler';


export default function Index() {
  return (
    <View style={styles.container}>
      {/* Icone de profil en haut à droite */}
      <TouchableOpacity style={styles.profileIcon}>
        <Image
          source={require('../../assets/images/mail.png')}  // Remplacer par ton icône de profil
          style={styles.profileImage}
        />
      </TouchableOpacity>

      {/* Section Onboarding */}
      <TouchableOpacity style={[styles.section, styles.onboarding]}>
        <Text style={styles.sectionText}>Onboarding suivis</Text>
      </TouchableOpacity>

      {/* Section Stat équipe */}
      <TouchableOpacity style={[styles.section, styles.teamStat]}>
        <Text style={styles.sectionText}>Stat équipe moy /semaine</Text>
      </TouchableOpacity>

      {/* Row des statistiques */}
      <View style={styles.row}>
        <TouchableOpacity style={[styles.statBox, styles.stat1]}>
          <Text style={styles.sectionText}>Stat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.statBox, styles.stat2]}>
          <Text style={styles.sectionText}>Stat</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.statBox, styles.stat3]}>
          <Text style={styles.sectionText}>Stat</Text>
        </TouchableOpacity>
      </View>
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
    borderRadius: 15,
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
    padding: 20,
  },
  onboarding: {
    backgroundColor: '#F4A261', // Couleur orangée
    flex: 2,
  },
  teamStat: {
    backgroundColor: '#E0E0E0', // Couleur grise
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statBox: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    flex: 1,
    margin: 5,
  },
  stat1: {
    backgroundColor: '#A8D5BA', // Couleur verte claire
  },
  stat2: {
    backgroundColor: '#F4A261', // Couleur orangée
  },
  stat3: {
    backgroundColor: '#E76F51', // Couleur rouge
  },
  sectionText: {
    fontSize: 18,
  },
});
