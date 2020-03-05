import React, {Component} from 'react';
import {StyleSheet, Image, Text, SectionList, SafeAreaView, Dimensions, Modal} from 'react-native';
import {Container, Content, Left, CardItem, Body, Right, Card, Item, Button} from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import OrderItem from '../components/OrderItem';
import {getNonProfitOrders, getListings} from '../store/actions'
import RatingPage from './RatingPage';

const back="<"
class NonProfitProfile extends Component {

    state = {
        modalVisible: false
    };


    handleOnPress() {
        this.setState({modalVisible: !this.state.modalVisible});
    }


    componentDidMount() {
        this.props.getNonProfitOrders();
    }


    renderOrders() {
        if (this.props.orders.length !== 0) {
            const DATA = [{
                title: 'Orders',
                data: this.props.orders
            }];
            console.log(DATA)
            return <SectionList
                        sections={DATA}
                        keyExtractor={(item, index) => `order${index}`}
                        renderItem={({ item }) => (
                            <OrderItem 
                                picture={item.picture} 
                                itemName={item.itemName} 
                                quantity={item.quantity} 
                                onPress={this.handleOnPress.bind(this)}/>
                                )}
                        renderSectionHeader={({ section: { title } }) => (
                            <Text style={styles.header}>{title}</Text>
                        )}
                    />
        }
    }
    // goToLanding =()=>{
    //     Actions.home()
    // }
    render() {
        return (
            <SafeAreaView>
                <Card style={{marginTop: 60}}>
                    
                    {/* <Button style={styles.backButton}onPress={()=> this.goToLanding()}>
                        <Text style={styles.backText}>{back}</Text>
                    </Button> */}
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
                        <Text>denny1@gmail.com</Text>
                        
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
                    <Modal visible={this.state.modalVisible} animationType={'slide'} >
                        <RatingPage 
                            restaurantName={'Zuma NYC'}
                            restaurantPicture={'https://s3-media1.fl.yelpcdn.com/bphoto/4_2Pqfr80B_No34F8RkfpQ/o.jpg'}
                            onPress={this.handleOnPress.bind(this)}
                        />
                    </Modal>
                </Body>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    cardStyle: {
        width: 350,
        height: Dimensions.get('screen').height
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
        marginBottom: 60,
        width: 350
       
    },
    headerStyle: {
        color: '#000',
        fontSize: 20
    }
});

function mapStateToProps(state) {
    const { orders } = state.nonProfit;
    return { orders }
}

export default connect(mapStateToProps, {getNonProfitOrders, getListings})(NonProfitProfile);
