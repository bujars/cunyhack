import React from 'react';
import { StyleSheet } from 'react-native';
import Route from './components/route';

export default function App() {
  return (
      <Route/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
