import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, Linking, Platform } from 'react-native';
import Question from './Question';
import { questions } from './gamelist';
import { LifeUpdateScore } from '../../redux/actions';
import { connect } from 'react-redux';
import { AdMobBanner, AdMobInterstitial, AdMobRewarded } from 'expo';

class Questions extends React.Component {
	// _handlePress = () => {
	// 	Platform.OS === 'ios'
	// 		? Linking.openURL('https://itunes.apple.com/ng/app/id1459086040?mt=8')
	// 		: Linking.openURL('https://play.google.com/store/apps/details?id=com.jcole.jcolequotesandlyricsgame');
	// 	this.props.onPress && this.props.onPress();
	// };
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			questions: [],

			current: 0,
			correctScore: 1,
			totalScore: 50,
			highScore: 0,
			life: 3,
			results: {
				score: 0,
				correctAnswers: 0,
			},
			completed: false,
			height: 0,
		};
	}

	fetchQuestions = () => {
		const results = questions;

		results.forEach(item => {
			item.id = Math.floor(Math.random() * 10000);
		});

		results.sort((a, b) => (a.id > b.id ? 1 : b.id > a.id ? -1 : 0));

		this.setState({ questions: results });
	};

	submitAnswer = (index, answer) => {
		const question = this.state.questions[index];
		const isCorrect = question.answer === answer;
		const results = { ...this.state.results };

		results.score = isCorrect ? results.score + 1 : results.score;
		results.correctAnswers = isCorrect ? results.correctAnswers + 1 : results.correctAnswers;

		if (results.score > this.state.highScore) {
			console.log('high score start');

			this.props.LifeUpdateScore(results.score);
		}

		this.setState({
			current: index + 1,
			results,
			completed: index === 49 ? true : false,
		});
	};

	wrongAnswer = () => {
		this.setState({
			life: this.state.life - 1,
		});
	};

	componentDidMount() {
		this.fetchQuestions();
		this.setState({
			highScore: this.props.ScoreLife,
		});
	}

	tryAgain = () => {
		this.setState({
			questions: [],

			current: 0,
			correctScore: 1,
			totalScore: 50,
			highScore: 0,
			life: 3,
			results: {
				score: 0,
				correctAnswers: 0,
			},
			completed: false,
		});
		this.fetchQuestions();
		this.setState({
			highScore: this.props.ScoreLife,
		});
	};

	bannerError() {
		console.log('An error');
		return;
	}

	render() {
		// console.log('===========highScore=========================');
		// console.log(this.state.highScore);
		// console.log('====================================');
		return (
			<ScrollView>
				<View style={styles.container}>
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
				</View>

				{!!this.state.questions.length > 0 && this.state.completed === false && this.state.life != 0 && (
					<Question
						onSelect={answer => {
							this.submitAnswer(this.state.current, answer);
						}}
						life={this.state.life}
						question={this.state.questions[this.state.current]}
						correctPosition={Math.floor(Math.random() * 3)}
						current={this.state.current}
						wrongAnswer={this.wrongAnswer}
					/>
				)}
				{/* <TouchableOpacity style={styles.button} onPress = {this._handlePress()}>
								<Text style={{ color: 'white', textAlign: 'center' }}>
									Want more Lives?{'\n'}Upgrade to Pro Version
								</Text>
							</TouchableOpacity>
 */}
				<SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					{this.state.completed === true && (
						<View style={{ alignItems: 'center' }}>
							<Image
								source={require('../../../assets/images/completed.jpg')}
								style={{
									width: 380,
									height: 200,
									paddingTop: 20,
									justifyContent: 'center',
									alignItems: 'center',
								}}
							/>
							<Text style={{ fontSize: 24, fontWeight: 'bold' }}>Quiz Completed!</Text>
							<Text style={{ fontSize: 24 }}>Number One J Cole Fan!!!</Text>
							<Text>{``}</Text>
							<Text style={{ fontSize: 18 }}>Result: {this.state.results.score}</Text>
							<Text>{``}</Text>
							<Text style={{ fontSize: 18 }}>Best: {this.state.highScore}</Text>

							<TouchableOpacity style={styles.button} onPress={this.tryAgain}>
								<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>Try Again</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={styles.button}
								onPress={() => this.props.navigation.push('Lyrics Game')}
							>
								<Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>Main Menu</Text>
							</TouchableOpacity>
						</View>
					)}
				</SafeAreaView>

				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					{this.state.life == 0 && (
						<View style={{ alignItems: 'center' }}>
							<Text>{``}</Text>
							<Text style={{ fontSize: 30, color: 'red', fontWeight: 'bold' }}>No Life Left</Text>
							<Text>{``}</Text>
							<Text style={{ fontSize: 25, fontWeight: 'bold' }}>Result: {this.state.results.score}</Text>
							<Text>{``}</Text>
							<Text style={{ fontSize: 25, fontWeight: 'bold' }}>Best: {this.state.highScore}</Text>

							
							<TouchableOpacity style={styles.button} onPress={this.tryAgain}>
								<Text style={{ color: 'white', fontWeight: 'bold' }}>Try Again</Text>
							</TouchableOpacity>

							<TouchableOpacity
								style={styles.button}
								onPress={() => this.props.navigation.navigate('Lyrics Game')}
							>
								 <Text style={{ color: 'white', fontWeight: 'bold' }}>Main Menu</Text>
							</TouchableOpacity>
						</View>
					)}
				</View>
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
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		height: '20%',
		position: 'relative',
	},
	bottomBanner: {
		position: 'relative',
		bottom: 0,
	},
	loadingQuestions: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		backgroundColor: '#5cb85c',
		color: 'white',
		margin: 10,
		borderRadius: 8,
		alignItems: 'center',
		paddingLeft: 70,
		paddingRight: 70,
		paddingTop: 20,
		paddingBottom: 20,
		width: '100%',
	},
});

const mapStateToProps = state => {
	return {
		ScoreLife: state.highScoreLife,
		loader: state.loader,
		statusLife: state.statusLife,
	};
};
export default connect(
	mapStateToProps,
	{ LifeUpdateScore }
)(Questions);
