import React from 'react'
import { StyleSheet, SafeAreaView, Image, Text, TouchableOpacity, FlatList, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Feed extends React.Component {

    renderFoodName = (foodName) => {
        if (foodName.length >14)
            return <Text style={{fontSize:10}} > {foodName.substring(0,14)}... </Text>
        else
            return <Text style={{fontSize:10}} > {foodName} </Text>
    }

    renderListingCard = (listing) => {
        const {restaurantName, foodName, pictureURL, quantity, description, expirationDate,postDate} = listing.item[1][0];
        let listingInfo = {restaurantName, foodName, pictureURL, quantity, description, expirationDate, postDate};
        return (
            <TouchableOpacity style={styles.feedList}  onPress={() => Actions.listingDetails(listingInfo)} >
                <Text style={{textAlign:'center', fontWeight:'bold'}} > {restaurantName} </Text>
                <Image source={{uri: pictureURL}} style={{width:'100%', aspectRatio:1}} /> 
                {this.renderFoodName(foodName)}
                <Text style={{fontStyle:'italic', color:'grey', fontSize:10}} > {quantity} left </Text>
            </TouchableOpacity>
        )
    }

    render() {
        let feedList = [];
        for (let i = 0; i<10; i++){
            let listing = [
                [`listingID${i}`], 
                [{
                    author: 'authorID',
                    restaurantName: 'Italian To Go',
                    foodName: 'Spaghetti And Meatball',
                    description: 'Made 10 hours ago. Still good to eat.',
                    pictureURL: 'https://www.jennycancook.com/wp-content/uploads/2015/08/quick-easy-spaghetti-meatballs.jpg',
                    expirationDate: Math.floor(Date.now() / 1000),
                    postDate: Math.floor(Date.now() / 1000),
                    quantity: 10
                }]
            ]
            feedList.push(listing);
        }
        return (
            <View style={styles.container} >
                <Text style={{textAlign:'right'}} > FILTER ICON </Text>
                <FlatList
                    numColumns={3}
                    data = {feedList}
                    renderItem = {this.renderListingCard}
                    keyExtractor = {(listingCard) => listingCard[0]}
                    initialNumToRender = {10}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    feedList:{
        width: '28%',
        margin: '2.6%',
        marginVertical: 10,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        flexDirection:'column'
    }
})
export default Feed;