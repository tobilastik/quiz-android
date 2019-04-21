import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import { AdMobBanner, AdMobInterstitial, AdMobRewarded } from "expo";


const { width, height } = Dimensions.get('window');
export default class Question extends React.Component {
	constructor() {
		super();

		this.state = {
			answer: null,
			ans: false,
			current: 0,
			bgOpt0: '#1DA1F2',
			bgOpt1: '#1DA1F2',
			bgOpt2: '#1DA1F2',
			bgOpt3: '#1DA1F2',
		};
	}

	choseAns(selectedAns) {
		if (selectedAns == this.props.question.answer) {
			switch (selectedAns) {
				case this.props.question.options[0]:
					this.setState({
						bgOpt0: 'green',
					});

					break;

				case this.props.question.options[1]:
					this.setState({
						bgOpt1: 'green',
					});

					break;
				case this.props.question.options[2]:
					this.setState({
						bgOpt2: 'green',
					});

					break;
				case this.props.question.options[3]:
					this.setState({
						bgOpt3: 'green',
					});

					break;

				default:
					break;
			}
			setTimeout(() => {
				this.props.onSelect(selectedAns);
			}, 300);
		} else {
			switch (selectedAns) {
				case this.props.question.options[0]:
					this.props.wrongAnswer();
					this.setState({
						bgOpt0: 'red',
					});

					break;

				case this.props.question.options[1]:
					this.props.wrongAnswer();
					this.setState({
						bgOpt1: 'red',
					});

					break;
				case this.props.question.options[2]:
					this.props.wrongAnswer();
					this.setState({
						bgOpt2: 'red',
					});

					break;
				case this.props.question.options[3]:
					this.props.wrongAnswer();
					this.setState({
						bgOpt3: 'red',
					});

					break;

				default:
					break;
			}
		}
	}

	componentDidMount() {
		this.setState({
			current: this.props.current,
		});
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.current != nextProps.current) {
			this.setState({
				bgOpt0: '#1DA1F2',
				bgOpt1: '#1DA1F2',
				bgOpt2: '#1DA1F2',
				bgOpt3: '#1DA1F2',
				current: nextProps.current,
			});
		}
	}
  bannerError() {
    console.log("An error");
    return;
  }

	render() {
		let getLife = [];
		for (let index = 0; index < this.props.life; index++) {
			getLife.push(<Icon key={index} name="heart" style={{ color: 'red', marginLeft: 5 }} type="AntDesign" />);
    }
    
		return (
			<View>
      <View style={{ flex: 1, padding: 12 }}>
				<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
					<View style={{ flexDirection: 'row' }}>{getLife}</View>
					<Text style={{ fontSize: 20, fontWeight: 'bold', color: '#666', textAlign: 'right' }}>
						Question: #{this.props.current + 1}
					</Text>
				</View>

				<View
					style={{
						borderBottomColor: '#1D3E5E',
						borderBottomWidth: 1,
						width: width,
					}}
				/>
				<View>
					<Text />
				</View>
				<Text style={{ fontSize: 25, fontWeight: 'bold', color: 'black' }}>
					{this.props.question.question}
				</Text>

				<View style={{ width: '100%', marginTop: 20 }}>
					<View
						style={{
							flexDirection: 'column',
						}}
					>
						{this.state.bgOpt0 == 'red' || this.state.bgOpt0 == 'green' ? (
							<TouchableOpacity
								block={true}
								style={[styles.button, { backgroundColor: this.state.bgOpt0 }]}
							>
								<Text style={{ color: '#fff' }}>{this.props.question.options[0]}</Text>
							</TouchableOpacity>
						) : (
							<TouchableOpacity
								block={true}
								style={[styles.button, { backgroundColor: this.state.bgOpt0 }]}
								onPress={() => this.choseAns(this.props.question.options[0])}
							>
								<Text style={{ color: '#fff' }}>{this.props.question.options[0]}</Text>
							</TouchableOpacity>
						)}
					</View>
					<View
						style={{
							flexDirection: 'column',
						}}
					>
						{this.state.bgOpt1 == 'red' || this.state.bgOpt1 == 'green' ? (
							<TouchableOpacity
								block={true}
								style={[styles.button, { backgroundColor: this.state.bgOpt1 }]}
							>
								<Text style={{ color: '#fff' }}>{this.props.question.options[1]}</Text>
							</TouchableOpacity>
						) : (
							<TouchableOpacity
								block={true}
								style={[styles.button, { backgroundColor: this.state.bgOpt1 }]}
								onPress={() => this.choseAns(this.props.question.options[1])}
							>
								<Text style={{ color: '#fff' }}>{this.props.question.options[1]}</Text>
							</TouchableOpacity>
						)}
					</View>
					<View
						style={{
							flexDirection: 'column',
						}}
					>
						{this.state.bgOpt2 == 'red' || this.state.bgOpt2 == 'green' ? (
							<TouchableOpacity
								block={true}
								style={[styles.button, { backgroundColor: this.state.bgOpt2 }]}
							>
								<Text style={{ color: '#fff' }}>{this.props.question.options[2]}</Text>
							</TouchableOpacity>
						) : (
							<TouchableOpacity
								block={true}
								style={[styles.button, { backgroundColor: this.state.bgOpt2 }]}
								onPress={() => this.choseAns(this.props.question.options[2])}
							>
								<Text style={{ color: '#fff' }}>{this.props.question.options[2]}</Text>
							</TouchableOpacity>
						)}
					</View>
					<View
						style={{
							flexDirection: 'column',
						}}
					>
						{this.state.bgOpt3 == 'red' || this.state.bgOpt3 == 'green' ? (
							<TouchableOpacity
								block={true}
								style={[styles.button, { backgroundColor: this.state.bgOpt3 }]}
							>
								<Text style={{ color: '#fff' }}>{this.props.question.options[3]}</Text>
							</TouchableOpacity>
						) : (
							<TouchableOpacity
								block={true}
								style={[styles.button, { backgroundColor: this.state.bgOpt3 }]}
								onPress={() => this.choseAns(this.props.question.options[3])}
							>
								<Text style={{ color: '#fff' }}>{this.props.question.options[3]}</Text>
							</TouchableOpacity>
						)}
					</View>
				</View>
        
       
		
        
      </View>
	  </View>

		);
	}
}

const styles = StyleSheet.create({
	radioText: {
		fontSize: 20,
		marginTop: -5,
	},
	button: {
		// backgroundColor: "#1DA1F2",
		width: '60%',
		color: 'white',
		marginTop: 10,
		marginLeft: 10,
		borderRadius: 5,
		alignItems: 'center',
		padding: 10,
  },
  bottomBanner: {
	position: "absolute",
	marginTop: 190,
	bottom: 0,
	justifyContent: 'flex-end',
	flex:1,
	
  },
  ads: {
position: 'absolute',
justifyContent: 'flex-end',
marginBottom: 0,
// top: 100 + '%'
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }
});
