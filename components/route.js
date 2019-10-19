import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { ScrollView } from 'react-native'
import Landing from '../pages/landing'
import MapPage from '../pages/map'
import SignUp from '../pages/signUp'
import NonProfitProfile from '../pages/NonProfitProfile';
import Feed from '../pages/Feed'
import restuarantProfilePage from '../pages/resturantProfile'

const Routes = (props) => (
    <Router cardStyle={{ backgroundColor: 'white' }}>
        <ScrollView>


            <Scene key="signUp" component={SignUp} initial={true} />

            <Scene type="reset" component={Landing} title="Home" />
            <Scene key='feed' component={Feed} title='Feed' />
            <Scene type="reset" component={Landing} title="Home"  />
            <Scene key="map" component={MapPage} title="Map"/>

            <Scene key="resturantProfile" component={restuarantProfilePage} title="Profile"/>

            <Scene key="NonProfitProfile" component={NonProfitProfile} title="My Profile"/>

        </ScrollView>
    </Router>
)
export default Routes