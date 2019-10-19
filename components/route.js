import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { ScrollView } from 'react-native'
import Landing from '../pages/landing'
import MapPage from '../pages/map'
import SignUp from '../pages/signUp'
import Feed from '../pages/Feed'
import foodListingPage from '../pages/foodListing'
import listingDetails from '../pages/listingDetails'

const Routes = (props) => (
    <Router cardStyle={{ backgroundColor: 'white' }}>
        <ScrollView>
            <Scene key="signUp"  component={SignUp} />
            <Scene type="reset" component={Landing} title="Home" />
            <Scene key='feed' component={Feed} title='Feed' initial={true}/>
            <Scene type="reset" component={Landing} title="Home"  />
            <Scene key="map" component={MapPage} title="Map" />
            <Scene key="foodListing" component={foodListingPage} title="Upload leftover food" />
            <Scene key='listingDetails' component={listingDetails} title='listingDetails'  />
        </ScrollView>
    </Router>
)
export default Routes