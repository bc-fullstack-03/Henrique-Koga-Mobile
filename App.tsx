import Login from './src/Screens/Login/index'
import SignUp from './src/Screens/SignUp/index'
import Friends from './src/Screens/Friends/index'
import Profile from './src/Screens/Profile/index'
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/Screens/Home/index'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App(){
  const IsLoggedIn = false;
  
  return (
    <NavigationContainer>

        {!IsLoggedIn ? (<Stack.Navigator>
            <Stack.Screen name='Login' component={Login}></Stack.Screen>
            <Stack.Screen name='SignUp' component={SignUp}></Stack.Screen>        
        </Stack.Navigator>) : (
            <Tab.Navigator>
              <Tab.Screen name='Home' component={Home} ></Tab.Screen>  
              <Tab.Screen name='Friends' component={Friends}></Tab.Screen> 
              <Tab.Screen name='Profile' component={Profile}  ></Tab.Screen>  
            </Tab.Navigator>
      )}
    </NavigationContainer>
  )
}

export default App;