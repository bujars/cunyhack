import React, {Component} from 'react';
import {StyleSheet, Image, Text, SectionList, SafeAreaView, Dimensions, Modal} from 'react-native';
import {Content, Left, CardItem, Body, Right, Card} from 'native-base';
import { connect } from 'react-redux';
import OrderItem from '../components/OrderItem';
import {getNonProfitOrders, getListings} from '../store/actions'
import RatingPage from './RatingPage';

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


    render() {
        return (
            <SafeAreaView>
                <Card>
                    <CardItem>
                        <Left>
                            <Image
                                source={{ uri: 'https://media.wired.com/photos/5b899992404e112d2df1e94e/master/pass/trash2-01.jpg' }}
                                style={{width: '60%', height: 130, borderRadius: 100 }}
                            />
                        </Left>
                        <Right>
                            <Text>Food Waste Fair NYC</Text>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Text>123 Main Street, New York, NY, 10000</Text>
                    </CardItem>
                </Card>
                <Body>
                    <Card style={styles.cardStyle}>
                        {this.renderOrders()}
                    </Card>
                    <Modal visible={this.state.modalVisible} animationType={'slide'} >
                        <RatingPage 
                            restaurantName={'Restaurant'}
                            restaurantPicture={'http://angelosriverside.com/images/Angelos-Pizza-Logo.png'}
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
