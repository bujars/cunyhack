import React from 'react'


//Import the necessary components from React Native-Base "Bootstrap"
//We added this via npm
//Command: npm i native-base -s
import { Container, Item, Form, Input, Button, Label } from "native-base";
import { StyleSheet, View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';

//It helps users to define all the routes in one central place and navigate and communicate between different screens in an easy way
import { Actions } from 'react-native-router-flux';

//This allows us to connect our page to firebase
//import * as firebase from "firebase";
//Run this: npm i firebase --save 


class SignIN extends React.Component {
    
    //State is data that will control a component that changes. 
    //This is the state object with properoties email and password
    state = {
        email : '',
        password : ''

    }

    //This is the function which will handle our email input. 
    //The parameter is text. 

    handleEmail = (text) => {
        //For object state, set the email to the text that is inputted. 
        this.setState({email : text})
    };

    //Function password which will set the password to the users text.
    handlePassword = (text) => {
        //Take in the given password.
        this.setState({password: text})
    };

    //This is function login which will take in the email and password from the state. 
    //It will have to use FireBase authentication 
    login = (email, password) => {
        try{
            firebase.auth().signInWithEmailAndPassword(email, password);
            firebase.auth().onAuthStateChanged(user => { alert(user.email);
            Actions.landing();
            })
        }catch(error){
            //Do not allow sign in until there is full authentication.
            console.log(error.toString(error))
        }
    };


    goToLanding = () => {
        Actions.landing()
    }

    render() {
        return (
            //ScrollView is a generic scrolling container 
            //View is a container that supports layout with styling
            <ScrollView>
                <View style = {styles.container}>
                    <Title>CUNY Hackathon</Title>
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.goToAbout}>
                        <Text>This is the sign in</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <Container style={styles.container}>
                <Form>
                    <Label>Email</Label>
                    <Input
                    autoCapitalize="none"
                    autCorrect={false}
                    //This is the property which takes in an input, and calls it email. Then we set the properity email on the state, ie the current object
                    onChangeText = {email => this.setState({ email })}/>
                    <Label>Password</Label>
                    <Input
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText = {password => this.setState({password})}
                    />
                    <Button full rounded style={{ marginTop: 20 }}>
                        <Text>SignIN</Text>
                    </Button>
                    <Button full rounded success style={{ marginTop: 20 }}
                    //When the sign up button is pressed, we call the goToSignUp function
                    onPress={this.goToSignUp}
                    > 
                        <Text>Signup</Text>
                    </Button>
                </Form>
            </Container>
            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title: {
        fontSize : 19,
        color : "#0000AA",
    },
});
export default SignIn