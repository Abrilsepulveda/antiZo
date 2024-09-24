import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native'; 
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from './firebase'; // Importa la configuración de Firebase
