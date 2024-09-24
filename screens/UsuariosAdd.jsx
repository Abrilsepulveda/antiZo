import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { auth, createUserWithEmailAndPassword } from './firebase';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const db = getFirestore();

