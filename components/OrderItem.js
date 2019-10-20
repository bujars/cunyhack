import React from 'react';
import {Text, Image, StyleSheet} from 'react-native';
import {CardItem, Icon, Right, Left, Button} from 'native-base';

function OrderItem(props) {
    const {picture, itemName, quantity, onPress} = props;
    return (
        <Button style={styles.container} onPress={() => onPress()}>
            <Left style={styles.leftContainer}>
                <Image source={{ uri: picture }} style={styles.image} />
                <Text style={{color: 'grey'}}>  Item: </Text>
                <Text>{itemName}</Text>
                <Text style={{color: 'grey'}} >    quantity: </Text>
                <Text>{quantity}</Text>
            </Left>
            <Right>
                <Icon name="arrow-forward" />
            </Right>
        </Button>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomColor: '#eceded',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: '5%'
    },
    leftContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    image: {
        resizeMode: 'contain',
        width: 30,
        height: 50,
        borderRadius: 50
    }
})

export default OrderItem;