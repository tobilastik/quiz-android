import React, {Component} from 'react';
import {createStackNavigator, createDrawerNavigator, createSwitchNavigator} from 'react-navigation';
import {ScrollView, Text, View, StyleSheet,} from 'react-native';
import BioScreen from "../../app/components/BioScreen";
import RemoveAds from "../../app/components/RemoveAds";
import EmailComposer from "../../app/components/EmailComposer";
import ShareScreen from "../../app/components/ShareScreen";



const RemoveAd = createStackNavigator({
  "Remove Ads": {
    screen: RemoveAds,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Remove Ads",
      headerLeft: (
        <Icon
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          style={{ padding: 10, fontSize: 30 }}
        />
      )
    })
  }
});
const Biography = createStackNavigator({
  Biography: {
    screen: BioScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Biography",
      headerLeft: (
        <Icon
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          style={{ padding: 10, fontSize: 30 }}
        />
      )
    })
  }
});
const Contact = createStackNavigator({
  ContacttheAuthor: {
    screen: EmailComposer,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Contact",
      headerLeft: (
        <Icon
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          style={{ padding: 10, fontSize: 30 }}
        />
      )
    })
  }
});
const Share = createStackNavigator({
  TellaJColeFan: {
    screen: ShareScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: "Share",
      headerLeft: (
        <Icon
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          style={{ padding: 10, fontSize: 30 }}
        />
      )
    })
  }
});

const AppDrawerNavigator = createDrawerNavigator(
  {
    
    "J Cole Bio": {
      screen: Biography,
      navigationOptions: {
        drawerLabel: "J Cole Bio",
        drawerIcon: ({ tintColor, focused }) => (
          <Image
            source={require("../../assets/images/about.png")}
            style={{ height: 24, width: 26, tintColor: tintColor }}
          />
         
        )
      }
    },
    "Remove Ads": {
      screen: RemoveAd,
      navigationOptions: {
        drawerLabel: "Remove Ads",
        drawerIcon: ({ tintColor, focused }) => (
          <Image
            source={require("../../assets/images/ads.png")}
            style={{ height: 24, width: 26, tintColor: tintColor }}
          />
        )
      }
    },
    "Contact the Author": {
      screen: Contact,
      navigationOptions: {
        drawerLabel: "Contact the Author",
        drawerIcon: ({ tintColor, focused }) => (
          <Image
            source={require("../../assets/images/contact.png")}
            style={{ height: 24, width: 26, tintColor: tintColor }}
          />
        )
      }
    },
    "Tell a J Cole Fan": {
      screen: Share,
      navigationOptions: {
        drawerLabel: "Tell a J Cole Fan",
        drawerIcon: ({ tintColor, focused }) => (
          
          <Image
          source={require("../../assets/images/fan.png")}
          style={{ height: 24, width: 26, tintColor: tintColor }}
        />
        )
      }
    },
    
    
  },
  
  (defaultNavigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <Icon
          style={{ padding: 10 }}
          onPress={() => navigation.openDrawer()}
          name="md-menu"
          size={30}
        />
      )
    };
  })  
);
class SideMenu extends Component {
  render () {
    return (
      <View style={styles.container}>
        <ScrollView>
          
        </ScrollView>
        <View style={styles.footerContainer}>
          <Text>This is my fixed footer</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
})
const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: { screen: AppDrawerNavigator },
  
});


export default SideMenu;