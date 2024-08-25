import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Cadastro from './src/telas/cadastro';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Cadastro />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
