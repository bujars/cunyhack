import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Form, Textarea, Item, Input, DatePicker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import * as Permissions from 'expo-permissions';
import { Camera } from 'expo-camera';

class foodListing extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            chosenDate: new Date(),
            hasCameraPermission: null,
            type: Camera.Constants.Type.back
        };
        this.setDate = this.setDate.bind(this);
    }

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    snap = async () => {
        if (this.camera) {
          let photo = await this.camera.takePictureAsync();
          console.log(photo);
        }

    };

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
                    
                    <View style={{ flex: 1, aspectRatio: 1, justifyContent: 'center', marginTop: 10 }}>
                        <Camera 
                            style={{ flex: 1 }} 
                            type={this.state.type} 
                            ref={ref => {
                                this.camera = ref;
                            }}
                        />
                    </View>

                    <TouchableOpacity onPress={this.snap} style={{borderColor:'#1E2D47', borderWidth:1, backgroundColor:'#D6D7D8', paddingHorizontal: 5}} >
                      <Text>Take a picture</Text>                        
                    </TouchableOpacity>


                    <Content style={{ padding: '2%' }}>
                        <Form>
                            <Textarea style={{ fontSize: 16, padding: '2%' }} rowSpan={5} bordered placeholder="Description of food..." />
                            
                            <Item>
                                <Input keyboardType="numeric" placeholder="Food quantity" />
                            </Item>

                            <DatePicker
                                defaultDate={new Date()}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText="Select Food expiration date"
                                onDateChange={this.setDate}
                                disabled={false}
                            />

                            <Text style={{ fontSize: 8, fontStyle: 'italic', padding: '2%' }}>
                                Note: If your food isn't picked up by {this.state.chosenDate.toString().substr(4, 12)}, 
                                it will be removed.
                            </Text>

                        </Form>
                    </Content>

                    <Footer>
                        <FooterTab>
                            <Button full>
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>List Food</Text>
                            </Button>
                        </FooterTab>
                    </Footer>

                </Container>
            )
        }
    }
}

export default foodListing