// NumeroInputTwo.js
import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const NumeroInputTwo = ({ onNumeroChange }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Número Máximo"
      keyboardType="numeric"
      onChangeText={onNumeroChange}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#ADD8E6', // Azul claro
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 5,
    marginBottom: 10,
    color: '#000000', // Preto
  },
});

export default NumeroInputTwo;