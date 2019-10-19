import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { ScrollView } from 'react-native'
import Landing from '../pages/landing'
import MapPage from '../pages/map'
import signUp from '../pages/signUp'
import Feed from '../pages/Feed';

const Routes = (props) => (
    <Router cardStyle={{ backgroundColor: 'white' }}>
        <ScrollView>
            <Scene key='feed' component={Feed} title='Feed' initial={true} />
            <Scene key="signUp" key="landing"  component={signUp} title="signUp" />
            <Scene type="reset" component={Landing} title="Home"  />
            <Scene key="map" component={MapPage} title="Map"/>
        </ScrollView>
    </Router>
)
export default Routes