// src/api.ts
import axios from 'axios';

// Configure l'URL de l'API Strapi
const API_URL = 'http://localhost:1337/api'; // Remplace par l'URL de ton backend Strapi

// Crée une instance Axios avec des paramètres par défaut
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Fonction pour l'inscription
export const registerUser = async (userData: { username: string; email: string; password: string; role: string }) => {
  return await api.post('/users', userData);
};

// Fonction pour la connexion
export const loginUser = async (userData: { identifier: string; password: string }) => {
    // Utilise le bon point de terminaison pour l'authentification
    return await api.post('/auth/local', userData);
  };
