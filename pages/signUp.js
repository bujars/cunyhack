import React from 'react'
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

class SignUp extends React.Component {
    goToAbout = () => {
        Actions.map()
    }
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.goToAbout}>
                        <Text>This is the sign up</Text>
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
export default SignUp