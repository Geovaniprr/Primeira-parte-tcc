import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput, Modal, Alert } from "react-native";
import Texto from '../components/Texto';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Importando o hook de navegação
import { getStoreUser } from "../service/storage";

export default function SenhaSeguranca() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [password, setPassword] = useState('');
  const [isEightChar, setIsEightChar] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [loading, setLoading] = useState(false);

  const validatePassword = (text) => {
    setPassword(text);
    setIsEightChar(text.length >= 8);
    setHasUpperCase(/[A-Z]/.test(text));
    setHasSpecialChar(/[!@#$%^&*(),.?":{}|<>]/.test(text));
  };

  const handleSubmit = async () => {
    setLoading(true);
    const user = await getStoreUser();
    try {
      const response = await fetch(`http://localhost:8080/alunos/redefinir-senha?novaSenha=${password}&token=${user.token}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${user.token}` },
      });

      if(response.status === 200) {
        Alert.alert('Sucesso', 'Senha alterada com sucesso.');
      }
    } catch {
      Alert.alert('Erro', 'Não foi possível alterar a senha.');
    } finally {
      setModalVisible(false);
    }
  }

  const handleBack = () => {
    navigation.goBack();
  }

  return (
    <>
      <View style={styles.topo}>
        <Texto style={styles.topoTexto}>Senha e Segurança</Texto>
        <TouchableOpacity style={styles.iconeContainer} onPress={() => handleBack()}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Texto style={styles.title}>Mantenha sua conta segura</Texto>
        <Texto style={styles.description}>
          Aqui, você pode verificar a segurança da sua senha e alterá-la, se necessário.
        </Texto>
      </View>
      <View style={styles.infoItem}>
        <View style={styles.infoTextContainer}>
          <Texto style={styles.infoTitle}>Senha</Texto>
          <Texto style={styles.infoSubtitle}>K*******3</Texto>
        </View>
        <TouchableOpacity style={styles.iconButton} onPress={() => setModalVisible(true)}>
          <Ionicons name="create-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <Texto style={styles.modalTitle}>Alterando a senha</Texto>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Nova senha"
              secureTextEntry={true}
              value={password}
              onChangeText={validatePassword}
            />
            <Ionicons name="eye-off-outline" size={24} color="black" style={styles.eyeIcon} />
          </View>
          <Texto style={[styles.requirement, { color: isEightChar ? 'green' : 'gray' }]}>
            ✓ Pelo menos 8 caracteres
          </Texto>
          <Texto style={[styles.requirement, { color: hasUpperCase ? 'green' : 'gray' }]}>
            ✓ Pelo menos 1 letra maiúscula
          </Texto>
          <Texto style={[styles.requirement, { color: hasSpecialChar ? 'green' : 'gray' }]}>
            ✓ Caractere especial (@#%*)
          </Texto>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: isEightChar && hasUpperCase && hasSpecialChar ? '#42D6D4' : 'gray' }]}
            onPress={handleSubmit}
            disabled={!(isEightChar && hasUpperCase && hasSpecialChar)}
          >
            <Texto style={styles.buttonText}>Concluir</Texto>
          </TouchableOpacity>
        </View>
      </Modal>
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
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
  },
  infoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 320,
  },
  infoTextContainer: {
    flex: 1,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
  iconButton: {
    padding: 10,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
  },
  eyeIcon: {
    marginLeft: 10,
  },
  requirement: {
    textAlign: 'left',
    fontSize: 14,
    marginBottom: 10,
  },
  button: {
    borderRadius: 9,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});