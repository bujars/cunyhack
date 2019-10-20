import React from 'react'


//Import the necessary components from React Native-Base "Bootstrap"
//We added this via npm
//Command: npm i native-base -s
import { Container, Item, Form, Input, Button, Label } from "native-base";
import { StyleSheet, Image, View, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';

//It helps users to define all the routes in one central place and navigate and communicate between different screens in an easy way
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

//This allows us to connect our page to firebase
//import * as firebase from "firebase";
//Run this: npm i firebase --save 


class SignIn extends React.Component {
    
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
    login = () => {
        try{
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password);
            //console.log(this.state.email + " " + this.state.password)
            //firebase.auth().onAuthStateChanged(user => { alert(user.email);})
            Actions.landing();
        }catch(error){
            //Do not allow sign in until there is full authentication.
            console.log("You have an error. Please try again")
            //console.log(error.toString(error))
        }
    };

    //Go to the sign up page. --> Routing is handled in components/route.js 

    goToSignUp = () => {
        Actions.signUp()
    }

    render() {
        return (
            //ScrollView is a generic scrolling container 
            //View is a container that supports layout with styling
            <Container style={styles.container}>
                <Image style={styles.image} source={{uri : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLzueCaaDVq8PP-nx0491QUkqQtSF6hq2acO7Ix4LchOR7EOOZ&s"}}/>
                    
                <Form>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input
                        autoCapitalize="none"
                        autCorrect={false}
                        //This is the property which takes in an input, and calls it email. Then we set the properity email on the state, ie the current object
                        onChangeText = {email => this.setState({ email })}/>
                </Item>
                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                        secureTextEntry={true}
                        autoCapitalize="none"
                        autoCorrect={false}
                        onChangeText = {password => this.setState({password})}
                    />
                </Item>

                </Form>
                <Item style={{flexDirection: "row", justifyContent: "space-around"}}>
                    <Button style={styles.button}  rounded
                    onPress={() => this.login()}>
                        <Text>Sign in</Text>
                    </Button>
                    <Button  rounded success style={styles.button}
                        //When the sign up button is pressed, we call the goToSignUp function
                        onPress={this.goToSignUp}
                    > 
                        <Text>Sign up</Text>
                    </Button>
                </Item>
            </Container>

            
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        //alignItems: "center",
        justifyContent: "center"
    },
    button: {
        marginTop : 20,
        marginLeft: 0,
        marginRight: 0,
        width: "40%", 
        justifyContent : "center"
    },
    image: {
        width : 100, 
        height : 100,
        alignSelf: "center"
    },
});
export default SignIn