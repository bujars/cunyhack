import React, {PureComponent} from 'react';
import { Content, Icon, Button, Container, Header, Card, Left } from 'native-base'
import { Text, Image, StyleSheet } from 'react-native';
import { AirbnbRating} from 'react-native-ratings';

class RatingPage extends PureComponent {
    render() {
        return (
            <Container>
                <Header style={styles.headerStyle}>
                    <Button onPress={() => this.props.onPress()} style={styles.buttonStyle}>
                        <Icon name="close" />
                    </Button>
                </Header>
                <Content centerContent contentContainerStyle={{alignItems: 'center', marginTop: 60}}>
                    <Card>
                        <Image source={{uri: this.props.restaurantPicture}} style={{alignSelf: 'center'}}
                         style={{width: 100, height: 100, resizeMode: 'contain'}} />
                        <Text style={{fontSize: 20}} >{this.props.restaurantName}</Text>
                    </Card>
                    <AirbnbRating
                        count={5}
                        reviews={["Terrible", "Bad", "OK", "Very Good", "Amazing"]}
                        defaultRating={3}
                        size={40}
                        reviewColor={'#000'}
                    />
                    <Button style={styles.submitButtonStyle} onPress={() => this.props.onPress()} >
                        <Text style={styles.submitTextStyle} >Submit</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        justifyContent: 'space-between'
    },
    headerStyle: {
        padding: 0,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor: '#3F7E44'
    },
    buttonStyle: {
        alignSelf: 'flex-start',
        backgroundColor: '#3F7E44'
    },
    submitButtonStyle: {
        alignSelf: 'center',
        backgroundColor: '#3F7E44',
        borderRadius: 50,
        padding: '10%',
        marginTop: 10
    },
    submitTextStyle: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 20
    }
})

export default RatingPage;