import React, { useState } from "react";
import { Image, View, Dimensions, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import Texto from '../components/Texto';
import logoBalao from '../../assets/logoBalao.png'; 

const width = Dimensions.get('screen').width;

export default function Login() {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [emailFocado, setEmailFocado] = useState(false);
  const [senhaFocada, setSenhaFocada] = useState(false);

  return (
    <>
      <View style={styles.topo}>
        <View style={styles.topoTexto}>
          <Texto style={styles.bemVindo}>Bem-Vindo</Texto>
          <Texto style={styles.facaLogin}>Faça seu login</Texto>
        </View>
        <Image source={logoBalao} style={styles.logoTopo} />
      </View>
      <View style={styles.container}>
        <Texto style={styles.login}>Login</Texto>
        <TextInput
          style={styles.input}
          placeholder={emailFocado ? '' : 'E-mail'}
          placeholderTextColor="#555555"
          keyboardType="email-address"
          onFocus={() => setEmailFocado(true)}
          onBlur={() => setEmailFocado(false)}
        />
        <View style={styles.containerSenha}>
          <TextInput
            style={styles.inputSenha}
            placeholder={senhaFocada ? '' : 'Senha'}
            placeholderTextColor="#555555"
            secureTextEntry={secureTextEntry}
            onFocus={() => setSenhaFocada(true)}
            onBlur={() => setSenhaFocada(false)}
          />
          <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Ionicons name={secureTextEntry ? "eye-off-outline" : "eye-outline"} size={24} color="#AAAAAA" style={styles.icone} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Texto style={styles.esqueceuSenha}>Esqueceu sua senha?</Texto>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.botaoEntrar}>
          <Texto style={styles.textoBotaoEntrar}>Entrar</Texto>
        </TouchableOpacity>
        <View style={styles.containerCadastrar}>
          <Texto style={styles.textoCadastrar}>Não tem conta?</Texto>
          <TouchableOpacity>
            <Texto style={styles.linkCadastrar}>Cadastre-se</Texto>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: 400 / 768 * width,
    backgroundColor: "#052880",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logoTopo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    alignSelf: 'flex-start',
    marginTop: 20,
  },
  bemVindo: {
    color: "#FFFFFF",
    fontSize: 35,
    fontWeight: "bold"
  },
  facaLogin: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "normal",
    marginTop: -5,
  },
  topoTexto: {
    marginTop: 80,
    justifyContent: 'center',
  },
  container: {
    padding: 25,
  },
  login: {
    fontSize: 30,
    marginBottom: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 55,
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
  containerSenha: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: "#CCCCCC",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
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
  inputSenha: {
    flex: 1,
    height: 55,
    fontSize: 16,
    color: "#000000",
  },
  icone: {
    marginRight: 10,
  },
  esqueceuSenha: {
    color: "#000000",
    textDecorationLine: "underline",
    marginTop: 10,
  },
  bottomContainer: {
    alignItems: 'center',
    marginTop: 90,
  },
  botaoEntrar: {
    backgroundColor: "#42D6D4",
    borderRadius: 9,
    paddingVertical: 5,
    paddingHorizontal: 50,
    alignItems: "center",
    marginBottom: 5,
  },
  textoBotaoEntrar: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold",
  },
  containerCadastrar: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textoCadastrar: {
    color: "#000000",
  },
  linkCadastrar: {
    color: "#42D6D4",
    marginLeft: 5,
    textDecorationLine: "underline",
  },
});
