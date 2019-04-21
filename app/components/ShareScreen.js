import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Share,
  Image
} from "react-native";
import { FileSystem, AdMobBanner, AdMobInterstitial, AdMobRewarded } from "expo";

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
  
  openShare = () => {
    Share.share(
      {
        message:
          "Hey, Check Out this J Cole Quotes and Lyrics Quiz, you will love it, you can download it on AppStore and Google Play Store. ",
        url: "...",
        title: ""
      },
      {
        // Android only:
        dialogTitle: "J Cole Quotes and Lyrics App",
        // iOS only:
        excludedActivityTypes: ["com.apple.UIKit.activity.PostToTwitter"]
      }
    );
  };

  render() {
    return (
      <View style = {styles.container}>
      <AdMobBanner
						style={styles.bottomBanner}
						bannerSize="fullBanner"
						adUnitID="ca-app-pub-1217536501250691/6872861818"
						// Test ID, Replace with your-admob-unit-id
						testDeviceID="EMULATOR"
						didFailToReceiveAdWithError={this.bannerError}
					/>
      <View>
        <Image
          source={require("../../assets/images/share.png")}
          style={{
            width: 380,
            height: 200,
            justifyContent: "center",
            alignItems: "center"
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "red",
            padding: 10,
            margin: 10,
            marginLeft: 20,
            marginBottom: 20,
            marginTop: 20
          }}
          onPress={this.openShare}
        >
          <Text
            style={{
              padding: 10,
              margin: 10,
              marginLeft: 20,
              marginBottom: 20,
              marginTop: 20,
              fontWeight: "bold",
              color: "white",
              alignSelf: "center"
            }}
          >
            Tell a J Cole Fan
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
