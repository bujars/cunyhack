import React from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import axios from 'axios';
import { resume } from 'expo/build/AR';
import {connect} from 'react-redux';
import Feed from '../pages/Feed';
import {fetch_feed} from '../store/actions/'

class map extends React.Component {
	_isMounted = false;
	constructor(props) {
		super(props);
		this.state = {
			marginBottom: 1,
			initialRegion: [],
			resturantPins: []
		}
	}

	async componentDidMount() {
		this._isMounted = true;
		let resturantArr = [
			{ name: 'Little Basil', location: [40.741180, -73.982200], pictureURL: 'https://s3-media3.fl.yelpcdn.com/bphoto/eew6imY5oO0qcpENpFRCEw/258s.jpg', foodName: 'Pad Thai', quantity:3, distanceAway: .05 },
			{ name: 'Bao Bao Cafe', location: [40.740830, -73.983470], pictureURL: 'https://s3-media2.fl.yelpcdn.com/bphoto/0H7vQlou3cOHKjfoknwTHA/o.jpg', foodName: 'Bao Bao Noodles', quantity:4, distanceAway: .04 },
			{ name: 'Boqueria', location: [40.740299, -73.993713], pictureURL: 'https://cdn-image.foodandwine.com/sites/default/files/1501086700/gambas-al-ajillo-XL-RECIPE0917.jpg',foodName: 'Gambas al Ajillo', quantity:2, distanceAway: .6 },
			{ name: 'Chipotle', location: [41.954220, -75.280853], pictureURL: 'https://detoxinista.com/wp-content/uploads/2019/01/chipotle-burrito-bowl-recipe.jpg',foodName: 'Burrito Bowls', quantity:9, distanceAway: .1 },
			{ name: 'Di Di Dumpling', location: [40.740180, -73.984590],  pictureURL: 'http://dididumpling.eatintakeout.net/media/3557/3.jpg?width=1080&height=1080', foodName: 'Beef PotStickers', quantity:6, distanceAway: .1 },
			{ name: 'Haandi', location: [40.742400, -73.982340], pictureURL: 'https://s3-media4.fl.yelpcdn.com/bphoto/NINedu2Pb6j3TXz_kd3cCQ/o.jpg', foodName: 'Lamb Biryani', quantity:1, distanceAway: .2 },
			{ name: 'Tacombi', location: [40.742670, -73.990330], pictureURL: 'https://s3-media1.fl.yelpcdn.com/bphoto/KpC1h8QFhBFXJfENxuZ6ZQ/o.jpg', foodName: 'Fish Tacos', quantity:2, distanceAway: .5 },
			{ name: 'Zuma NYC', location: [40.750420, -73.980621], pictureURL: 'https://s3-media4.fl.yelpcdn.com/bphoto/tgKHteMZvAqGRfR6KVf1BQ/o.jpg', foodName: 'Corn on Cob', quantity:10, distanceAway: .7 },
			{ name: 'Korea BBQ', location: [ 40.747230, -73.986480], pictureURL: 'https://s3-media4.fl.yelpcdn.com/bphoto/_RplZ_hTmM9trnhgJlQsMQ/o.jpg', foodName: 'Beef', quantity:10, distanceAway: .5 },
			{ name: 'Hole Burgers', location: [40.746140,-73.977478], pictureURL: 'https://s3-media2.fl.yelpcdn.com/bphoto/LG_dFiqNKg1L2v25qSLdwQ/o.jpg', foodName: 'Bacon and Fries', quantity:2, distanceAway: .5 },
		]
		console.log(resturantArr[0].location[0])
		let resturantPins = [];
		resturantArr.map((item,i) => {
			const {name, foodName, pictureURL, quantity, description, expirationDate, postDate, distanceAway} = item;
			let listingInfo = {name, foodName, pictureURL, quantity, description, expirationDate, postDate, distanceAway};
			resturantPins.push(
				<MapView.Marker
					key={i++}
					coordinate={{
						"latitude": item.location[0],
						"longitude": item.location[1],
					}}
					title={item.name}>
					<MapView.Callout>
						<Text>{item.name}</Text>
					</MapView.Callout>
				</MapView.Marker>
			)
		})
		if (this._isMounted) {
			this.setState({
				resturantPins: resturantPins
			})
		}
		try {
			await navigator.geolocation.getCurrentPosition(
				async position => {
					const obj = JSON.stringify(position);
					const location = JSON.parse(obj)
					const currLoc = [location[`coords`][`latitude`], location[`coords`][`longitude`]];
					let region = {
						latitude: location[`coords`][`latitude`],
						longitude: location[`coords`][`longitude`],
						latitudeDelta: 0.01,
						longitudeDelta: 0.01
					}
					this.mapView.animateToRegion(region, 1000);
					if (this._isMounted) {
						this.setState({
							initialRegion: region
						})
					}
				},
				error => Alert.alert(error.message),
				{ timeout: 20000, maximumAge: 1000 }
			);
		} catch (err) {
			console.log(err)
		}
	}

	componentWillUnmount() {
		this._isMounted = false;
	}

	onMapReady = () => this.setState({ marginBottom: 0 })

	render() {
		return (
			<SafeAreaView style={styles.container}>
				<MapView
					provider={PROVIDER_GOOGLE}
					onMapReady={this.onMapReady}
					style={[styles.map, {marginBottom: this.state.marginBottom, height:'70%' }]}
					initialRegion={{
						latitude: 40.7549,
						longitude: -73.9840,
						latitudeDelta: .08,
						longitudeDelta: .08,
					}}
					showsUserLocation={true}
					showsMyLocationButton={true}
					showsCompass={false}
					loadingEnabled={true}
					ref={ref => { this.mapView = ref }}>
					{this.state.resturantPins}
				</MapView>
				<Feed/>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		justifyContent: 'flex-end',
		alignItems: 'center',
		flex:1,
	},
	map: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	}
});

const mapStateToProps = state => {
	let feedList = Object.entries(state.FeedReducer);
	return {
		feedList
	}
}

export default connect(mapStateToProps, {fetch_feed})(map);