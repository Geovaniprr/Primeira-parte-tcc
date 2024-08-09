import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput, Modal, Alert } from "react-native";
import Texto from '../components/Texto';
import { Ionicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function Relatar() {
  const [selectedAno, setSelectedAno] = useState('');
  const [selectedTema, setSelectedTema] = useState('');
  const [nome, setNome] = useState('');
  const [mensagemEnviada, setMensagemEnviada] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const validarFormulario = () => {
    if (nome && selectedAno && selectedTema) {
      setMensagemEnviada(true);
    } else {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    }
  };

  if (mensagemEnviada) {
    return (
      <View style={styles.mensagemContainer}>
        <View style={styles.mensagemBox}>
          <Texto style={styles.mensagemTitulo}>Aviso</Texto>
          <Texto style={styles.mensagemDescricao}>
            Este aviso ajuda a garantir que você esteja ciente da natureza delicada do conteúdo e tranquiliza-os quanto à confidencialidade e seriedade com que suas denúncias serão tratadas.
          </Texto>
          <TouchableOpacity style={styles.botaoContinuar}>
            <Texto style={styles.botaoTexto}>Continuar</Texto>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

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
        <View style={styles.circulo}>
          <Texto style={styles.circuloText}>1</Texto>
        </View>
        <Texto style={styles.description}>
          Nesta etapa, forneça informações iniciais para ajudar-nos a entender seu relato, se identifique e deixe claro o tema que será abordado.
        </Texto>
      </View>

      <View style={styles.containerInput}>
        <View style={styles.inputGroup}>
          <Texto style={styles.label}>Qual seu nome?</Texto>
          <TextInput
            style={styles.input}
            placeholder="Digite seu nome"
            placeholderTextColor="#A3A3A3"
            value={nome}
            onChangeText={setNome}
          />
        </View>
        <View style={styles.inputGroup}>
          <Texto style={styles.label}>Ano Escolar</Texto>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedAno}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedAno(itemValue)}
            >
              <Picker.Item label="Selecione o ano escolar" value="" />
              <Picker.Item label="Fundamental I" value="Fundamental I" />
              <Picker.Item label="Fundamental II" value="Fundamental II" />
              <Picker.Item label="Ensino Médio" value="Ensino Médio" />
            </Picker>
          </View>
        </View>
        <View style={styles.inputGroup}>
          <Texto style={styles.label}>Qual tema do relato?</Texto>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={selectedTema}
              style={styles.picker}
              onValueChange={(itemValue) => setSelectedTema(itemValue)}
            >
              <Picker.Item label="Selecione o tema do relato" value="" />
              <Picker.Item label="Problemas Acadêmicos" value="Problemas Acadêmicos" />
              <Picker.Item label="Segurança Escolar" value="Segurança Escolar" />
              <Picker.Item label="Sugestões e Feedbacks" value="Sugestões e Feedbacks" />
              <Picker.Item label="Assédio e Bullying" value="Assédio e Bullying" />
            </Picker>
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={validarFormulario}>
          <Ionicons name="chevron-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem} onPress={() => setModalVisible(true)}>
          <Ionicons name="person-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.modalView}>
          <Texto style={styles.modalTitle}>Alterar Senha</Texto>
          <TextInput
            style={styles.input}
            placeholder="Digite sua nova senha"
            secureTextEntry
            onChangeText={setNome}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              Alert.alert('Senha Alterada com Sucesso!');
              setModalVisible(false);
            }}
          >
            <Texto style={styles.botaoTexto}>Salvar</Texto>
          </TouchableOpacity>
        </View>
      </Modal>
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
  containerInput: {
    paddingHorizontal: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: 'black',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
    textAlignVertical: 'center',
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    overflow: 'hidden',
    justifyContent: 'center',
  },
  picker: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#2ED6CD',
    borderRadius: 5,
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 10,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#CCCCCC',
    paddingVertical: 10,
  },
  navItem: {
    padding: 10,
  },
  mensagemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  mensagemBox: {
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    alignItems: 'center',
    elevation: 5,
  },
  mensagemTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  mensagemDescricao: {
    fontSize: 16,
    textAlign: 'center',
    color: 'gray',
    marginBottom: 20,
  },
  botaoContinuar: {
    backgroundColor: '#2ED6CD',
    borderRadius: 5,
    height: 40,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botaoTexto: {
    fontSize: 16,
    color: 'white',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
