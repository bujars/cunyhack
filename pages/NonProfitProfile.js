import React, {Component} from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {Container, Content, Left, CardItem, Body, Right, Card, Item, Button} from 'native-base';
import { connect } from 'react-redux';
import OrderItem from '../components/OrderItem';
import {getNonProfitOrders} from '../store/actions'
import { Actions } from 'react-native-router-flux';

const back="<"
class NonProfitProfile extends Component {
    componentDidMount() {
        this.props.getNonProfitOrders();
    }

    renderOrders() {
        if (this.props.orders.length !== 0) {
            return this.props.orders.map((order, index) => {
                return (
                   <OrderItem picture={order.picture} 
                   itemName={order.itemName} 
                   quantity={order.quantity} 
                   key={`order${index}`} 
                />
                )

            });
        }
    }
    goToLanding =()=>{
        Actions.landing()
    }
    render() {
        return (
            <Container>
                <Card>
                    
                    <Button style={styles.backButton}onPress={()=> this.goToLanding()}>
                        <Text style={styles.backText}>{back}</Text>
                    </Button>
                    <Text style={{fontSize: 30, marginLeft:"auto", marginRight:"auto"}}>Profile</Text>
                    <CardItem >
                            <Image
                                source={{ uri: 'https://media.wired.com/photos/5b899992404e112d2df1e94e/master/pass/trash2-01.jpg' }}
                                style={styles.profileImage}
                            />
                    </CardItem>
                    <Text style={{fontSize: 20, marginLeft: 'auto', marginRight: 'auto'}}>Food Waste Fair NYC</Text>
                    <Card style={styles.profileSection}>
                        <CardItem >
                        <Text>Email: </Text>
                        <Text>wlin041@gmail.com</Text>
                        
                        </CardItem>
                        <CardItem >
                            <Text>Address: </Text>
                            <Text>123 Main Street,</Text>
                            <Text>New York, NY, 10000</Text>
                        </CardItem>
                    </Card>
                    
                </Card>
                <Body>
                    <Text style={{fontSize: 20, marginLeft: 'auto', marginRight: 'auto', marginBottom: 20, marginTop:20}}>Past Orders</Text>
                    <Card style={styles.cardStyle}>
                        {this.renderOrders()}
                    </Card>
                </Body>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    cardStyle: {
        width: 350
    },
    profileImage:{
        width: 150,
        height: 150, 
        borderRadius: 10,
        marginLeft: "auto",
        marginRight: "auto"
    },
    backButton:{
        backgroundColor:'white',
        marginTop: 50,
        marginLeft: 10,
        width: 40,
        borderRadius: 20
    },
    backText:{
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40
    },
    profileSection:{
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 60
    }
});

function mapStateToProps(state) {
    const { orders } = state.nonProfit;
    return { orders }
}

export default connect(mapStateToProps, {getNonProfitOrders})(NonProfitProfile);
