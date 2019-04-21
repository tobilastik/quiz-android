import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { highScoreLife, highScoreTime } from '../redux/actions';
import { AdMobBanner, AdMobInterstitial, AdMobRewarded } from 'expo';

class QuizScreen extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ScoreLife: 0,
			ScoreTime: 0,
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.statusLife == 'done') {
			this.setState({
				ScoreLife: nextProps.ScoreLife,
			});
		}
		if (nextProps.statusTime == 'done') {
			this.setState({
				ScoreTime: nextProps.ScoreTime,
			});
		}
	}
	componentDidMount() {
		console.log('did mount');
		this.props.highScoreLife();
		this.props.highScoreTime();
	}
  bannerError() {
    console.log("An error");
    return;
  }
  
	render() {
		const { ScoreLife, ScoreTime } = this.state;

		return (
			<View
				style={{
					flex: 1,
					
					alignItems: 'center',
				}}
			>
				<View>
					<AdMobBanner
						style={styles.bottomBanner}
						bannerSize="fullBanner"
						adUnitID="ca-app-pub-1217536501250691/3616143081"
						// Test ID, Replace with your-admob-unit-id
						testDeviceID="EMULATOR"
						didFailToReceiveAdWithError={this.bannerError}
					/>
				</View>
				<View syle={{ flex: 3 }} />

				<TouchableOpacity
					block={true}
					style={styles.button}
					onPress={() => this.props.navigation.navigate('MultipleChoice')}
				>
					<Text style={{ color: 'white' }}>Multiple Choice</Text>
				</TouchableOpacity>
				<View>
					<Text>High Score: {ScoreLife}</Text>
				</View>
				<TouchableOpacity
					block={true}
					style={[styles.button, { marginTop: 25 }]}
					onPress={() => this.props.navigation.navigate('TimeGame')}
				>
					<Text style={{ color: 'white' }}>Time Game</Text>
				</TouchableOpacity>
				<View>
					<Text>High Score: {ScoreTime}</Text>
				</View>
        <View syle={{ flex: 3 }} />

				<View style = {{top: 150}}>
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
						adUnitID="ca-app-pub-1217536501250691/6872861818"
						// Test ID, Replace with your-admob-unit-id
						testDeviceID="EMULATOR"
						didFailToReceiveAdWithError={this.bannerError}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#1DA1F2',
		color: 'white',
		margin: 10,
		borderRadius: 8,
		alignItems: 'center',
		padding: 10,
		width: '80%',
	},
	container: {
		display: 'flex',
		height: '20%',
		position: 'relative',
	},
});

const mapStateToProps = state => {
	return {
		ScoreLife: state.highScoreLife,
		ScoreTime: state.highScoreTime,
		loader: state.loader,
		statusTime: state.statusTime,
		statusLife: state.statusLife,
	};
};

export default connect(
	mapStateToProps,
	{ highScoreLife, highScoreTime }
)(QuizScreen);
