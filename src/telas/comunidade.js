import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, View, TouchableOpacity, FlatList, Alert } from "react-native";
import Texto from "../components/Texto";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../context/UserContext";
import { RelatoContext } from "../context/RelatoContext";
import { getStoreUser, getToken } from "../service/storage";

export default function Comunidade() {
  const navigation = useNavigation();
  const { alunoId, username } = useContext(UserContext);
  const { relatos, setRelatos } = useContext(RelatoContext);
  const [likeableReports, setLikeableReports] = useState([]);

  const fetchRelatos = async () => {
    try {
      const response = await fetch('http://192.168.0.16:8080/relatos');
      const data = await response.json();

      if (response.status === 200) {
        setRelatos(data.content);
        setLikeableReports(data.content.map(report => ({...report, liked: false})))
      } else {
        Alert.alert('Erro', 'Não foi possível carregar os relatos.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha na conexão. Tente novamente.');
      console.error('Erro ao buscar relatos:', error);
    }
  };

  useEffect(() => {
    fetchRelatos();
  }, []);

  const handleBack = () => navigation.goBack();
  const handleClose = () => navigation.navigate("MainTabs");

  async function handleLikeReport(reportId) {
    if(likeableReports?.find(report => report.id === reportId)?.liked) {
      Alert.alert('Erro', 'Você já curtiu este relato.');
      return;
    }

    const user = await getStoreUser();
    try {
      const response = await fetch(`http://192.168.0.16:8080/relatos/curtir/${reportId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${user.token}` },
      });

      if (response.status === 200) {
        setLikeableReports(prevState => prevState.map(report => ({
          ...report,
          liked: report.id === reportId ? true : report.liked,
          curtidas: report.id === reportId ? report.curtidas + 1 : report.curtidas
        })))
      } else {
        Alert.alert('Erro', 'Não foi possível curtir o relato.');
      }
    } catch {
      Alert.alert('Erro', 'Falha na conexão. Tente novamente.');
    }
  }

  const RelatoCard = ({ relato }) => (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Ionicons name="person-circle-outline" size={40} color="#42D6D4" />
        <View style={styles.userInfo}>
          <Texto style={styles.userName}>{relato.alunoNome}</Texto>
          <Texto style={styles.userRole}>Aluno</Texto>
        </View>
        <Ionicons name="ellipsis-horizontal" size={24} color="gray" />
      </View>
      <Texto style={styles.relatoText}>{relato.descricao}</Texto>
      <View style={styles.cardFooter}>
        <TouchableOpacity style={styles.likeButton} onPress={() => handleLikeReport(relato.id)}>
          <Ionicons name={relato.liked ? "heart" : "heart-outline"} size={20} color="red" />
          <Texto>{relato.curtidas || 0}</Texto>
        </TouchableOpacity>
      </View>
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
          Vamos apoiar outros colegas? Aqui você pode curtir relatos de outros
          colegas que também precisam de apoio.
        </Texto>
      </View>

      <FlatList
        data={likeableReports}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <RelatoCard relato={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC",
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  iconButton: {
    padding: 10,
  },
  container: {
    alignItems: "center",
    paddingVertical: 20,
  },
  description: {
    fontSize: 16,
    color: "gray",
    textAlign: "center",
    lineHeight: 24,
    paddingHorizontal: 20,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#FFF",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userRole: {
    fontSize: 14,
    color: "gray",
  },
  relatoText: {
    fontSize: 15,
    marginTop: 10,
    marginBottom: 15,
  },
  cardFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  likeButton: {
    flexDirection: "row",
    alignItems: "center",
  },
});