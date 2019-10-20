import React from 'react'
import { Text, ScrollView, Alert } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Form, Textarea, Item, Input, DatePicker } from 'native-base';
import firebase from 'firebase';


class foodUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            chosenDate: new Date(),
            imageId: 0,
            progress: 0,
            currentFileType: 0,
            progress: 0
        };
        this.setDate = this.setDate.bind(this);
    }

    s4 = () => { return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1) };

    uniqueId = () => { return (this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4() + "-" + this.s4()) };

    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

    onChooseImagePress = async () => {
        if (this.props.photo) {
            let imageId = this.uniqueId();
            this.uploadImage(this.props.photo, imageId)
            .then(() => {
                Alert.alert("Food uploaded!")
            })
            .catch((error) => {
                Alert.alert(error);
            });
        }
    }

    uploadImage = async (uri, imageName) => {
        const response = await fetch(uri);
        const blob = await response.blob();

        var uploadTask = firebase.storage().ref().child("images/" + imageName);

        await uploadTask.put(blob);

        const downloadURL = await firebase.storage().ref().child("images/" + imageName).getDownloadURL();

        this.processUpload(downloadURL);
    }

    processUpload = async (imageUrl) => {

        let foodName = "Test";
        let postDate = Date.now();
        let expirationDate = this.state.chosenDate.toString();
        let description = "this.state.description";
        console.log("checkpoint 3")

        let listingObject = {
            description: description,
            expirationDate: expirationDate,
            postDate: postDate,
            foodName: foodName,
            image: imageUrl
        };


    firebase.database().ref("/listings/").push(listingObject);


    };

    render() {
        return (
            <Container>
                
                <ScrollView>
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
                </ScrollView>


                <Footer>
                    <FooterTab>
                        <Button full onPress={this.onChooseImagePress}>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>List Food</Text>
                        </Button>
                    </FooterTab>
                </Footer>




            </Container>
        )
        }
}

export default foodUpload