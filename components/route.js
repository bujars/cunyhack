import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { ScrollView } from 'react-native'
import Landing from '../pages/landing'
import MapPage from '../pages/map'
import SignIn from '../pages/signIn'
import SignUp from '../pages/signUp'
import NonProfitProfile from '../pages/NonProfitProfile';
import Feed from '../pages/Feed'
import foodListingPage from '../pages/foodListing'
import listingDetails from '../pages/listingDetails'
import foodUploadPage from '../pages/foodUpload'
import { Icon } from 'native-base';
console.disableYellowBox = true;

//Create a dedicated class that will manage the tabBar icon
class TabIcon extends Component {
    render() {
      var color = this.props.selected ? '#00f240' : '#301c2a';
  
      return (
        <View style={{flex:1, flexDirection:'column', alignItems:'center', alignSelf:'center', justifyContent: 'center'}}>
          <Icon style={{color: color}} name={this.props.iconName || "circle"} size={18}/>
          <Text style={{color: color, fontSize: 12}}>{this.props.title}</Text>
        </View>
      );
    }
}

const Routes = (props) => (
    <Router cardStyle={{ backgroundColor: 'white' }}>
        <ScrollView>
            <Scene key="signUp"  component={SignUp} />
            <Scene type="reset" component={Landing} title="Home"/>
            <Scene key='feed' component={Feed} title='Feed' />
            <Scene key='listingDetails' component={listingDetails} title='listingDetails' />
            <Scene key="landing" type="reset" component={Landing} title="Home" />

            <Scene key="SignIn" component={SignIn} title="signin"/>
            <Scene key="signUp"  component={SignUp}/>
            <Scene type="reset" component={Landing} title="Home" />
            <Scene key='feed' component={Feed} title='Feed' />
            <Scene type="reset" component={Landing} title="Home"  />
            <Scene key="foodListing" component={foodListingPage} title="Take a picture of your food"/>
            <Scene key="foodUpload" component={foodUploadPage} title="Complete post"/>

            <Scene key='TabRoot' showLabel={false} hideNavBar tabs={true} initial={true}>
                <Scene 
                key="map" 
                component={MapPage} 
                initial={true} 
                hideNavBar={1} 
                initial
                keyColor='black'
                iconName='home'
                iconColor='#3F7E44'
                iconSize={24}
                icon={TabIcon}
                /> 
                <Scene key="NonProfitProfile" component={NonProfitProfile} title="My Profile" />
            </Scene>
        </ScrollView>
    </Router>
)
export default Routes