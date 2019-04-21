import React, { Component } from "react";
import { View, Alert, Text, StyleSheet, Image } from "react-native";
import SettingsList from "react-native-settings-list";
import { createStackNavigator, createAppContainer } from "react-navigation";

class Settings extends Component {
  render() {
    return <AppContainer />;
  }
}
export default Settings;

class SettingsScreen extends React.Component {
  constructor() {
    super();
    this.onValueChange = this.onValueChange.bind(this);
    this.state = { switchValue: false };
  }
  render() {
    var bgColor = "#DCE3F4";
    return (
      <View style={{ backgroundColor: "#EFEFF4", flex: 1 }}>
        <View
          style={{
            borderBottomWidth: 1,
            backgroundColor: "#f7f7f8",
            borderColor: "#c8c7cc"
          }}
        >
          {/* <Text style={{alignSelf:'center',marginTop:30,marginBottom:10,fontWeight:'bold',fontSize:16}}>Settings</Text> */}
        </View>
        <View style={{ backgroundColor: "#EFEFF4", flex: 1 }}>
          <SettingsList borderColor="#c8c7cc" defaultItemSize={50}>
            <SettingsList.Header headerStyle={{ marginTop: 15 }} />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.imageStyle}
                  source={require("../assets/sound.png")}
                />
              }
              hasSwitch={true}
              switchState={this.state.switchValue}
              switchOnValueChange={this.onValueChange}
              hasNavArrow={false}
              title="Sounds"
            />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.imageStyle}
                  source={require("../assets/notification.png")}
                />
              }
              title="Notifications"
              titleInfo="On"
              titleInfoStyle={styles.titleInfoStyle}
              onPress={() => Alert.alert("Notification Page")}
            />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.imageStyle}
                  source={require("../assets/privacy.png")}
                />
              }
              title="Privacy"
              onPress={() => this.props.navigation.navigate("Privacy")}
            />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.imageStyle}
                  source={require("../assets/ads.png")}
                />
              }
              title="Remove Ads"
              onPress={() => Alert.alert("Remove Ads Page")}
            />
            <SettingsList.Item
              icon={
                <Image
                  style={styles.imageStyle}
                  source={require("../assets/contact.png")}
                />
              }
              title="Contact the Author"
              onPress={() => Alert.alert("Contact Page")}
            />
          </SettingsList>
        </View>
        <View>
          <Text style={styles.footer}> Version 1.0.0</Text>
        </View>
      </View>
    );
  }
  onValueChange(value) {
    this.setState({ switchValue: value });
  }
}

const AppStackNavigator = createStackNavigator({
  Settings: SettingsScreen,
  Privacy: PrivacyScreen
});

const AppContainer = createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  imageStyle: {
    marginLeft: 15,
    marginRight: 20,
    alignSelf: "center",
    width: 20,
    height: 24,
    justifyContent: "center"
  },
  footer: {
    flex: 1,
    textAlign: "right",
    marginRight: 20,
    color: "gray",
    borderTopColor: "lightgray"
  }
});
