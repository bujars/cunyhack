import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'
class Landing extends React.Component {
    goToAbout = () => {
        Actions.map()
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.goToAbout}>
                        <Text>This is HOME!</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => Actions.foodListing()}>
                        <Text>Food Listing</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
})
const mapStateToProps = state => ({
    users : state.restaurantReducer.users
});
export default connect(
  mapStateToProps,
  {}
)(Landing)