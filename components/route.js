import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { ScrollView } from 'react-native'
import Landing from '../pages/landing'
import MapPage from '../pages/map'
import SignUp from '../pages/signUp'
import NonProfitProfile from '../pages/NonProfitProfile';
import Feed from '../pages/Feed'
import foodListingPage from '../pages/foodListing'
import listingDetails from '../pages/listingDetails'
import foodUploadPage from '../pages/foodUpload'


const Routes = (props) => (
    <Router cardStyle={{ backgroundColor: 'white' }}>
        <ScrollView>
            <Scene key="signUp"  component={SignUp} />
            <Scene type="reset" component={Landing} title="Home" />
            <Scene key='feed' component={Feed} title='Feed' />
            <Scene key="landing" type="reset" component={Landing} title="Home"  />
            <Scene key="map" component={MapPage} title="Map"/>
            <Scene key="foodListing" component={foodListingPage} title="Take a picture of your food"/>
            <Scene key="foodUpload" component={foodUploadPage} title="Complete post"/>
            <Scene key="NonProfitProfile" component={NonProfitProfile} title="My Profile" initial={true}/>
        </ScrollView>
    </Router>
)
export default Routes