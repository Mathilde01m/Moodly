import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';

// Importation des écrans
import HomeScreen from '../../../screens/HomeScreen';
import AssistanceScreen from '../../../screens/AssistanceScreen';
import PayScreen from '../../../screens/PayScreen';
import MailScreen from '../../../screens/MailScreen';

// Créer le Tab Navigator
const Tab = createBottomTabNavigator();

export default function Navbar() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Masquer le header
          tabBarIcon: ({ focused }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = require('../assets/images/home.png');
            } else if (route.name === 'Assistance') {
              iconName = require('../assets/images/profile.png');
            } else if (route.name === 'Pay') {
              iconName = require('../assets/images/profile.png');
            } else if (route.name === 'Mail') {
              iconName = require('../assets/images/mail.png');
            }

            return <Image source={iconName} style={{ width: 25, height: 25, tintColor: focused ? 'black' : 'gray' }} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarShowLabel: false, // Masquer les étiquettes sous les icônes
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Assistance" component={AssistanceScreen} />
        <Tab.Screen name="Pay" component={PayScreen} />
        <Tab.Screen name="Mail" component={MailScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}