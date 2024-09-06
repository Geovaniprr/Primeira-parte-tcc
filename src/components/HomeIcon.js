import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeIcon() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
      <Ionicons name="home-outline" size={24} color="black" />
    </TouchableOpacity>
  );
}