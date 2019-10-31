import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  HomeScreen,
  MessageScreen,
  NotificationScreen,
  PostScreen,
  ProfileScreen,
} from './src/screens';
import AddButton from './src/components/AddButton';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" size={24} color="#888" />
        ),
      },
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="rocketchat" size={24} color="#888" />
        ),
      },
    },
    Post: {
      screen: PostScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <AddButton />,
      },
    },
    Notification: {
      screen: NotificationScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="bell" size={24} color="#888" />
        ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" size={24} color="#888" />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
    },
  },
);

export default createAppContainer(TabNavigator);
