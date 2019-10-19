import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { ScrollView } from 'react-native'
import Landing from '../pages/landing'
import MapPage from '../pages/map'
import signUp from '../pages/signUp'

const Routes = (props) => (
    <Router cardStyle={{ backgroundColor: 'white' }}>
        <ScrollView>
            <Scene key="signUp"key="landing"  component={signUp} title="signUp" initial={true}/>
            <Scene type="reset" component={Landing} title="Home"  />
            <Scene key="map" component={MapPage} title="Map"/>
        </ScrollView>
    </Router>
)
export default Routes