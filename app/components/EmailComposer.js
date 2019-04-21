import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Share,
  Image
} from "react-native";
import { FileSystem, AdMobBanner, MailComposer, AdMobRewarded } from "expo";

export default class ShareScreen extends React.Component {
  componentDidMount() {
    FileSystem.makeDirectoryAsync(
      FileSystem.cacheDirectory + `myattachments`
    ).catch(e => {
      console.log(e, "Directory exists");
    });
  }
  
  bannerError() {
    console.log("An error");
    return;
  }
  
  openEmail = () => {
	MailComposer.composeAsync({
		recipients: ['jcolequotesandlyricsgame@gmail.com'],
		subject: 'J Cole Lyrics and Game App',
		body: 'Hello there, ',
	});
};

  render() {
    return (
      <View style = {styles.container}>
      
      <View>
      <AdMobBanner
						style={styles.bottomBanner}
						bannerSize="fullBanner"
						adUnitID="ca-app-pub-1217536501250691/6872861818"
						// Test ID, Replace with your-admob-unit-id
						testDeviceID="EMULATOR"
						didFailToReceiveAdWithError={this.bannerError}
					/>
      
	  <Image
					source={require('../../assets/images/contactus.png')}
					style={{
						width: 380,
						height: 200,
						justifyContent: 'center',
						alignItems: 'center',
						paddingLeft: 5,
						paddingRight: 5,
					}}
				/> 
  				<TouchableOpacity
					style={{
						backgroundColor: '#1DA1F2',
						padding: 10,
						margin: 10,
						block: true,
					}}
					onPress={this.openEmail}
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
						Send Us a Mail
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
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center"
  },
  bottomBanner: {
    position: "absolute",
    bottom: 0
  },
});
