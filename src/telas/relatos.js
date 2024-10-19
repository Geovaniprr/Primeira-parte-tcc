import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, TextInput, Modal, FlatList, Alert } from "react-native";
import Texto from '../components/Texto';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { RelatoContext } from "../context/RelatoContext";
import moment from 'moment';

export default function SenhaSeguranca() {
  const navigation = useNavigation();
  const {setRelatos, relatos} = useContext(RelatoContext);
  const handleBack = () => {
    navigation.goBack();
  }

  function handleGetReportAnswer() {
    // TODO: Implementar fetch para pegar a resposta do relato

    Alert.alert('Resposta', 'A resposta do relato será exibida aqui.');
  }

  const fetchReports = async () => {
    try {
      const response = await fetch('http://192.168.0.16:8080/relatos');
      const data = await response.json();

      if (response.status === 200) {
        setRelatos(data.content);
        console.log(data.content);
      } else {
        Alert.alert('Erro', 'Não foi possível carregar os relatos.');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha na conexão. Tente novamente.');
      console.error('Erro ao buscar relatos:', error);
    }
  };

  useEffect(() => {
    fetchReports()
  }, []);

  const handleClose = () => {
    navigation.navigate('MainTabs');
  }

  function ReportCard({relato}) {
    const isPendingApproval = relato.status === 'pendente';
    const titleStyles = {
      color: isPendingApproval ? '#FFCF23' : '#34B951',
      fontWeight: 'bold'
    }

    const dotStyles = {
      backgroundColor: isPendingApproval ? '#FFCF23' : '#34B951',
    }

    return (
      <View style={styles.reportContainer}>
        <View style={styles.reportContainerHeader}>
          <View style={styles.reportContainerHeaderTitleContainer}>
            <View style={[styles.reportStatusDotContainer, dotStyles]}>
              <View style={[styles.reportStatusDot, dotStyles]}></View>
            </View>
            <Texto style={titleStyles}>{isPendingApproval ? 'Aguardando resposta' : 'Resolvido'}</Texto>
          </View>

          <Texto>{moment(relato.data).format('DD/MM/yyyy')}</Texto>
        </View>
        <View style={styles.reportContainerLine}></View>

        <View>
          <View style={styles.reportContainerContent}>
            <Texto style={styles.reportIdText}>{relato.idFormatado}</Texto>
          </View>
          <View style={styles.reportContentActions}>
            <Texto style={styles.reportContentActionsText}>{relato.descricao}</Texto>
            <TouchableOpacity style={styles.reportContentActionsButton} onPress={handleGetReportAnswer}>
              <Ionicons name="chevron-down-sharp" size={12} color="white" />
            </TouchableOpacity>
          </View>

        </View>
      </View>
    )
  }

  return (
    <View style={{flex: 1, backgroundColor: '#FDFDFD'}}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleBack()}>
          <Ionicons name="chevron-back" size={24} color="black" />
        </TouchableOpacity>
        <Texto style={styles.title}>Status</Texto>
        <TouchableOpacity style={styles.iconButton} onPress={() => handleClose()}>
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Texto style={styles.description}>
          Aqui você pode verificar o andamento dos seus relatos e as respostas fornecidas pela sua escola.
        </Texto>
      </View>

      <View style={styles.containerRelats}>
        <Texto style={styles.relats}>Seus Relatos</Texto>
        <View style={styles.line}></View>

        <FlatList 
          data={relatos}
          style={styles.list}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ReportCard relato={item} />
          )}
          contentContainerStyle={styles.listContainerStyle}
        />
      </View>
    </View>
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
  relats: {
    marginHorizontal: 20,
    marginBottom: 10,
    fontWeight: 'bold'
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
  containerRelats: {
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 26,
  },
  listContainerStyle: {
    gap: 20,
    marginHorizontal: 20,
  },
  reportContainer: {
    borderWidth: 1,
    borderColor: '#00000040',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4, 
    paddingVertical: 8,
    paddingHorizontal: 16, 
    backgroundColor: '#FFFFFF',
    borderRadius: 8
  },
  reportContainerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reportContainerHeaderTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },

  reportContainerLine: {
    height: 1,
    backgroundColor: '#C2C2C3E5',
    width: '100%',
    marginTop: 6,
    marginBottom: 16
  },
  reportStatusDotContainer:{
    height: 14,
    width: 14,
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },  

  reportStatusDot: {
    borderWidth: 1,
    borderColor: '#FFFFFF',
    height: 10,
    width: 10,
    borderRadius: 5,
  },

  reportContainerContent: {
    gap: 2
  },
  reportIdText: {
    color: '#CACACA',
    fontSize: 16
  },
  reportContentActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reportContentActionsText: {
    color: '#000',
    fontSize: 18,
    lineHeight: 25.5,
  },
  reportContentActionsButton: {
    backgroundColor: '#052880',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 2
  },
});