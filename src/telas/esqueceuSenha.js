import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Texto from '../components/Texto';

export default function EsqueceuSenha() {
  const [email, setEmail] = useState('');
  const [emailFocado, setEmailFocado] = useState(false);

  const handlePasswordReset = () => {
    console.log('Password reset email sent to:', email);
  };

  return (
    <LinearGradient
      colors={['#052880', '#278A9C']}
      style={styles.outerContainer}
    >
      <View style={styles.innerContainer}>
        <Texto style={styles.title}>Esqueceu a senha?</Texto>
        <Texto style={styles.instructions}>
          Insira o endereço de e-mail que você usou para criar sua conta. Enviaremos um e-mail de redefinição de senha.
        </Texto>
        <TextInput
          style={styles.input}
          placeholder={emailFocado ? '' : 'E-mail'}
          placeholderTextColor="#555555"
          keyboardType="email-address"
          onFocus={() => setEmailFocado(true)}
          onBlur={() => setEmailFocado(false)}
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={handlePasswordReset}>
          <Texto style={styles.buttonText}>Enviar</Texto>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    paddingVertical: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  instructions: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    height: 55,
    width: '100%',
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 25,
    fontSize: 16,
    color: "#000000",
    backgroundColor: "#FFFFFF",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    width: '50%',
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
