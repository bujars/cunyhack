import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Container, Content, Form, Item, Input, Button, Card, CardItem } from 'native-base';

const width= '80%';
class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined,
          seg1: 1,
          seg2: 1
        };
    }
    goToAbout = () => {
        Actions.map()
    }
    render() {
        return (
            <Container style={styles.content}>
                <Content>
                    <Text style={styles.title}>Sign Up</Text>
                    <Form style={styles.form}>
                        <Text>Select Organization</Text>
                        <Card>
                            <CardItem style={styles.dollar, {
									backgroundColor: this.state.seg1 === 1 ? "white" :this.state.seg1 === 2 ? "#6495ED" : undefined,
									borderColor: "red"
								}} header button onPress={() => (this.state.seg2==2)? this.setState({ seg1: 2,seg2: 1}):this.setState({ seg1: 1,seg2: 1 })}>
                            <Text>Restaurant</Text>
                            </CardItem>
                            <CardItem style={styles.dollar, {
									backgroundColor: this.state.seg2 === 1 ? "white" :this.state.seg2 === 2 ? "#6495ED" : undefined,
									borderColor: "red"
								}} header button onPress={() => (this.state.seg1==1)? this.setState({ seg1: 1,seg2: 2}):this.setState({seg2:1,seg2: 1 })}>
                            <Text>Non-profit</Text>
                            </CardItem>
                        </Card>
                         <Item>
                            <Input placeholder="Email" />
                        </Item>
                       <Item>
                            <Input placeholder="Password" />
                        </Item>
                        <Item>
                            <Input placeholder="Name of Organization" />
                        </Item>
                        <Item>
                            <Input placeholder="Address of your organization" />
                        </Item>
                        <Item>
                            <Input placeholder="Phone Number" />
                        </Item>
                        <Button style={styles.signUpButton}>
                            <Text style={styles.buttonText}>Submit</Text>
                        </Button>
                    </Form>
                </Content>
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
    head:{
        backgroundColor: 'white',
        
    },
    form:{
        width,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    signUpButton: {
        marginTop: 20,
        width: 100,
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        textAlign: 'center', 
        justifyContent: 'center'
    },
    title:{
        fontSize: 50,
        textAlign: 'center', 
        marginBottom:20
    },
    content:{
        marginTop: 100
    },
    containButtons: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        flex: 1,
    },
    typeButton: {

    },
    
})
export default SignUp