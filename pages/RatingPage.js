import React, {PureComponent} from 'react';
import { Content, Icon, Button, Container, Header, Card, Left } from 'native-base'
import { Text, Image } from 'react-native';
import { AirbnbRating} from 'react-native-ratings';

class RatingPage extends PureComponent {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button onPress={() => this.props.onPress()}>
                            <Icon name="close" />
                        </Button>
                    </Left>
                </Header>
                <Content centerContent>
                    <Card>
                        <Image source={{uri: this.props.restaurantPicture}}
                         style={{width: 100, height: 100, resizeMode: 'contain'}} />
                        <Text>{this.props.restaurantName}</Text>
                    </Card>
                    <AirbnbRating
                        count={5}
                        reviews={["Terrible", "Bad", "OK", "Very Good", "Amazing"]}
                        defaultRating={5}
                        size={40}
                    />
                </Content>
            </Container>
        );
    }
}

export default RatingPage;