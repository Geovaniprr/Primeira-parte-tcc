import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Texto from '../components/Texto';

export default function RelatoEnvio() {

  const handleBackToHome = () => {
    console.log('Voltando ao Início');
  };

  return (
    <LinearGradient
      colors={['#052880', '#278A9C']}
      style={styles.outerContainer}
    >
      <View style={styles.innerContainer}>
        <Texto style={styles.title}>Seu relato foi enviado!</Texto>
        <Texto style={styles.instructions}>
          Agradecemos por confiar em nós para tratar desta questão. Nossa equipe irá analisar a situação cuidadosamente e encaminhá-la para a coordenação da sua escola, que tomará as medidas necessárias para ajudar.
        </Texto>
        <TouchableOpacity style={styles.button} onPress={handleBackToHome}>
          <Texto style={styles.buttonText}>Voltar ao Início</Texto>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  innerContainer: {
    width: '80%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  instructions: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    backgroundColor: '#00296B',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
