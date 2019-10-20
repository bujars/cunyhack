import React from 'react'
import { StyleSheet, SafeAreaView, Image, Text, TouchableOpacity, FlatList, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Feed extends React.Component {

    renderFoodName = (foodName) => {
        if (foodName.length >17)
            return <Text style={{fontSize:10, textAlign:'left'}} > {foodName.substring(0,17)}... </Text>
        else
            return <Text style={{fontSize:10}} > {foodName} </Text>
    }

    renderListingCard = (listing) => {
        const {restaurantName, foodName, pictureURL, quantity, description, expirationDate, postDate, distanceAway} = listing.item[1][0];
        let listingInfo = {restaurantName, foodName, pictureURL, quantity, description, expirationDate, postDate, distanceAway};
        return (
            <TouchableOpacity style={{height:200, aspectRatio:.7, margin:10, padding:10, borderRadius:10, opacity:.85}}  onPress={() => Actions.listingDetails(listingInfo)} >
                <Text style={{textAlign:'center', fontWeight:'bold', opacity:1}} > {restaurantName} </Text>
                <Image source={{uri: pictureURL}} style={{width:'100%', aspectRatio:1, opacity:1}} /> 
                {this.renderFoodName(foodName)}
                <Text style={{ color:'#f54c4f', fontSize:10,opacity:1}} > {quantity} left </Text>
                <Text style={{color:'grey', fontSize:10, fontStyle:'italic' }} > {distanceAway} mi </Text>
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
                    distanceAway: .3,
                    quantity: 10
                }]
            ]
            feedList.push(listing);
        }
        return (
            <SafeAreaView style={styles.container} >
                <FlatList
                    horizontal
                    style={{marginRight:10, marginLeft:10, borderRadius:10,}}
                    data = {feedList}
                    renderItem = {this.renderListingCard}
                    keyExtractor = {(listingCard) => listingCard[0]}
                    initialNumToRender = {10}
                />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        bottom:0,
        position:'absolute',
        marginBottom: 35,
        height:'30%',
    },
    feedList:{
        height: '25%',
        aspectRatio:1,
        margin: '2.6%',
        marginVertical: 10,
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        flexDirection:'column'
    }
})
export default Feed;