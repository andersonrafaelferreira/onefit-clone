import { StatusBar } from 'expo-status-bar';

// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React from 'react';
import { Text, View, Platform } from 'react-native';
import { Feather, FontAwesome5, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import {colors} from './src/colors';

import Locations from './src/Pages/Locations';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Hire</Text>
    </View>
  );
}
function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Me!</Text>
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}>Please</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {

  return (
  <>
    <StatusBar style="auto" />

    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
            height: Platform.OS === "ios" ? 84 : 64,
          },
          iconStyle: {
            // flex: 0,
            // width: 16,
            // height: 16,
            marginBottom: 0,
          },
          labelStyle: {
            fontSize: 12,
            marginTop: -10,
            marginBottom: 30,
            alignItems: "center",
            justifyContent: "center",
          },
          activeTintColor: "#027de8",
          inactiveTintColor: 'gray',

          inactiveBackgroundColor: "#fff",
          activeBackgroundColor: "#fff",
          adaptive: true,
          
          safeAreaInsets: {
            bottom: 0,
          },
        }}
      >
        <Tab.Screen name="Locations" component={Locations} 
          options={{
            tabBarLabel: "Locations",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="location-sharp" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} 
          options={{
            tabBarLabel: "Classes",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="wine-bottle" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Home" component={HomeScreen} 
          options={{
            tabBarLabel: "Check-in",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="speaker-phone" size={24} color={color} />
            ),
          }}
        />
        <Tab.Screen name="Profile" component={Profile} 
          options={{
            tabBarLabel: "Rafael",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-circle" size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  </>
  );
}