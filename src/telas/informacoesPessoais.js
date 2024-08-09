import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Texto from '../components/Texto';
import { Ionicons } from '@expo/vector-icons';

export default function InformacoesPessoais() {
  return (
    <>
      <View style={styles.topo}>
        <Texto style={styles.topoTexto}>Informações Pessoais</Texto>
        <TouchableOpacity style={styles.iconeContainer}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoItem}>
          <View style={styles.infoTextContainer}>
            <Texto style={styles.infoTitle}>Nome completo</Texto>
            <Texto style={styles.infoSubtitle}>Ká Entre Nós</Texto>
          </View>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="create-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoItem}>
          <View style={styles.infoTextContainer}>
            <Texto style={styles.infoTitle}>E-mail</Texto>
            <Texto style={styles.infoSubtitle}>e****23@gmail.com</Texto>
          </View>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="create-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoItem}>
          <View style={styles.infoTextContainer}>
            <Texto style={styles.infoTitle}>Escola</Texto>
            <Texto style={styles.infoSubtitle}>Fundação Instituto Tecnológico de Osasco</Texto>
          </View>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="create-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoItem}>
          <View style={styles.infoTextContainer}>
            <Texto style={styles.infoTitle}>Matrícula</Texto>
            <Texto style={styles.infoSubtitle}>4**9</Texto>
          </View>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="create-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.infoItem}>
          <View style={styles.infoTextContainer}>
            <Texto style={styles.infoTitle}>Ano</Texto>
            <Texto style={styles.infoSubtitle}>Ensino Médio</Texto>
          </View>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="create-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
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
  topo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  topoTexto: {
    fontWeight: 'bold',
    fontSize: 21,
  },
  iconeContainer: {
    padding: 10,
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 100,
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingVertical: 15,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  iconButton: {
    padding: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    paddingVertical: 10,
  },
  navItem: {
    padding: 10,
  },
});

