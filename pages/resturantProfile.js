import React, {Component} from 'react';
import {StyleSheet, Image, SafeAreaView, View, Text, ScrollView, FlatList} from 'react-native';
import {Container} from 'native-base';
import StarRating from 'react-native-star-rating';

class restuarantProfile extends Component {
    constructor(){
        super();
        this.state = {
            startCount:3.5
        };
    }

    renderPostCard = (postItem) => {
        return (
            <UserListingCard 
                data={postItem.item[1]} 
                postID={postItem.item[0]} 
            />
        )
    }

    onStarRatingPress(rating) {
        this.setState({
          starCount: rating
        });
      }

    // renderPostHeader = () => {
    //     if (this.props.posts.length < 1)
    //         return <Text style={{fontSize:24, fontFamily:'Montserrat-Medium', margin: '3%', textAlign:'center' }} > No Posts </Text>
    //     else
    //         return <Text style={{fontSize:24, fontFamily:'Montserrat-Medium', margin: '3%' }} > Posts </Text>
    // }

    render() {
        const {
            restaurantName, 
            posts, 
            rating, 
            listing, 
            mealsServed,
            address } = this.props;

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.information} >

                    {/* <View style={{flexDirection:'row'}} >
                        <Image source={} style={{width:'30%', aspectRatio:1, alignContent: 'center'}} />
                    </View> */}

                    <View>
                        <Text style={{ fontSize: 24,  alignContent: 'center' }} >{restaurantName}</Text>
                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                        />
                        <Text style={{ fontSize: 24, alignContent: 'center' }} >{address}</Text>
                        <Text style={{ fontSize: 24, alignContent: 'center' }} >meals served : {mealsServed}</Text>
                    </View>


                </View>

                {/* {this.renderPostHeader()} */}

                    <ScrollView>
                        <FlatList
                            data = {posts}
                            renderItem = {this.renderPostCard}
                            numColumns = {2}
                            keyExtractor = {(PostCard) => PostCard[0]}
                        />
                    </ScrollView>

            </SafeAreaView>
        )
    }
} 

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // backgroundColor: white,
    },
    information: {
        justifyContent:'space-around',
        flexDirection: 'row'
    }
});

// const mapStateToProps = state => {
//     let feedList = state.Feed;
//     const {
//         restaurantName, 
//         posts, 
//         rating, 
//         listing, 
//         mealsServed,
//         address
//         } = state.Auth;
//     let userPosts = posts;
//     console.log(userPosts);
//     if (posts === null || posts === undefined)
//         return {posts: [], username, points}
//     else{
//         let userFeedObj = {};
//         for (let post in userPosts){
//             userFeedObj[post] = feedList[post]
//         }
//         let userFeed = Object.entries(userFeedObj);
//         return {
//             posts: restaurantName, 
//             posts, 
//             rating, 
//             listing, 
//             mealsServed,
//             address
//         }
//     }
// }

export default restuarantProfile

