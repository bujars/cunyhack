import React, {Component} from 'react';
import {StyleSheet, Image, Text} from 'react-native';
import {Container, Content, Left, CardItem, Body} from 'native-base';
import { connect } from 'react-redux';

class NonProfitProfile extends Component {

    render() {
        const {profilePicture, name, address} = this.props.user;
        return (
            <Container>
                <Header>
                    <Content>
                        <Card>
                            <Left>
                                <Image  source={{uri: '#'}}/>
                            </Left>
                            <CardItem>
                                <Text>{"Name"}</Text>
                            </CardItem>
                        </Card>
                    </Content>
                </Header>
                <Body>
                    <Content>
                        <CardItem>
                            <Text> This is a test </Text>
                        </CardItem>
                    </Content>
                </Body>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state.users;
    return { user }
}

export default connect(mapStateToProps)(NonProfitProfile);
