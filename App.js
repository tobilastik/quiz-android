import React from "react";
import { Image } from "react-native";
import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import Icon from "@expo/vector-icons/Ionicons";
import QuoteScreen from "./app/components/QuoteScreen";
import BioScreen from "./app/components/BioScreen";
import EmailComposer from "./app/components/EmailComposer";
import ShareScreen from "./app/components/ShareScreen";
import QuizScreen from "./app/components/QuizScreen";
import MultipleChoice from "./app/components/MultipleChoice";
import TimeGame from "./app/components/TimeGame";
import { Ionicons } from "@expo/vector-icons";
import store from "./app/redux/store";
import { Provider } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
export default App;

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Quotes: {
      screen: QuoteScreen,

      navigationOptions: {
        tabBarLabel: "QUOTES",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-quote" color={tintColor} size={24} />
        )
      }
    },
    "Lyrics Game": {
      screen: QuizScreen,

      navigationOptions: {
        tabBarLabel: "LYRICS GAME",
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require("./assets/images/lyrics.png")}
            style={{ height: 24, width: 26, tintColor: tintColor }}
          />
        )
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    },
    tabBarOptions: {
      activeTintColor: "red",
      inactiveTintColor: "#1DA1F2",
      style: {
        backgroundColor: "white",
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 5
      }
    }
  }
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator,
    MultipleChoice:  {
      screen: MultipleChoice,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Multiple Choice",
        headerLeft: (
          <Icon
            onPress={() => navigation.goBack()}
            name="md-arrow-round-back"
            style={{ padding: 10, fontSize: 30 }}
          />
        )
      })
    },
    TimeGame: {
      screen: TimeGame,
      navigationOptions: ({ navigation }) => ({
        headerTitle: "Time Game",
        headerLeft: (
          <Icon
            onPress={() => navigation.goBack()}
            name="md-arrow-round-back"
            style={{ padding: 10, fontSize: 30 }}
          />
        )
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
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
    }
  }
);


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
    
    "Main Menu": {
      screen: DashboardStackNavigator,
      navigationOptions: {
        drawerLabel: "Main Menu",
        drawerIcon: ({ tintColor, focused }) => (
          <Ionicons
            name={focused ? "md-menu" : "md-menu"}
            size={26}
            style={{ color: tintColor }}
          />
        )
      }
    },
    "J Cole Bio": {
      screen: Biography,
      navigationOptions: {
        drawerLabel: "J Cole Bio",
        drawerIcon: ({ tintColor, focused }) => (
          <Image
            source={require("./assets/images/about.png")}
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
            source={require("./assets/images/contact.png")}
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
          source={require("./assets/images/fan.png")}
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
  // },{
  //   contentComponent: SideMenu,
  //   drawerWidth: 300
})  
);

const AppSwitchNavigator = createSwitchNavigator({
  Dashboard: { screen: AppDrawerNavigator },
  
});

const AppContainer = createAppContainer(AppSwitchNavigator);
