import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList, ActivityIndicator } from "react-native";
import Texto from '../components/Texto';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Comunidade() {
  const navigation = useNavigation();
  const [relatos, setRelatos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar os relatos da API
  const fetchRelatos = async () => {
    try {
      const response = await fetch('http://192.168.0.16:8080/relatos'); // Substitua pelo endpoint correto da sua API
      const data = await response.json();
      setRelatos(data.content); // Certifique-se de que a estrutura da resposta esteja correta
      setLoading(false);
    } catch (error) {
      console.error('Erro ao buscar relatos:', error);
      setLoading(false);
    }
  };

  // Carregar os relatos ao montar o componente
  useEffect(() => {
    fetchRelatos();
  }, []);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleClose = () => {
    navigation.navigate('MainTabs');
  };

  const renderRelato = ({ item }) => (
    <View style={styles.relatoCard}>
      <Texto style={styles.tema}>{item.tipo}</Texto>
      <Texto style={styles.descricao}>{item.descricao}</Texto>
      <Texto style={styles.status}>{item.status}</Texto>
    </View>
  );

  return (
    <>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={handleBack}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Texto style={styles.title}>Comunidade</Texto>
        <TouchableOpacity style={styles.iconButton} onPress={handleClose}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Texto style={styles.description}>
          Vamos apoiar outros colegas? Aqui você pode curtir relatos de outros colegas que também precisam de apoio.
        </Texto>
      </View>

      <View style={styles.containerRelats}>
        <View style={styles.line}></View>

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <FlatList
            data={relatos}
            renderItem={renderRelato}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
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
  line: {
    height: 1,
    backgroundColor: '#CCCCCC',
    marginHorizontal: 20,
    marginBottom: 10,
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
  containerRelats: {
    flex: 1,
    paddingHorizontal: 20,
  },
  relatoCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  tema: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 5,
  },
  descricao: {
    fontSize: 16,
    marginBottom: 5,
  },
  status: {
    fontSize: 14,
    color: 'gray',
  },
});
