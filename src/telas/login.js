import React, { useState } from "react";
import { Alert, Image, View, Dimensions, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import Texto from '../components/Texto';
import logoBalao from '../../assets/logoBalao.png'; 

const width = Dimensions.get('screen').width;

export default function Login() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [loginFocado, setLoginFocado] = useState(false);
  const [senhaFocada, setSenhaFocada] = useState(false);

  const handleLogin = async () => {
    console.log("Iniciando o login...");

    if (!login || !senha) {
      Alert.alert("Erro", "Todos os campos devem ser preenchidos.");
      console.log("Erro: Campos vazios");
      return;
    }

    const dados = {
      login: login,
      senha: senha,
    };

    console.log("Dados para envio:", dados);

    try {
      const response = await fetch("http://localhost:8080/alunos/login", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      console.log("Resposta da API:", response);

      if (response.status === 200) {
        console.log("Login realizado com sucesso!");
        Alert.alert("Sucesso", "Login realizado com sucesso!");
      } else if (response.status === 401) {
        console.log("Erro: Credenciais inválidas");
        Alert.alert("Erro", "E-mail ou senha incorretos.");
      } else {
        console.log("Erro ao fazer login:", response.status);
        Alert.alert("Erro", "Ocorreu um erro durante o login.");
      }
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      Alert.alert("Erro", "Falha na conexão.");
    }
  };

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
          placeholder={loginFocado ? '' : 'E-mail'}
          placeholderTextColor="#555555"
          keyboardType="email-address"
          onFocus={() => setLoginFocado(true)}
          onBlur={() => setLoginFocado(false)}
          value={login}
          onChangeText={setLogin}
        />
        <View style={styles.containerSenha}>
          <TextInput
            style={styles.inputSenha}
            placeholder={senhaFocada ? '' : 'Senha'}
            placeholderTextColor="#555555"
            secureTextEntry={secureTextEntry}
            onFocus={() => setSenhaFocada(true)}
            onBlur={() => setSenhaFocada(false)}
            value={senha}
            onChangeText={setSenha}
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
        <TouchableOpacity style={styles.botaoEntrar} onPress={handleLogin}>
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
