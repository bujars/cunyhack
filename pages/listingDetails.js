import React from 'react'
import { StyleSheet, ScrollView, Text, Image, View, TouchableOpacity } from 'react-native';
import {Button, Footer, FooterTab, Form, Item, Input, Container, Content} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome5';



class listingDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reserved: false,
            quantity: 0
        };
    }
    
    pluralCheck = s => {
        if (s == 1) return " ago";
        else return "s ago";
    }

    timeConverter = timestamp => {
        let t = new Date(timestamp * 1000);
        let seconds = Math.floor((new Date() - t) / 1000);
    
        // check this interval is in years/months/days/hours/minutes?
        // total no of seconds in year are 31536000
        let interval = Math.floor(seconds / 31536000);
        if (interval > 1) {
        return interval + " year" + this.pluralCheck(interval);
        }
        // for months
        interval = Math.floor(seconds / 2592000);
        if (interval > 1) {
        return interval + " month" + this.pluralCheck(interval);
        }
        // for days
        interval = Math.floor(seconds / 86400);
        if (interval > 1) {
        return interval + " day" + this.pluralCheck(interval);
        }
        // for hours
        interval = Math.floor(seconds / 3600);
        if (interval > 1) {
        return interval + " hour" + this.pluralCheck(interval);
        }
        // for minutes
        interval = Math.ceil(seconds / 60);
        if (interval > 1) {
        return interval + " minute" + this.pluralCheck(interval);
        }
        // for seconds
        return Math.floor(seconds) + " second" + this.pluralCheck(seconds);
    };

    onReserve = () => {
        this.setState({reserved: true});

        setTimeout(function(){ Actions.reserveCart(); }, 1000);

    }   

    renderButton = () => {

        if(this.state.reserved) {
            return(
                <Footer>
                    <FooterTab>
                        <Button success full  >
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Added</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            )
        } else return (
            <Footer>
                <FooterTab>
                    <Button onPress={() => this.onReserve()} style={{backgroundColor:'#3F7E44'}} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Add To Cart</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }

    render() {
        const {restaurantName, foodName, pictureURL, quantity, description, postDate, expirationDate} = this.props;

        return (
            <Container>

                <ScrollView>
                    <Content style={{ padding: '2%' }}>

                        <Image source={{uri: pictureURL}} style={{width:'75%', aspectRatio:1, alignSelf:'center', marginVertical: 10}} />
                        <Text style={{textAlign:'left', marginLeft:10, fontSize:16, fontWeight: 'bold'}} > {restaurantName} </Text>

                        <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:15, borderBottomWidth:.3, paddingBottom:10}} >
                            <Text style={{fontSize:14, marginLeft:10}}> {foodName} </Text>
                            <Text style={{fontSize:14, fontWeight:'bold', fontStyle:'italic', color:'red', marginRight:10}} > {quantity} left </Text>
                        </View>

                        <Text style={{flexWrap:'wrap', fontSize:14, marginBottom:10}}>
                            <Text style={{color:'grey', fontWeight:'bold'}}>Description: </Text>
                            <Text>{description}</Text>
                        </Text>

                        <Text style={{flexWrap:'wrap', fontSize:14, marginBottom:10}}>
                            <Text style={{color:'grey', fontWeight:'bold'}}>Cooked Date: </Text>
                            <Text>{postDate}</Text>
                        </Text>

                        <Text style={{flexWrap:'wrap', fontSize:14, marginBottom:10}}>
                            <Text style={{color:'grey', fontWeight:'bold'}}>Pick Up By: </Text>
                            <Text>{expirationDate}</Text>
                        </Text>

                    </Content>
                </ScrollView>

                <View style={{flexDirection:'row', alignItems:'center', alignSelf:'center'}} >
                    <TouchableOpacity onPress={() => this.setState({quantity: this.state.quantity-1})}  >
                        <Icon name='minus-circle' size={30} color='#3F7E44' />
                    </TouchableOpacity>

                    <Text style={{fontSize:30, fontWeight:'bold',}} > {this.state.quantity} </Text>

                    <TouchableOpacity onPress={() => this.setState({quantity: this.state.quantity+1})} >
                        <Icon name='plus-circle' size={30} color='#3F7E44' />
                    </TouchableOpacity>
                </View>
                {this.renderButton()}

            </Container>


        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10
    },
})
export default listingDetails;