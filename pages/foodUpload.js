import React from 'react'
import { Text, ScrollView } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Form, Textarea, Item, Input, DatePicker } from 'native-base';

class foodUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            chosenDate: new Date(),
        };
        this.setDate = this.setDate.bind(this);
    }


    setDate(newDate) {
        this.setState({ chosenDate: newDate });
    }

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
                        <Button full>
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white' }}>List Food</Text>
                        </Button>
                    </FooterTab>
                </Footer>




            </Container>
        )
        }
}

export default foodUpload