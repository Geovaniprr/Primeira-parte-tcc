import React, { useState, useContext } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput, Text, Switch, Alert } from "react-native";
import Texto from "../components/Texto";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import { RelatoContext } from "../context/RelatoContext";
import { UserContext } from "../context/UserContext";

export default function Relatar() {
  const navigation = useNavigation();
  const [descricao, setDescricao] = useState('');
  const [tipo, setTipo] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const { adicionarRelato } = useContext(RelatoContext);
  const { username, alunoId } = useContext(UserContext)

  const handleSubmit = async () => {
    if (descricao.trim() === '' || tipo === '' || !isAgreed) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios e aceite a Política de Privacidade.");
      return;
    }

    const dados = {
      alunoId: alunoId,
      nomeAluno: username,
      descricao: descricao,
      status: "pendente",
      tipo: tipo,
    };

    try {
      const response = await fetch('http://192.168.0.16:8080/relatos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados),
      });

      const responseData = await response.json();
      if (response.status === 201) {
        adicionarRelato(responseData);
        Alert.alert('Sucesso', 'Seu relato foi enviado com sucesso!');
        navigation.navigate('Comunidade');
      } else {
        Alert.alert('Erro', 'Ocorreu um erro ao enviar o relato.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha na conexão. Tente novamente.');
      console.error('Erro ao enviar o relato:', error);
    }
  };

  const handleBack = () => {
    navigation.goBack();
  };

  const handleClose = () => {
    navigation.navigate('MainTabs');
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={handleBack}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Texto style={styles.title}>Relatar</Texto>
        <TouchableOpacity style={styles.iconButton} onPress={handleClose}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Texto style={styles.description}>
          Chegou a hora de escrever seu relato. Para entender sua situação e ajudar da melhor forma possível.
        </Texto>
      </View>

      <View style={styles.formContainer}>
        <Texto style={styles.label}>Descreva seu relato</Texto>
        <TextInput
          style={styles.input}
          placeholder="Digite aqui"
          placeholderTextColor="#A3A3A3"
          value={descricao}
          onChangeText={setDescricao}
          multiline
          numberOfLines={4}
        />
      </View>

      <View style={styles.formContainer}>
        <Texto style={styles.label}>Qual tema do relato?</Texto>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={tipo}
            style={styles.picker}
            onValueChange={setTipo}
          >
            <Picker.Item label="Selecione o tema do relato" value="" />
            <Picker.Item label="Problemas Acadêmicos" value="PROBLEMAS_ACADEMICOS" />
            <Picker.Item label="Segurança Escolar" value="SEGURANÇA" />
            <Picker.Item label="Sugestões e Feedbacks" value="SUGESTOES" />
            <Picker.Item label="Assédio e Bullying" value="ABUSO" />
          </Picker>
        </View>
      </View>

      <View style={styles.line}></View>

      <View style={styles.publishContainer}>
        <View style={styles.publishOption}>
          <Texto style={styles.label}>Publicar relato?</Texto>
        </View>
        <Texto style={styles.publishDescription}>
          Esta opção permite que seu relato seja visível para a comunidade escolar.
        </Texto>
        <View style={styles.checkboxContainer}>
          <Switch value={isAgreed} onValueChange={setIsAgreed} />
          <Texto style={styles.checkboxLabel}>
            Eu li e concordo com a{' '}
            <Text style={styles.link}>Política de privacidade</Text>
          </Texto>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  iconButton: {
    padding: 10,
  },
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  description: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  formContainer: {
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  input: {
    height: 100,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    textAlignVertical: 'top',
  },
  line: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 20,
    marginBottom: 10,
  },
  publishContainer: {
    paddingHorizontal: 20,
  },
  publishOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  publishDescription: {
    fontSize: 14,
    color: 'gray',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxLabel: {
    fontSize: 14,
    color: 'black',
    marginLeft: 10,
  },
  link: {
    color: '#2ED6CD',
    textDecorationLine: 'underline',
  },
  button: {
    backgroundColor: '#2ED6CD',
    borderRadius: 5,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 30,
  },
});
