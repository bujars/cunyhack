import React from 'react'
import { StyleSheet, SafeAreaView, View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import axios from 'axios';
import { resume } from 'expo/build/AR';
import Feed from '../pages/Feed';

export default class map extends React.Component {
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
			{ name: 'Dennys store', location: [40.7678398, -73.9645291] },
			{ name: 'jackies store', location: [40.7151678, -74.0116044] },
			{ name: 'kevins store', location: [40.7557665, -73.99116459999999] },
			{ name: 'engers store', location: [40.7478091, -73.9873339] }
		]
		console.log(resturantArr[0].location[0])
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
					style={[styles.map, {marginBottom: this.state.marginBottom }]}
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
		alignItems: 'center'
	},
	map: {
		position: 'absolute',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0
	}
});