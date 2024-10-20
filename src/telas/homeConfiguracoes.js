import React, { useContext, useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Texto from '../components/Texto';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../context/UserContext';
import { clearStoreAuth, getToken } from '../service/storage';


export default function HomeConfiguracoes() {
  const navigation = useNavigation();
  const { username } = useContext(UserContext);
  const handleLogout = async () => {
    await clearStoreAuth()
    console.log('Deslogar');
    navigation.navigate('Login');
  }

  const handleNavigate = (screen) => {
    navigation.navigate(screen);
  }

  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <>
      <View style={styles.topo}>
        <Texto style={styles.topoTexto}>Perfil</Texto>
        <TouchableOpacity style={styles.iconeContainer} onPress={handleBack}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.profileCard}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Texto style={styles.textoAvatar}>{username ? username.charAt(0).toUpperCase() : ''}</Texto>
          </View>
        </View>
        <View style={styles.profileTextContainer}>
          <Texto style={styles.profileName}>{username ? username.split('@')[0] : ''}</Texto>
          <Ionicons name="create-outline" size={16} color="black" style={styles.editIcon} />
        </View>
        <Texto style={styles.profileRole}>Aluno</Texto>
      </View>
      <View style={styles.settingsSection}>
        <Texto style={styles.settingsTitle}>Configurações</Texto>
        <TouchableOpacity style={styles.settingsItem} onPress={() => handleNavigate("InformacoesPessoais")}>
          <Ionicons name="person-outline" size={24} color="black" />
          <Texto style={styles.settingsText}>Informações pessoais</Texto>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem} onPress={() => handleNavigate("SenhaSeguranca")}>
          <Ionicons name="lock-closed-outline" size={24} color="black" />
          <Texto style={styles.settingsText}>Senha e Segurança</Texto>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingsItem} onPress={() => handleNavigate("SuporteTecnico")}>
          <Ionicons name="headset-outline" size={24} color="black" />
          <Texto style={styles.settingsText}>Suporte Técnico</Texto>
          <Ionicons name="chevron-forward-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.logoutSection}>
        <TouchableOpacity onPress={handleLogout}>
          <Texto style={styles.logoutText}>Sair da Conta</Texto>
        </TouchableOpacity>
        <Texto style={styles.versionText}>VERSÃO 0.0.1</Texto>
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
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#052880',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textoAvatar: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});