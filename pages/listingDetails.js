import React from 'react'
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native';
import {Button, Footer, FooterTab} from 'native-base';


class listingDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reserved: false
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

    renderButton = () => {

        if(this.state.reserved) {
            return(
                <Footer>
                    <FooterTab>
                        <Button style={{ color: '#3F7E44' }} full >
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Reserved ✔️</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            )
        } else return (
            <Footer>
                <FooterTab>
                    <Button full onPress={this.setState({reserved: true})} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Reserve</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }

    render() {
        const {restaurantName, foodName, pictureURL, quantity, description, postDate, expirationDate} = this.props;

        return (
            <ScrollView  contentContainerStyle={styles.container} >
                <Image source={{uri: pictureURL}} style={{width:'90%', aspectRatio:1, alignSelf:'center'}} />
                <Text style={{textAlign:'left', marginLeft:10, fontSize:26}} > {restaurantName} </Text>

                <View style={{flexDirection:'row', justifyContent:'space-between', marginBottom:15, borderBottomWidth:.3, paddingBottom:10}} >
                    <Text style={{fontSize:16, marginLeft:10}}> {foodName} </Text>
                    <Text style={{fontSize:16, fontWeight:'bold', fontStyle:'italic', color:'red', marginRight:10}} > {quantity} left </Text>
                </View>

                <Text style={{flexWrap:'wrap', fontSize:16}}>
                    <Text style={{color:'grey', fontWeight:'bold'}}> Description: </Text>
                    <Text style={{}}> {description} </Text>
                </Text>

                <Text style={{flexWrap:'wrap', fontSize:16}}>
                    <Text style={{color:'grey', fontWeight:'bold'}}> Cooked Date: </Text>
                    <Text style={{}}> {this.timeConverter(postDate)} </Text>
                </Text>

                <Text style={{flexWrap:'wrap', fontSize:16}}>
                    <Text style={{color:'grey', fontWeight:'bold'}}> Pick Up By: </Text>
                    <Text style={{}}> {this.timeConverter(expirationDate)} </Text>
                </Text>
                
                <Button
                    style={{marginBottom:45, marginTop: 20, width: '90%', marginLeft: 'auto', marginRight: 'auto', justifyContent: 'center', borderRadius: 10, alignSelf:'center', alignItems:'center', bottom:0, position:'absolute'}}
                    onPress = {() => this.onReserve()}
                > 
                    <Text style={{color: 'white', textAlign: 'center', justifyContent: 'center', fontSize:26}} >Reserve</Text> 
                </Button>

            </ScrollView>
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