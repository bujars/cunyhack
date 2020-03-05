import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import { Container, Content, Form, Item, Input, Button, Card, CardItem, Header } from 'native-base';
import { connect } from 'react-redux'
class ReserveCart extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            clickedOn: false
        };
    }

    onSubmit = () => {
        this.setState({clickedOn: true})
        setTimeout( () => {
            Actions.NonProfitProfile()
            this.setState({clickedOn: false})
        }, 3000);
    }

    renderButton = () => {
        if (this.state.clickedOn){
            return (
            <Button style={{marginTop: 20, width: '50%', marginLeft: 'auto', marginRight: 'auto', justifyContent: 'center', borderRadius: 10,backgroundColor: "#2aad34"}} onPress={() => this.onSubmit()} >
                <Text style={{color: 'white'}}>
                    Order Received
                </Text>
            </Button>
            );
        }else{
            return <Button style={styles.buttonSubmit} onPress={() => this.onSubmit()} ><Text style={{color: 'white'}}>Submit Reservation</Text></Button>
        }
    }

    render() {
        return (
            <Container>
                <Card>
                    <Text style={{fontSize: 20, marginLeft: 'auto', marginRight: 'auto', marginTop: 50, borderBottomWidth:0}}>Reserve Cart</Text>
                </Card>
                <Card style={styles.cart}>
                    <Image source={{uri:'https://s3-media4.fl.yelpcdn.com/bphoto/tgKHteMZvAqGRfR6KVf1BQ/o.jpg'}} style={{width:'20%', aspectRatio:1}} />
                    <View style={{flexDirection:'column', justifyContent:'space-between'}}>
                        <Text style={{fontWeight:'bold'}} > Zuma NYC </Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', width:'80%'}} >
                            <Text style={{fontWeight:'bold', }} > Corn on Cob </Text>
                            <Text style={{color:'#3F7E44', fontStyle:'italic'}} > 4 Orders </Text>
                        </View>
                    </View>
                </Card>
                {this.renderButton()}
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    cart:{
        width: '80%',
        alignSelf: 'center',
        flexDirection:'row'
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