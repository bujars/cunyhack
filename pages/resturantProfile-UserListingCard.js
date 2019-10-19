  
import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image, Alert} from 'react-native';
import {renderRating, renderColor, timeConverter} from '../../common/functions';
import {Actions} from 'react-native-router-flux';
import {connect} from 'react-redux';
import Modal from 'react-native-modal';
import {Button} from '../../common/components';
import {editPost, bumpPost} from '../../../actions/EditActions/EditPostsActions'
import colors from '@assets/colors';
import Icon from 'react-native-vector-icons/FontAwesome5';
import firebase from 'firebase'


class UserListingCard extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }

    routeToListing = () => {
        const {postID} = this.props;
        Actions.ListingDetails({postID});
    }

    renderItemName = () => {
        const {itemName} = this.props.data;
        if (itemName.length > 16)
            return itemName.substring(0, 16) + "...";
        else    
            return itemName;
    }

    render(){
        const {images} = this.props.data;
        return (
            
            <TouchableOpacity onPress={this.routeToListing} style={styles.card}>
                <Image source={{uri: images[0]}} style={styles.imageStyle} />

                <View style={{ width: '100%', flexDirection: 'row'}}>

                    <View style={{flexDirection:'column', justifyContent:'space-between', width: '75%'}} >
                        <Text style={{  width: '100%', fontSize: 12}}>{this.renderItemName()}</Text>
                    </View>
                </View>
            </TouchableOpacity>

        )
    }
}

export default connect(mapStateToProps)(UserListingCard);

