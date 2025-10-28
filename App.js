import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';

// Import screens
import DashboardScreen from './src/components/dashboard/DashboardScreen';
import NavigationScreen from './src/components/navigation/NavigationScreen';
import AutomationScreen from './src/components/automation/AutomationScreen';
import ProfileScreen from './src/components/common/ProfileScreen';

// Import theme
import { colors } from './src/styles/theme';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: styles.tabBar,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textSecondary,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Flights"
          component={DashboardScreen}
          options={{
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>✈️</Text>,
          }}
        />
        <Tab.Screen
          name="Navigate"
          component={NavigationScreen}
          options={{
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>🧭</Text>,
          }}
        />
        <Tab.Screen
          name="Automate"
          component={AutomationScreen}
          options={{
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>⚡</Text>,
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 20, color }}>👤</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: colors.backgroundDark,
    borderTopColor: colors.border,
    paddingBottom: 25,
    paddingTop: 15,
    height: 80,
  },
});

export default App;
