import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Container, Content, Form, Item, Input, Button, Card, CardItem } from 'native-base';
import { connect } from 'react-redux'
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import {addUser} from '../store/actions/NonProfitAction';
const width= '80%';
class SignUp extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
          selected2: undefined,
          seg1: 1,
          seg2: 1,
          type:"",
          organization:"",
          email:"",
          password: "",
          phoneNumber: "",
        };
    }
    componentDidMount(){
        console.log(this.props.users)
    }
    goToAbout = () => {
        Actions.landing()
    }
    onChangeType1 = ()=>{
        if(this.state.seg1==2){
            this.setState({ seg1: 1,seg2: 1})
        }
        else{
            this.setState({ seg1: 2,seg2: 1 })
        }
        this.setState({type: "restaurant"})
    }
    onChangeType2 = ()=>{
        if(this.state.seg1==2){
            this.setState({ seg1: 1,seg2: 1})
            this.setState({type: ""})
        }
        else{
            this.setState({ seg1: 1,seg2: 2 })
            this.setState({type: "non-profit"})
        }
        
    }
    onChangeEmail = (email) =>{
        this.setState({email: email})
    }
    onChangeOrganization = (organization) =>{
        this.setState({organization: organization})
    } 
    onChangeAddress= (address) =>{
        this.setState({address: address})
    } 
    onChangePassword = (password) =>{
        this.setState({password: password})
    }    
    onChangePhoneNumber = (phoneNumber) =>{
        this.setState({phoneNumber: phoneNumber})
    }
    onSubmit = ()=>{
        let user ={
            type: this.state.type,
            organization: this.state.organization,
            email: this.state.email,
            password: this.state.password,
            phoneNumber: this.state.phoneNumber
        }
        // this.props.addUser(user)
        Actions.landing()
    }
    render() {
        return (
            <Container style={styles.content}>
                <Content>
                    <Text style={styles.title}>Sign Up</Text>
                    <Form style={styles.form}>
                        <Text>Select Organization</Text>
                        <Card>
                            <CardItem   style={styles.dollar, {
									backgroundColor: this.state.seg1 === 1 ? "white" :this.state.seg1 === 2 ? "#6495ED" : undefined,
									borderColor: "red"
                                }} header button 
                                onPress={()=>this.onChangeType1()}
                                >
                            <Text>Restaurant</Text>
                            </CardItem>
                            <CardItem style={styles.dollar, {
									backgroundColor: this.state.seg2 === 1 ? "white" :this.state.seg2 === 2 ? "#6495ED" : undefined,
									borderColor: "red"
								}} header button onPress={()=>this.onChangeType2()}>
                            <Text>Non-profit</Text>
                            </CardItem>
                        </Card>

                        <Item>
                            <Input onChangeText={(text)=> this.onChangeEmail(text)} placeholder="Email" />
                        </Item>
                        <Item>
                            <Input onChangeText={(text)=> this.onChangePassword(text)} placeholder="Password" />
                        </Item>
                        <Item>
                            <Input onChangeText={(text)=> this.onChangeOrganization(text)} placeholder="Name of Organization" />
                        </Item>
                        <Item>
                            <Input onChangeText={(text)=> this.onChangeAddress(text)} placeholder="Address of your organization" />
                        </Item>
                        <Item>
                            <Input onChangeText={(text)=> this.onChangePhoneNumber(text)} placeholder="Phone Number" />
                        </Item>
                        <Button style={styles.signUpButton} onPress={()=> this.onSubmit()}>
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
const mapStateToProps = state => ({
    users : state.restaurantReducer.users
});
export default connect(
  mapStateToProps,
  {addUser}
)(SignUp)
// export default SignUp
