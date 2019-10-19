import React from 'react'
import { StyleSheet, SafeAreaView, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class Feed extends React.Component {

    render() {
        return (
            <SafeAreaView style={styles.container} >
                <Text>
                    THIS IS FEED PAGE
                </Text>
            </SafeAreaView>
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
export default Feed;