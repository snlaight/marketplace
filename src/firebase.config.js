import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBEFcKjVm6Yt3zLa4Yb7eIxdfaH6tlHbJQ',
  authDomain: 'house-marketplace-app-43f75.firebaseapp.com',
  projectId: 'house-marketplace-app-43f75',
  storageBucket: 'house-marketplace-app-43f75.appspot.com',
  messagingSenderId: '392312682850',
  appId: '1:392312682850:web:c0e1ecd8a7eb27f74f143b',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
