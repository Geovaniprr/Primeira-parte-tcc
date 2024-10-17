import React, { useContext, useState } from "react";
import { StyleSheet, View, FlatList, TouchableOpacity, ScrollView } from "react-native";
import Texto from '../components/Texto';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../context/UserContext';

const menuItems = [
  { id: '1', title: 'Relatar', color: '#052880', icon: 'plus-box', pageName: "Relatar2" },
  { id: '2', title: 'Acompanhar', color: '#2ED6CD', icon: 'check-circle', pageName: "Relatos" },
  { id: '3', title: 'Comunidade', color: '#052880', icon: 'account-group', pageName: "Comunidade" },
];

const faqs = [
  {
    id: '1',
    question: 'Como minha privacidade é protegida ao enviar um relato?',
    answer: 'Todos os relatos são tratados com confidencialidade e apenas pessoas autorizadas terão acesso às informações.',
  },
  {
    id: '2',
    question: 'Quanto tempo leva para obter uma resposta ao meu relato?',
    answer: 'O tempo de resposta pode variar dependendo da escola. As respostas devem ser fornecidas dentro de 3 úteis.',
  },
  {
    id: '3',
    question: 'Quem pode ver os relatos que eu envio?',
    answer: 'Apenas a equipe de administração da escola e a equipe do Ká Entre Nós. Seus dados são tratados com total confidencialidade.',
  },
  {
    id: '4',
    question: 'Há um limite de relatos que posso enviar?',
    answer: 'Sim, você pode enviar até 3 relatos por dia. Este limite nos ajuda a gerenciar e responder aos relatos de forma eficiente.',
  },
];

export default function Home() {
  const navigation = useNavigation();
  const [expanded, setExpanded] = useState(null);
  const infiniteData = [...menuItems, ...menuItems, ...menuItems];
  const { username } = useContext(UserContext);
  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  const handleMenuItemPress = (pageName) => {
    navigation.navigate(pageName);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Texto style={styles.textoAvatar}>{username ? username.charAt(0).toUpperCase() : ''}</Texto>
          </View>
          <View style={styles.profileTextContainer}>
            <Texto style={styles.profileName}>{username}</Texto>
            <Texto style={styles.profileRole}>Aluno</Texto>
          </View>
        </View>

        <View style={styles.apoio}>
          <Texto style={styles.title}>Precisando de Apoio?</Texto>
          <View style={styles.thinSeparator} />
        </View>

        <FlatList
          data={infiniteData}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={[styles.menuItem, { backgroundColor: item.color }]} onPress={() => handleMenuItemPress(item.pageName)}>
              <Icon name={item.icon} size={50} color="#FFFFFF" />
              <Texto style={styles.menuText}>{item.title}</Texto>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.menuContainer}
          snapToAlignment="center"
          decelerationRate="fast"
          snapToInterval={200}
          bounces={false}
        />

        <View style={styles.faqSection}>
          <Texto style={styles.faqTitle}>Perguntas Frequentes</Texto>
          <View style={styles.thinSeparator} />
          {faqs.map((faq) => (
            <View key={faq.id} style={styles.faqItem}>
              <TouchableOpacity onPress={() => toggleExpand(faq.id)} style={styles.faqHeader}>
                <Texto style={styles.faqQuestion}>{faq.question}</Texto>
                <Icon
                  name={expanded === faq.id ? 'minus' : 'plus'}
                  size={24}
                  color="#000"
                />
              </TouchableOpacity>
              {expanded === faq.id && (
                <View style={styles.faqAnswerContainer}>
                  <Texto style={styles.faqAnswer}>{faq.answer}</Texto>
                </View>
              )}
            </View>
          ))}
        </View>

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#052880',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  textoAvatar: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  profileTextContainer: {
    justifyContent: 'center',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileRole: {
    fontSize: 16,
    color: 'gray',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  thinSeparator: {
    height: 1,
    backgroundColor: '#CCCCCC',
    width: '90%',
    alignSelf: 'center',
  },
  apoio: {
    paddingVertical: 20,
  },
  menuContainer: {
    paddingHorizontal: 10,
  },
  menuItem: {
    width: 170,
    height: 170,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,
    elevation: 13,
  },
  menuText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginTop: 10,
  },
  faqSection: {
    padding: 20,
  },
  faqTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  faqItem: {
    marginBottom: 15,
    borderRadius: 10,
    backgroundColor: '#f9f9f9',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  faqQuestion: {
    fontSize: 16,
  },
  faqAnswerContainer: {
    padding: 15,
  },
  faqAnswer: {
    fontSize: 14,
    color: '#555555',
    fontWeight: 'bold',
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
});
