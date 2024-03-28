// App.js
import React, { useState } from 'react';
import { Alert, Button, SafeAreaView, Text, View, StyleSheet } from 'react-native';

import getRandomIntInclusive from './components/numerorandom';
import NumeroInput from './components/campodenumero';
import NumeroInputTwo from './components/campodenumerotwo';

const App = () => {
  const [minimo, setMinimo] = useState<number | null>(null);
  const [maximo, setMaximo] = useState<number | null>(null);
  const [randomNumber, setRandomNumber] = useState<number | null>(null);

  const handleGenerateRandomNumber = () => {
    if (minimo !== null && maximo !== null && minimo <= maximo) {
      const randomNumber = getRandomIntInclusive(minimo, maximo);
      setRandomNumber(randomNumber);
    } else {
      // Tratamento de erro caso os números sejam inválidos
      Alert.alert('Erro', 'Por favor, insira números válidos e certifique-se de que o número mínimo seja menor ou igual ao número máximo.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>App de Números Aleatórios</Text>
      </View>
      <View style={styles.content}>
        <NumeroInput onNumeroChange={setMinimo} />
        <NumeroInputTwo onNumeroChange={setMaximo} />
        <Button title="Gerar Relatório" onPress={handleGenerateRandomNumber} />
        {randomNumber !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Número aleatório gerado : <Text style={styles.resultNumber}>{randomNumber}</Text></Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    backgroundColor: '#075E54',
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  resultContainer: {
    backgroundColor: '#DCF8C5',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000', // Cor preta
  },
  resultNumber: {
    fontWeight: 'normal',
  },
});

export default App;