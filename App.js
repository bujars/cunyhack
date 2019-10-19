import React,{Component} from 'react';
import { StyleSheet } from 'react-native';
import Route from './components/route';
import { Provider } from "react-redux";
import store from './store';
import firebase from 'firebase';


class App extends Component {
  componentDidMount(){
    let firebaseConfig = {
      apiKey: "AIzaSyAfrSMARNV9oTb3NFV4p3kyPxCmNSbeJio",
      authDomain: "cuny-hackathon-459d7.firebaseapp.com",
      databaseURL: "https://cuny-hackathon-459d7.firebaseio.com",
      projectId: "cuny-hackathon-459d7",
      storageBucket: "cuny-hackathon-459d7.appspot.com",
      messagingSenderId: "203757851045",
      appId: "1:203757851045:web:7ed87db9b5da64f9a1d84c",
      measurementId: "G-JVBLV5DP0D"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }

  render(){
    return (
      <Provider store={store}>
        <Route/>
      </Provider >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;