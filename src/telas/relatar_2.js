import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput, Text, Switch, Alert } from "react-native";
import Texto from '../components/Texto';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function Relatar() {
  const [nome, setNome] = useState('');
  const [selectedTema, setSelectedTema] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [isAgreed, setIsAgreed] = useState(false);

  const forbiddenWords = ['palavrão1', 'palavrão2', 'palavrão3']; 

  const containsForbiddenWords = (text) => {
    return forbiddenWords.some(word => text.toLowerCase().includes(word));
  };

  const handleSubmit = () => {
    if (nome.trim() === '' || selectedTema === '' || !isAgreed) {
      Alert.alert("Erro", "Por favor, preencha todos os campos obrigatórios e aceite a Política de Privacidade.");
    } else if (containsForbiddenWords(nome)) {
      Alert.alert("Erro", "Seu relato contém palavras inadequadas. Por favor, remova-as.");
    } else {
      Alert.alert("Sucesso", "Seu relato foi enviado com sucesso!");
    }
  };

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Texto style={styles.title}>Relatar</Texto>
        <TouchableOpacity style={styles.iconButton}>
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
          value={nome}
          onChangeText={setNome}
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <View style={styles.formContainer}>
        <Texto style={styles.label}>Qual tema do relato?</Texto>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedTema}
            style={styles.picker}
            onValueChange={setSelectedTema}
          >
            <Picker.Item label="Selecione o tema do relato" value="" />
            <Picker.Item label="Problemas Acadêmicos" value="Problemas Acadêmicos" />
            <Picker.Item label="Segurança Escolar" value="Segurança Escolar" />
            <Picker.Item label="Sugestões e Feedbacks" value="Sugestões e Feedbacks" />
            <Picker.Item label="Assédio e Bullying" value="Assédio e Bullying" />
          </Picker>
        </View>
      </View>

      <View style={styles.line}></View>

      <View style={styles.publishContainer}>
        <View style={styles.publishOption}>
          <Texto style={styles.label}>Publicar relato?</Texto>
          <Switch
            value={isPublic}
            onValueChange={setIsPublic}
          />
        </View>
        <Texto style={styles.publishDescription}>
          Esta opção permite que seu relato seja visível para a comunidade escolar.
        </Texto>
        <View style={styles.checkboxContainer}>
          <Switch
            value={isAgreed}
            onValueChange={setIsAgreed}
          />
          <Texto style={styles.checkboxLabel}>
            Eu li e concordo com a{' '}
            <Text style={styles.link}>Política de privacidade</Text>
          </Texto>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSubmit}
      >
        <Ionicons name="chevron-forward" size={24} color="white" />
      </TouchableOpacity>

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
  circulo: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#052880',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  circuloText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
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
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
  },
  navItem: {
    padding: 10,
  },
});
