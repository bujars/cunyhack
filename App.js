import React from 'react';
import { StyleSheet } from 'react-native';
import Route from './components/route';
import { Provider } from "react-redux";
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <Route/>
    </Provider >
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
