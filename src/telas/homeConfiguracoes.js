import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Texto from '../components/Texto';
import { Ionicons } from '@expo/vector-icons';

export default function HomeConfiguracoes() {
  return (
    <>
      <View style={styles.topo}>
        <Texto style={styles.topoTexto}>Perfil</Texto>
        <TouchableOpacity style={styles.iconeContainer}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar} />
        </View>
        <View style={styles.profileTextContainer}>
          <Texto style={styles.profileName}>Ká Entre Nós</Texto>
          <Ionicons name="create-outline" size={16} color="black" style={styles.editIcon} />
        </View>
        <Texto style={styles.profileRole}>Aluno</Texto>
      </View>
      <View style={styles.settingsSection}>
        <Texto style={styles.settingsTitle}>Configurações</Texto>
        <TouchableOpacity style={styles.settingsItem}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Texto style={styles.settingsText}>Informações pessoais</Texto>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Ionicons name="lock-closed-outline" size={24} color="black" />
          <Texto style={styles.settingsText}>Senha e Segurança</Texto>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem}>
          <Ionicons name="headset-outline" size={24} color="black" />
          <Texto style={styles.settingsText}>Suporte Técnico</Texto>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.logoutSection}>
        <TouchableOpacity>
          <Texto style={styles.logoutText}>Sair da Conta</Texto>
        </TouchableOpacity>
        <Texto style={styles.versionText}>VERSÃO 01.0</Texto>
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
    fontSize: 23,
  },
  iconeContainer: {
    padding: 10,
  },
  profileCard: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    margin: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatarContainer: {
    marginBottom: 10,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#052880',
  },
  profileTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  editIcon: {
    marginLeft: 5,
  },
  profileRole: {
    fontSize: 14,
    color: 'gray',
  },
  settingsSection: {
    padding: 20,
  },
  settingsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  settingsText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  logoutSection: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  logoutText: {
    color: '#42D6D4',
    fontSize: 16,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  versionText: {
    color: 'gray',
    fontSize: 14,
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