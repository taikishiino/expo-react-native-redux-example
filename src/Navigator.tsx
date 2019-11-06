import * as React from 'react';
import { Platform } from 'react-native';
import
{
	TabNavigator,
	StackNavigator,
	DrawerNavigator,
} from 'react-navigation';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

import HomeScreen from './components/screens/Home';

import { HamburgerIcon, BackIcon } from './components/icons';

import { CustomDrawerContent } from './components';
import { colors } from './utils/constants';

const AppMainTab = TabNavigator({
	Home: {
		screen: HomeScreen,
		navigationOptions: ({ navigation }) => ({
			drawerLabel: 'Sweet home',
			drawerIcon: ({ tintColor }) => (
				<FontAwesome name="home" size={23} color={tintColor} />
			),
			tabBarLabel: 'Home',
			tabBarIcon: ({ tintColor }) => (
				<FontAwesome name="home" size={23} color={tintColor} />
			),
			headerStyle: {
				backgroundColor: colors.PINK_100,
			},
			headerTitle: 'Sweet Home',
			headerTitleStyle: {
				color: colors.WHITE,
			},
			headerLeft: <HamburgerIcon onPress={() => navigation.navigate('DrawerOpen')} />,
		})
	},
}, {
	tabBarOptions: {
		activeTintColor: colors.WHITE,
		inactiveTintColor: colors.PINK_50,
		inactiveBackgroundColor: colors.PINK_100,
		activeBackgroundColor: colors.PINK_100,
		showIcon: true,
		showLabel: Platform.OS === 'ios',
		indicatorStyle: {
			backgroundColor: colors.PINK_300,
		},
		style: {
			backgroundColor: colors.PINK_100,
		},
		upperCaseLabel: false,
	},
	tabBarPosition: 'bottom',
	swipeEnabled: false,
	animationEnabled: false,
});

const AppMainStack = StackNavigator({
	Home: { screen: AppMainTab },
	Settings: { screen: SettingsScreen },
}, {
	cardStyle: {
		backgroundColor: colors.PINK_50,
	},
	mode: 'modal',
});

const AppDrawer = DrawerNavigator({
	Home: {
		screen: AppMainStack,
	},
	Settings: {
		screen: SettingsScreen,
		navigationOptions: ({ navigation }) => ({
			drawerLabel: 'Settings',
			drawerIcon: ({ tintColor }) => (
				<Ionicons name="md-settings" size={23} color={tintColor} />
			),
			headerStyle: {
				backgroundColor: colors.PINK_100,
			},
			headerTitle: 'Settings',
			headerTitleStyle: {
				color: colors.WHITE,
			},
			headerLeft: <BackIcon onPress={() => navigation.goBack()} />,
		}),
	},
}, {
	contentComponent: props =>
		(<CustomDrawerContent
			{...props}
		/>),
	contentOptions: {
		activeBackgroundColor: colors.PINK_100,
		activeTintColor: colors.WHITE,
		inactiveTintColor: colors.PINK_200,
	},
});

const Navigator = TabNavigator({
	Welcome: { screen: WelcomeScreen },
	Main: { screen: AppDrawer },
}, {
	navigationOptions: {
		tabBarVisible: false,
	},
	swipeEnabled: false,
});

export default Navigator;