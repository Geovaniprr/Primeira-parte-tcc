import React, { useState } from "react";
import { Alert, Image, View, Dimensions, StyleSheet, TextInput, TouchableOpacity, Text, Modal, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import Texto from '../components/Texto';
import logoBalao from '../../assets/logoBalao.png';

const width = Dimensions.get('screen').width;

export default function Cadastro() {
  const [nome, setNome] = useState('');
  const [login, setLogin] = useState('');
  const [ano, setAno] = useState('');
  const [matricula, setMatricula] = useState('');
  const [senha, setSenha] = useState('');

  const [nomeCompletoFocado, setNomeCompletoFocado] = useState(false);
  const [anoFocado, setAnoFocado] = useState(false);
  const [emailFocado, setEmailFocado] = useState(false);
  const [matriculaFocado, setMatriculaFocado] = useState(false);
  const [senhaFocada, setSenhaFocada] = useState(false);

  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  const [isEightChar, setIsEightChar] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);

  const validatePassword = (text) => {
    setSenha(text);
    setIsEightChar(text.length >= 8);
    setHasUpperCase(/[A-Z]/.test(text));
    setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(text));
  };

  const validarSenha = (senha) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    return regex.test(senha);
  };

  const handleCadastro = async () => {
    if (!nome || !login || !matricula || !senha) {
      Alert.alert("Erro", "Todos os campos devem ser preenchidos.");
      return;
    }
    if (!validarSenha(senha)) {
      Alert.alert("Erro", "A senha deve ter pelo menos 8 caracteres, uma letra maiúscula e um caractere especial.");
      return;
    }

    const dados = {
      nome: nome,
      login: login,
      ano: ano,
      matricula: matricula,
      senha: senha,
    };

    try {
      const response = await fetch("http://localhost:8080/alunos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });

      if (response.status === 201) {
        setModalVisible(true);
      } else {
        Alert.alert("Erro", "Ocorreu um erro durante o cadastro.");
      }
    } catch (error) {
      console.error("Erro ao cadastrar:", JSON.stringify(error));
      Alert.alert("Erro", "Falha na conexão.");
    }
  };

  return (
    <>
      <View style={styles.topo}>
        <View style={styles.topoTexto}>
          <Texto style={styles.realizarCadastro}>Vamos realizar{'\n'}seu cadastro</Texto>
        </View>
        <Image source={logoBalao} style={styles.logoTopo} />
      </View>
      <View style={styles.container}>
        <Texto style={styles.cadastro}>Cadastro</Texto>
        <TextInput
          style={styles.input}
          placeholder={nomeCompletoFocado ? '' : 'Nome Completo'}
          placeholderTextColor="#555555"
          onFocus={() => setNomeCompletoFocado(true)}
          onBlur={() => setNomeCompletoFocado(false)}
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder={matriculaFocado ? '' : 'Matricula'}
          placeholderTextColor="#555555"
          onFocus={() => setMatriculaFocado(true)}
          onBlur={() => setMatriculaFocado(false)}
          value={matricula}
          onChangeText={setMatricula}
        />
        <TextInput
          style={styles.input}
          placeholder={emailFocado ? '' : 'E-mail'}
          placeholderTextColor="#555555"
          keyboardType="email-address"
          onFocus={() => setEmailFocado(true)}
          onBlur={() => setEmailFocado(false)}
          value={login}
          onChangeText={setLogin}
        />
        <TextInput
          style={styles.input}
          placeholder={anoFocado ? '' : 'Ano Escolar'}
          placeholderTextColor="#555555"
          onFocus={() => setAnoFocado(true)}
          onBlur={() => setAnoFocado(false)}
          value={ano}
          onChangeText={setAno}
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
            onChangeText={validatePassword}
          />
          <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Ionicons name={secureTextEntry ? "eye-off-outline" : "eye-outline"} size={24} color="#AAAAAA" style={styles.icone} />
          </TouchableOpacity>
        </View>
        <View style={styles.validacaoContainer}>
          <Ionicons name={isEightChar ? "checkmark-circle" : "ellipse-outline"} size={20} color={isEightChar ? 'green' : 'gray'} />
          <Text style={[styles.validacaoTexto, { color: isEightChar ? 'green' : 'gray' }]}>
            Pelo menos 8 caracteres
          </Text>
        </View>
        <View style={styles.validacaoContainer}>
          <Ionicons name={hasUpperCase ? "checkmark-circle" : "ellipse-outline"} size={20} color={hasUpperCase ? 'green' : 'gray'} />
          <Text style={[styles.validacaoTexto, { color: hasUpperCase ? 'green' : 'gray' }]}>
            Pelo menos 1 letra maiúscula
          </Text>
        </View>
        <View style={styles.validacaoContainer}>
          <Ionicons name={hasSpecialChar ? "checkmark-circle" : "ellipse-outline"} size={20} color={hasSpecialChar ? 'green' : 'gray'} />
          <Text style={[styles.validacaoTexto, { color: hasSpecialChar ? 'green' : 'gray' }]}>
            Caractere especial (@#%*)
          </Text>
        </View>
        <View style={styles.espacamento} />
        <TouchableOpacity style={styles.botaoCadastrar} onPress={handleCadastro}>
          <Texto style={styles.textoBotaoCadastrar}>Cadastrar</Texto>
        </TouchableOpacity>
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Parabéns</Text>
            <Text style={styles.modalSubText}>Seu cadastro foi concluído com sucesso!</Text>
            <TouchableOpacity
              style={[styles.botaoCadastrar, styles.botaoModal]}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textoBotaoCadastrar}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  topo: {
    width: "100%",
    height: 330 / 768 * width,
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
  realizarCadastro: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold"
  },
  topoTexto: {
    marginTop: 80,
    justifyContent: 'center',
    fontWeight: 'bold'
  },
  cadastro: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
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
    height: 40,
    fontSize: 16,
    color: "#000000",
  },
  container: {
    paddingHorizontal: 25,
  },
  validacaoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  validacaoTexto: {
    fontSize: 14,
    marginLeft: 5,
  },
  espacamento: {
    marginTop: 20,
  },
  botaoCadastrar: {
    backgroundColor: "#42D6D4",
    borderRadius: 9,
    alignItems: "center",
    width: '50%',
    alignSelf: 'center',
  },
  textoBotaoCadastrar: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "bold",
    padding: 5,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    width: '80%',
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#000000",
  },
  modalSubText: {
    fontSize: 20,
    color: "#000000",
    marginBottom: 20,
  },
  botaoModal: {
    backgroundColor: "#42D6D4",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  }
});