import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { ScrollView } from 'react-native'
import Landing from '../pages/landing'
import MapPage from '../pages/map'
import SignIn from '../pages/signIn'
import SignUp from '../pages/signUp'
import ReserveCart from '../pages/reserveCart'
import NonProfitProfile from '../pages/NonProfitProfile';
import Feed from '../pages/Feed'
import foodListingPage from '../pages/foodListing'
import listingDetails from '../pages/listingDetails'
import foodUploadPage from '../pages/foodUpload'
import {TouchableOpacity,View} from 'react-native'

const Routes = (props) => (
    <Router cardStyle={{ backgroundColor: 'white' }}>
        <ScrollView>
            <Scene key="landing" type="reset" component={Landing} title="Home" />
            <Scene key="map" component={MapPage} title="Map"/>
            <Scene key="SignIn" component={SignIn} />
            <Scene key="signUp"  component={SignUp}  hideNavBar={1}/>
            <Scene type="reset" component={Landing} />
            <Scene key='feed' component={Feed} title='Feed' />
            <Scene key="landing" type="reset" component={Landing} title="Home"  />
            <Scene key="listingDetails" component={listingDetails} title="Details"  />
            <Scene key="map" component={MapPage} hideNavBar={1} initial={true}/>
            <Scene key="foodListing" component={foodListingPage} title="Take a picture of your food"/>
            <Scene key="foodUpload" component={foodUploadPage} title="Complete post"/>
            <Scene key="reserveCart" component={ReserveCart} hideNavBar={1}/>
            <Scene key="NonProfitProfile" component={NonProfitProfile} hideNavBar={true}/>

        </ScrollView>
    </Router>
)
export default Routes