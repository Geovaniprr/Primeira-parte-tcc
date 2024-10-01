import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import Home from '../src/telas/home';
import HomeConfig from '../src/telas/homeConfiguracoes';
import Relatar2 from '../src/telas/relatar_2';
import Relatos from '../src/telas/relatos';
import Comunidade from '../src/telas/comunidade';
import EnvioRelato from '../src/telas/envio_relato';
import InformacoesPessoais from '../src/telas/informacoesPessoais';
import SenhaSeguranca from '../src/telas/senhaSeguranca';
import SuporteTecnico from '../src/telas/suporteTecnico';
import Login from '../src/telas/login';
import Cadastro from '../src/telas/cadastro';
import EsqueceuSenha from '../src/telas/esqueceuSenha';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Comunidade') {
            iconName = 'chatbubble-outline';
          } else if (route.name === 'Config') {
            iconName = 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#42D6D4',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen name="Comunidade" component={Comunidade} options={{ headerShown: false }} />
      <Tab.Screen name="Config" component={HomeConfig} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={
        { headerShown: false }
      }>
        {/* MainTabs como a primeira rota */}
        <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
        {/* Outras telas */}
        <Stack.Screen name="Relatar2" component={Relatar2} />
        <Stack.Screen name="Relatos" component={Relatos} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Comunidade" component={Comunidade} />
        <Stack.Screen name="EsqueceuSenha" component={EsqueceuSenha} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="EnvioRelato" component={EnvioRelato} />
        <Stack.Screen name="InformacoesPessoais" component={InformacoesPessoais} />
        <Stack.Screen name="SenhaSeguranca" component={SenhaSeguranca} />
        <Stack.Screen name="SuporteTecnico" component={SuporteTecnico} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}