import * as React from 'react';
import { StyleSheet } from 'react-native';
import PreviousRidesHistoryScreen from './screens/PreviousRidesHistoryScreen';
import RideRentScreen from './screens/RideRentScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Rent"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63'
        }}>
          <Tab.Screen
            name="Rent"
            component={ RideRentScreen }
            options={{
              tabBarLabel: 'Rent',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bicycle" color={ color } size={30}/>
              ),
            }}/>
            <Tab.Screen
            name="History"
            component={ PreviousRidesHistoryScreen }
            options={{
              tabBarLabel: 'History',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="history" color={ color } size={size}/>
              ),
            }}/>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});