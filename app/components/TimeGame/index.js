import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, TouchableOpacity, Linking, Platform } from 'react-native';
import Question from './Question';
import { questions } from './gamelist';
import { connect } from 'react-redux';
import { timeUpdateScore } from '../../redux/actions';
import { AdMobBanner, AdMobInterstitial, AdMobRewarded } from 'expo';

class Questions extends React.Component {
	_handlePress = () => {
		Platform.OS === 'ios'
			? Linking.openURL('https://itunes.apple.com/ng/app/id1459086040?mt=8')
			: Linking.openURL('https://play.google.com/store/apps/details?id=com.jcole.jcolequotesandlyricsgame');
		this.props.onPress && this.props.onPress();
	};

	_isMounted = true;
	constructor(props) {
		super(props);

		this.state = {
			loading: false,
			questions: [],

			current: 0,
			correctScore: 1,
			totalScore: 50,
			timeLeft: 60,
			highScore: 0,
			results: {
				score: 0,
				correctAnswers: 0,
			},
			completed: false,
		};
	}

	tryAgain = () => {
		this.setState({
			questions: [],
			timeLeft: 60,
			completed: false,
		});
	};

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
			//console.log("high score start");

			this.props.timeUpdateScore(results.score);
		}

		this.setState({
			current: index + 1,
			results,
			completed: index === 49 ? true : false,
		});
	};

	wrongAnswer = () => {
		this.setState({
			timeLeft: this.state.timeLeft - 5,
		});
	};

	componentDidMount() {
		this._isMounted = true;
		this.fetchQuestions();
		this.setState({
			highScore: this.props.ScoreTime,
		});

		this.timer = setInterval(() => {
			if (this.state.timeLeft <= 0) {
				clearInterval(this.timer);
				this.setState({ completed: true, timeLeft: 0 });
			}
			this.setState({ timeLeft: this.state.timeLeft - 1 });
		}, 1000);
	}

	componentWillUnmount() {
		this._isMounted = false;
		clearInterval(this.timer);
	}

	tryAgain = () => {
		this.setState({
			loading: false,
			questions: [],

			current: 0,
			correctScore: 1,
			totalScore: 50,
			timeLeft: 60,
			highScore: 0,
			results: {
				score: 0,
				correctAnswers: 0,
			},
			completed: false,
		});
		this.fetchQuestions();
		this.setState({
			highScore: this.props.ScoreTime,
		});
		let timer = setInterval(() => {
			if (this.state.timeLeft <= 0) {
				clearInterval(timer);
				this.setState({ completed: true });
			}
			if (this.mounted == false) {
				return false;
			}
			this.setState({ timeLeft: this.state.timeLeft - 1 });
		}, 1000);
	};

	render() {
		// console.log("===========highScore=========================");
		// console.log(this.state.highScore);
		// console.log("====================================");
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
				{!!this.state.questions.length > 0 && this.state.completed === false && this.state.timeLeft > 0 && (
					<Question
						onSelect={answer => {
							this.submitAnswer(this.state.current, answer);
						}}
						timeLeft={this.state.timeLeft}
						question={this.state.questions[this.state.current]}
						correctPosition={Math.floor(Math.random() * 3)}
						current={this.state.current}
						wrongAnswer={this.wrongAnswer}
					/>
				)}

				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					{this.state.completed === true && (
						<View style={{ alignItems: 'center' }}>
							<Text>{``}</Text>
							{/* <Text style={{fontSize: 30, color: 'red',fontWeight: 'bold', }}>Quiz Completed!</Text> */}
							<Text>{``}</Text>

							
							<Text>{``}</Text>

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
				<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
					{this.state.timeLeft == 0 && (
						<View style={{ alignItems: 'center' }}>
							{/* <Text>Correct Answers: {this.state.results.correctAnswers}</Text> */}
							{/* <Text>
                Incorrect Answers:{" "}
                {50 - parseInt(this.state.results.correctAnswers)}
              </Text>
              <Text>Total Score: {50}</Text> */}
							<Text>{``}</Text>
							{/* <Text style={{fontSize: 30, color: 'red',fontWeight: 'bold', }}>Time up</Text> */}
							<Text>{``}</Text>
							<Text style={{ fontSize: 25, fontWeight: 'bold' }}>Result: {this.state.results.score}</Text>
							<Text>{``}</Text>
							<Text style={{ fontSize: 25, fontWeight: 'bold' }}>Best: {this.state.highScore}</Text>
							<Text>{``}</Text>
							
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
	// console.log("=========state===========================");
	// console.log(state);
	// console.log("====================================");
	return {
		ScoreTime: state.highScoreTime,
		loader: state.loader,
		statusTime: state.statusTime,
	};
};

export default connect(
	mapStateToProps,
	{ timeUpdateScore }
)(Questions);
