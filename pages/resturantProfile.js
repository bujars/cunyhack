import React, {Component} from 'react';
import {StyleSheet, Image, Text, ScrollView, FlatList} from 'react-native';
import {Container, Content, Left, CardItem, Body, Header, Card, Right} from 'native-base';
import StarRating from 'react-native-star-rating';

class resturantProfile extends Component {
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
            <Container>
                <Card>
                    <CardItem>
                        <Right>
                            <Text>{"Name"}</Text>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Right>
                            <Text>{"Address"}</Text>
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Image  source={{uri: '#'}}/>
                        </Left>
                        <Right>
                            <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={this.state.starCount}
                            />
                        </Right>
                    </CardItem>
                    <CardItem>
                        <Right>
                            <Text>{"Food Served"}</Text>
                        </Right>
                    </CardItem>
                </Card>
            <Body>
                <ScrollView>
                        <FlatList
                            data = {posts}
                            renderItem = {this.renderPostCard}
                            numColumns = {2}
                            keyExtractor = {(PostCard) => PostCard[0]}
                        />
                </ScrollView>
            </Body>
        </Container>
        )
    }
} 


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

export default resturantProfile;

