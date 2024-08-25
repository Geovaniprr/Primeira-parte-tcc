import React from "react";
import { SafeAreaView } from "react-native";
import Cadastro from '../src/telas/cadastro';
import Login from '../src/telas/login';
import Relatar2 from "../src/telas/relatar_2";
import Relatos from "../src/telas/relatos";
import Comunidade from "../src/telas/comunidade";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Comunidade />
    </SafeAreaView>
  );
}
