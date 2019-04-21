import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Linking, Image,Platform } from 'react-native';
import {  AdMobBanner, } from "expo";

export default class ShareScreen extends React.Component {
	
	_handlePress = () => {
    Platform.OS === 'ios' ?
		Linking.openURL('https://itunes.apple.com/ng/app/id1459086040?mt=8') : Linking.openURL('https://play.google.com/store/apps/details?id=com.jcole.jcolequotesandlyricsgame') 
		this.props.onPress && this.props.onPress();
	};

	render() {
		return (
			<View style={styles.container}>
				<View>
					<Image
						source={require('../../assets/images/cole.png')}
						style={{
							width: 100,
							height: 100,
							borderRadius: 40,
							alignContent: 'center',
							alignItems: 'center',
							alignSelf: 'center',
						}}
					/>
					<View>
						<Text
							style={{
								fontWeight: 'bold',
								fontSize: 20,
								alignContent: 'center',
								alignItems: 'center',
								alignSelf: 'center',
							}}
						>
							Remove Ads With $1 One-Time Payment
						</Text>
					</View>
					<View>
						<Text
							style={{ fontWeight: 'normal', fontSize: 15, padding: 25 }}
						>{`Fully featured and absolutely free, this app is supported by ads. You can remove ads for $1 one-time payment. Download the Pro Version on Google Play Store or App Store. The Pro Version comes with additional functionalities which includes:
            
            Additional Life in Multiple Choice Game
            Additional Time in Time Game
            `}</Text>
					</View>
					<TouchableOpacity
						style={{
							backgroundColor: 'red',
							padding: 10,
							margin: 10,
							marginLeft: 20,
							marginBottom: 20,
							marginTop: 20,
						}}
						onPress={this._handlePress}
					>
						<Text
							style={{
								padding: 10,
								margin: 10,
								marginLeft: 20,
								marginBottom: 20,
								marginTop: 20,
								fontWeight: 'bold',
								color: 'white',
								alignSelf: 'center',
							}}
						>
							Upgrade to Pro Version
						</Text>
					</TouchableOpacity>
				</View>
				<AdMobBanner
          style={styles.bottomBanner}
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-1217536501250691/3616143081"
          // Test ID, Replace with your-admob-unit-id
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={this.bannerError}
        />
								<AdMobBanner
          style={styles.bottomBanner}
          bannerSize="fullBanner"
          adUnitID="ca-app-pub-1217536501250691/3616143081"
          // Test ID, Replace with your-admob-unit-id
          testDeviceID="EMULATOR"
          didFailToReceiveAdWithError={this.bannerError}
        />

			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		alignSelf: 'center',
		alignContent: 'center',
	},
});
