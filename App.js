import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MaterialIcons } from '@expo/vector-icons';

import SearchScreen from "./src/screens/SearchScreen"
import HomeScreen from "./src/screens/HomeScreen"
import ResultsShowScreen from "./src/screens/ResultsShowScreen"

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{
            headerStyle: {
              backgroundColor: '#f4511e'
            },
            headerTitleStyle: {
              fontWeight: "bold",
              color: "white"

            },
            headerTintColor: "white",
            headerRight: () => {
              return <MaterialIcons name="restaurant" size={24} color="black" style={{ marginRight: 150, color: "white" }} />
            }

          }}
        />
        <Stack.Screen name="Show" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App