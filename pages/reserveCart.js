import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Container, Content, Form, Item, Input, Button, Card, CardItem, Header } from 'native-base';
import { connect } from 'react-redux'
class ReserveCart extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <Container>
                <Card>
                    <Text style={{fontSize: 20, marginLeft: 'auto', marginRight: 'auto', marginTop: 50, borderBottomWidth:0}}>Reserve Cart</Text>
                </Card>
                <Card style={styles.cart}>
                    <CardItem>
                        <Item><Image/></Item>
                    </CardItem>
                </Card>
                <Button style={styles.buttonSubmit}><Text style={{color: 'white'}}>Submit Reservation</Text></Button>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    cart:{
        width: '80%',
        height: 50,
        alignSelf: 'center'
    },
    buttonSubmit: {        
        marginTop: 20,
        width: '50%',
        marginLeft: 'auto',
        marginRight: 'auto',
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: "#3F7E44"
        
    }
})
const mapStateToProps = state => ({
    // users : state.restaurantReducer.users
});
export default connect(
  mapStateToProps,
  {}
)(ReserveCart)