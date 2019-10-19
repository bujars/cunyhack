import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { ScrollView } from 'react-native'
import Landing from '../pages/landing'
import MapPage from '../pages/map'
import signUp from '../pages/signUp'
import NonProfitProfile from '../pages/NonProfitProfile';

const Routes = (props) => (
    <Router cardStyle={{ backgroundColor: 'white' }}>
        <ScrollView>
            <Scene key="signUp"key="landing"  component={signUp} title="signUp" initial={true}/>
            <Scene type="reset" component={Landing} title="Home"  />
            <Scene key="map" component={MapPage} title="Map"/>
            <Scene key="NonProfitProfile" component={NonProfitProfile} title="My Profile" />
        </ScrollView>
    </Router>
)
export default Routes