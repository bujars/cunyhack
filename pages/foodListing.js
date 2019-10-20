import React from 'react'
import { Text, View, ImageBackground } from 'react-native';
import { Container, Content, Footer, FooterTab, Button } from 'native-base';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';
import { Actions } from 'react-native-router-flux';

class foodListing extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            chosenDate: new Date(),
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            pictureTaken: false,
            photo: null
        };
        this.setDate = this.setDate.bind(this);
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    snap = async () => {
        if (this.camera) {
            let picture = await this.camera.takePictureAsync();
            console.log(picture.uri);
            this.setState({
                pictureTaken: true,
                photo: picture.uri
            })
        }
    };

    goToUpload = () => {
        Actions.foodUpload(this.state.photos)
    };

    renderButton = () => {

        if(this.state.pictureTaken) {
            return(
                <Footer>
                    <FooterTab>
                        <Button full onPress={this.goToUpload} >
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Continue</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            )
        } else return (
            <Footer>
                <FooterTab>
                    <Button full onPress={this.snap} >
                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>Take a picture</Text>
                    </Button>
                </FooterTab>
            </Footer>
        )
    }

    cameraOrPicture = () => {
        if(this.state.pictureTaken) {
            return(
                <ImageBackground
                    key={0}
                    source={{ uri: this.state.photo }}
                    style={{ aspectRatio: 1, marginVertical: 20, justifyContent: 'center', marginLeft: 40}}
                />
            )
        } else return (
            <View style={{ aspectRatio: 1 }}>

            <Camera 
                style={{ aspectRatio: 1, marginVertical: 20, marginLeft: 30 }} 
                type={this.state.type} 
                ref={ref => {
                    this.camera = ref;
                }}
            />
            </View>

        )
    }

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return <View />
        } else if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>
        } else {
            return (
                <Container>
                    
                    {this.cameraOrPicture()}

                    {this.renderButton()}

                </Container>
            )
        }
    }
}

export default foodListing