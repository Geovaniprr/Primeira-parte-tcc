import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput, Modal } from "react-native";
import Texto from '../components/Texto';
import { Ionicons } from '@expo/vector-icons';

export default function SenhaSeguranca() {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Texto style={styles.title}>Comunidade</Texto>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Texto style={styles.description}>
        Vamos apoiar outros colegas? Aqui você pode curtir relatos de outros colegas que também precisam de apoio.        </Texto>
      </View>

      <View style={styles.containerRelats}>
        <View style={styles.line}></View>
      </View>

      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="person-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  iconButton: {
    padding: 10,
  },
  line: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  navItem: {
    padding: 10,
  },
  containerRelats: {
    marginBottom: '100%',
  }
});

