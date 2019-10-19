import React, {Component} from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {Container, Content, Left, CardItem, Body, Right, Card} from 'native-base';
import { connect } from 'react-redux';
import OrderItem from '../components/OrderItem';

class NonProfitProfile extends Component {

    render() {
        const orders = ["One", 'two', 'three'];
        return (
            <Container>
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
                        {
                            orders.map(order => {
                                return <OrderItem>{order}</OrderItem>
                            })
                        }
                    </Card>
                </Body>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    cardStyle: {
        width: 200
    }
});

function mapStateToProps(state) {
    const { user } = state.users;
    return { user }
}

export default connect()(NonProfitProfile);
