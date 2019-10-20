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
		let resturantArr = this.props.feedList;
		// let resturantArr = [
		// 	{ name: 'Little Basil', location: [40.741180, -73.982200] },
		// 	{ name: 'Bao Bao Cafe', location: [40.740830, -73.983470] },
		// 	{ name: 'Noda', location: [40.744750, -73.988130] },
		// 	{ name: 'Sabai', location: [40.744310, -73.983700] }
		// ]
		console.log('feedList: ', feedList)
		let resturantPins = [];
		resturantArr.map((item,i) => {
			console.log(item)
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
		backgroundColor: 'transparent'
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
		feedList: feedList
	}
}

export default connect(mapStateToProps, {fetch_feed})(map);