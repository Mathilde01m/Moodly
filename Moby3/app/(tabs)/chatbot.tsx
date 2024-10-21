import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

export default function AssistanceScreen() {
  // État pour gérer les messages
  const [messages, setMessages] = useState([
    { id: 1, text: "Bienvenue à l'assistance", type: 'received' },
    { id: 2, text: "Comment puis-je vous aider ?", type: 'received' }
  ]);
  const [inputText, setInputText] = useState('');

  // Fonction pour envoyer un message
  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { id: messages.length + 1, text: inputText, type: 'sent' }]);
      setInputText(''); // Efface le champ de saisie après l'envoi
    }
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={90} // Ajustement pour iOS si nécessaire
    >
      {/* Icone de profil en haut à droite, avec le même style que dans HomeScreen */}
      <TouchableOpacity style={styles.profileIcon}>
        <Image 
          source={require('../../assets/images/mail.png')}  // Remplace par l'icône de profil
          style={styles.profileImage} 
        />
      </TouchableOpacity>

      {/* Icône "+" et réglages à gauche */}
      <View style={styles.leftIcons}>
        <TouchableOpacity style={styles.iconButton}>
          <Image 
            source={require('../../assets/images/mail.png')}  // Icône d'ajout (assurez-vous que le fichier existe)
            style={styles.iconImage} 
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconButton}>
          <Image 
            source={require('../../assets/images/mail.png')}  // Icône des réglages (assurez-vous que le fichier existe)
            style={styles.iconImage} 
          />
        </TouchableOpacity>
      </View>

      {/* Liste des messages */}
      <ScrollView 
        style={styles.messageList} 
        contentContainerStyle={{ paddingBottom: 100 }} // Assure de l'espace pour la zone de saisie
      >
        {messages.map((message) => (
          <View key={message.id} style={[styles.messageBox, message.type === 'sent' ? styles.sentMessage : styles.receivedMessage]}>
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Zone de saisie en bas */}
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input} 
          placeholder="Entre t’as demande"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Image 
            source={require('../../assets/images/mail.png')}  // Icône d'envoi (assurez-vous que le fichier existe)
            style={styles.sendImage} 
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileIcon: {
    alignSelf: 'flex-end', // Assure que l'icône est à droite
    padding: 10,
    position: 'absolute',
    top: 20,
    right: 20,  // Similaire au style sur la page Home
  },
  profileImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  leftIcons: {
    position: 'absolute',
    top: 100,
    left: 20,
    alignItems: 'flex-start',
  },
  iconButton: {
    marginVertical: 15,
  },
  iconImage: {
    width: 30,
    height: 30,
  },
  messageList: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 500,
  },
  messageBox: {
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    maxWidth: '80%',
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',  // Couleur pour les messages envoyés
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#E0E0E0',  // Couleur pour les messages reçus
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#E0E0E0',
    borderRadius: 50,
    padding: 10,
  },
  sendImage: {
    width: 20,
    height: 20,
  },
});