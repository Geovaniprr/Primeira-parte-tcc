import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function PersonIcon() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('HomeConfig')}>
      <Ionicons name="person-outline" size={24} color="black" />
    </TouchableOpacity>
  );
}