import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput, Modal } from "react-native";
import Texto from '../components/Texto';
import { Ionicons } from '@expo/vector-icons';
import HomeIcon from '../components/HomeIcon';
import ChatIcon from '../components/ChatIcon';
import PersonIcon from '../components/PersonIcon';

export default function SenhaSeguranca() {
  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Texto style={styles.title}>Status</Texto>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Texto style={styles.description}>
        Aqui você pode verificar o andamento dos seus relatos e as respostas fornecidas pela sua escola. 
        </Texto>
      </View>

      <View style={styles.containerRelats}>
        <Texto style={styles.relats}>Seus Relatos</Texto>
        <View style={styles.line}></View>
      </View>

      <View style={styles.navBar}>
      <HomeIcon />
      <ChatIcon />
      <PersonIcon />
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
  relats: {
    marginHorizontal: 20,
    marginBottom: 10,
    fontWeight: 'bold'
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

