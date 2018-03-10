import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';

import { GuideMe, Today, AssistMe, Chat, UserChat } from '../screens';

const appTabs = TabNavigator(
  {
    GuideMe: {
      screen: GuideMe,
      navigationOptions: () => ({
        tabBarLabel: 'Guide Me',
        headerTitle: 'Guide Me',
        headerTintColor: 'white',
        tabBarIcon: ({ tintColor }) => <Icon name="home" size={20} color={tintColor} />
      })
    },
    Today: {
      screen: Today,
      navigationOptions: () => ({
        tabBarLabel: 'Today',
        headerTitle: 'Today',
        tabBarIcon: ({ tintColor }) => <Icon name="mail" size={20} color={tintColor} />
      })
    },
    AssistMe: {
      screen: AssistMe,
      navigationOptions: () => ({
        tabBarLabel: 'Assist Me',
        headerTitle: 'Assist Me',
        tabBarIcon: ({ tintColor }) => <Icon name="mail" size={20} color={tintColor} />
      })
    }
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1997a8'
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerBackTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white'
    },
    tabBarPosition: 'bottom',
    tabBarOptions: {
      activeTintColor: '#1997a8',
      swipeEnabled: false,
      inactiveTintColor: 'gray',
      showLabel: false,
      showIcon: true,
      indicatorStyle: {
        backgroundColor: 'transparent'
      },
      labelStyle: {
        fontSize: 11
      },
      style: {
        backgroundColor: 'transparent'
      }
    }
  }
);


const Router = StackNavigator(
  {
    appTabs: {
      screen: appTabs
    },
    Chat: {
      screen: Chat
    },
    UserChat: {
      screen: UserChat
    },
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1997a8'
      },
      headerTitleStyle: {
        color: 'white'
      },
      headerBackTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white'
    }
  }
);

export default Router;
