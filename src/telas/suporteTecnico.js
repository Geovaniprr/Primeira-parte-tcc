import React from "react";
import { StyleSheet, View, TouchableOpacity, Linking } from "react-native";
import Texto from '../components/Texto';
import { Ionicons } from '@expo/vector-icons';

export default function SuporteTecnico() {
  const handleEmailPress = () => {
    Linking.openURL('mailto:entreknos2023@gmail.com');
  };

  return (
    <>
      <View style={styles.topo}>
        <Texto style={styles.topoTexto}>Suporte Técnico</Texto>
        <TouchableOpacity style={styles.iconeContainer}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Texto style={styles.title}>Estamos aqui para{'\n'}te ajudar</Texto>
        <Texto style={styles.description}>
          Para obter suporte técnico da nossa{'\n'} equipe, siga as instruções abaixo e{'\n'} entre em contato conosco por e-mail.
        </Texto>
      </View>
      <View style={styles.separator} />
      <View style={styles.instructions}>
        <Texto style={styles.instructionsTitle}>Instruções para o e-mail</Texto>
        <Texto style={styles.instructionItem}>1. Informe seu nome e e-mail</Texto>
        <Texto style={styles.instructionItem}>2. Descreva o problema que está enfrentando</Texto>
        <Texto style={styles.instructionItem}>3. Anexe capturas de tela, se possível, para que possamos entender melhor sua situação.</Texto>
      </View>
      <TouchableOpacity style={styles.emailButton} onPress={handleEmailPress}>
        <Texto style={styles.emailButtonText}>Ir ao E-mail</Texto>
      </TouchableOpacity>
      <Texto style={styles.footerText}>Atendimento 24h por dia</Texto>
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
  content: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  instructions: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'flex-start',
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003F88',
    marginBottom: 10,
  },
  instructionItem: {
    fontSize: 16,
    marginBottom: 5,
  },
  emailButton: {
    backgroundColor: '#42D6D4',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
  emailButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    textAlign: 'center',
    color: 'gray',
    fontSize: 14,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    paddingVertical: 5,
  },
  navItem: {
    padding: 10,
  },
});