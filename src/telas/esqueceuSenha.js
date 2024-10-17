import React, { useState } from "react";
import { View, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Texto from '../components/Texto';
import { useNavigation } from "@react-navigation/native";

export default function EsqueceuSenha() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [emailFocado, setEmailFocado] = useState(false);

  const isValidEmail = email => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handlePasswordReset = () => {
    if (isValidEmail(email)) {
      Alert.alert('Sucesso', `O e-mail de redefinição de senha foi enviado para: ${email}`);
      navigation.goBack();
      // Aqui você pode adicionar a lógica para enviar o e-mail de redefinição
    } else {
      Alert.alert('Erro', 'Por favor, insira um e-mail válido.');
    }
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
        <TouchableOpacity
          style={[
            styles.button,
            !isValidEmail(email) && styles.buttonDisabled
          ]}
          onPress={handlePasswordReset}
          disabled={!isValidEmail(email)}
        >
          <Texto style={[
            styles.buttonText,
            !isValidEmail(email) && styles.buttonTextDisabled
          ]}>
            Enviar
          </Texto>
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
    flex: 1,
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
  buttonDisabled: {
    backgroundColor: '#A9A9A9',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextDisabled: {
    color: '#C0C0C0',
  },
});