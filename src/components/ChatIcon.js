import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ChatIcon() {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('Comunidade')}>
      <Ionicons name="chatbubble-outline" size={24} color="black" />
    </TouchableOpacity>
  );
}