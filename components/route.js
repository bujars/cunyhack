import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { ScrollView } from 'react-native'
import Landing from '../pages/landing'
import MapPage from '../pages/map'
<<<<<<< HEAD
import SignUp from '../pages/signUp'
import Feed from '../pages/Feed'
=======
import foodListingPage from '../pages/foodListing'
>>>>>>> 7d37e43... init

const Routes = (props) => (
    <Router cardStyle={{ backgroundColor: 'white' }}>
        <ScrollView>
            <Scene key="signUp"  component={SignUp} initial={true}/>
            <Scene type="reset" component={Landing} title="Home" />
            <Scene key='feed' component={Feed} title='Feed' />
            <Scene type="reset" component={Landing} title="Home"  />
            <Scene key="map" component={MapPage} title="Map"/>
            <Scene key="foodListing" component={foodListingPage} title="Upload leftover food"/>
        </ScrollView>
    </Router>
)
export default Routes