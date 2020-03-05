import React, {Component} from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { ScrollView, View } from 'react-native'
import Landing from '../pages/landing'
import MapPage from '../pages/map'
import SignIn from '../pages/signIn'
import SignUp from '../pages/signUp'
import NonProfitProfile from '../pages/NonProfitProfile';
import Feed from '../pages/Feed'
import foodListingPage from '../pages/foodListing'
import listingDetails from '../pages/listingDetails'
import foodUploadPage from '../pages/foodUpload'
import Icon from 'react-native-vector-icons/FontAwesome5';
import ReserveCart from '../pages/reserveCart'



console.disableYellowBox = true;

class TabIcon extends Component {
    render(){
        const {iconName, iconColor, iconSize} = this.props;
        return (
            <View style={{justifyContent:'center', alignItems:'center'}} >
                <Icon name={iconName} color={iconColor} size={iconSize} />
            </View>
        )
    }
}

const Routes = (props) => (
    <Router cardStyle={{ backgroundColor: 'white' }}>
        <ScrollView>
            {/* <Scene type="reset" component={Landing} title="Home"/> */}
            <Scene key='feed' component={Feed} title='Feed' />
            <Scene key='listingDetails' component={listingDetails} title='listingDetails' />
            <Scene key="SignIn" component={SignIn} title="signin"/>
            <Scene key="signUp" component={SignUp} hideNavBar={true} initial={true}/>
            <Scene key='feed' component={Feed} title='Feed' />
            <Scene key="foodListing" component={foodListingPage} title="Take a picture of your food"/>
            <Scene key="foodUpload" component={foodUploadPage} title="Complete post"/>
            {/* <Scene key="reserveCart" component={ReserveCart} initial={true} hideNavBar={1}  iconName = 'shopping-cart'
                    iconColor='#3F7E44' 
                    iconSize={24}
                    icon={TabIcon}/> */}
            <Scene key='TabRoot' showLabel={false} hideNavBar tabs={true} >
                <Scene 
                key="map" 
                component={MapPage} 
                hideNavBar={1} 
                keyColor='black'
                iconName='home'
                iconColor='#3F7E44'
                iconSize={24}
                icon={TabIcon}
                /> 
                <Scene 
                    key="reserveCart" 
                    component={ReserveCart} 
                    hideNavBar={1}
                    iconName = 'shopping-cart'
                    iconColor='#3F7E44' 
                    iconSize={24}
                    icon={TabIcon}
                />
                <Scene 
                    key="NonProfitProfile" 
                    component={NonProfitProfile} 
                    title="My Profile" 
                    hideNavBar
                    icon={TabIcon}
                    iconSize={24}
                    iconColor='#3F7E44'  
                    iconName='user-alt'  
                /> 

            </Scene>
        </ScrollView>
    </Router>
)
export default Routes