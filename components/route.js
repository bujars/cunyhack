import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { ScrollView } from 'react-native'
import Landing from '../pages/landing'
import MapPage from '../pages/map'
import SignUp from '../pages/signUp'
import Sign_Up from '../pages/sign_Up'

const Routes = (props) => (
    <Router cardStyle={{ backgroundColor: 'white' }}>
        <ScrollView>
            <Scene key="signUp"  component={SignUp} initial={true}/>
            <Scene type="reset" component={Landing} title="Home" />
            <Scene key="map" component={MapPage} title="Map"/>
        </ScrollView>
    </Router>
)
export default Routes