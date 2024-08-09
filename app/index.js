import React from "react";
import { SafeAreaView, View } from "react-native";
import { useFonts,
  Poppins_400Regular, 
  Poppins_700Bold } 
  from '@expo-google-fonts/poppins';

import Cadastro from '../src/telas/cadastro';
import Login from '../src/telas/login';
import EsqueceuSenha from '../src/telas/esqueceuSenha';
import HomeConfiguracoes from '../src/telas/homeConfiguracoes';
import InformacoesPessoais from '../src/telas/informacoesPessoais';
import SenhaSeguranca from '../src/telas/senhaSeguranca';
import SuporteTecnico from '../src/telas/suporteTecnico';
import Home from '../src/telas/home';
import Relatar1 from '../src/telas/relatar_1';
import Relatar2 from '../src/telas/relatar_2';

export default function index() {
    const [fonteCarregada] = useFonts({
      "PoppinsRegular": Poppins_400Regular,
      "PoppinsBold":  Poppins_700Bold,
  });

  return (
    <SafeAreaView>
      <Relatar2 />
    </SafeAreaView>
  );
}