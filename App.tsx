import Login from './src/Screens/Login/index'
import SignUp from './src/Screens/SignUp/index'
import Friends from './src/Screens/Friends/index'
import Profile from './src/Screens/Profile/index'
import * as React from "react";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/Screens/Home/index'
import { THEME } from './src/theme';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter"
import Loading from './src/Loading';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AppTheme = {
  ...DefaultTheme,
  dark:true,
  colors: {
    ...DefaultTheme.colors,
    background: THEME.COLORS.BACKGROUND_900
  }
}

function App(){
  const isLoggedIn = false;
  
  const[ fontsLoaded ] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  })

  if (!fontsLoaded){
    return <Loading navigation={undefined} />
  }

  return (
    
    <NavigationContainer theme={AppTheme}>
        {!isLoggedIn ? (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              statusBarStyle: "light"
              }}
          >
                <Stack.Screen name='Login' component={Login}></Stack.Screen>
                <Stack.Screen name='SignUp' component={SignUp}></Stack.Screen>        
          </Stack.Navigator>) : (
              <Tab.Navigator>
                <Tab.Screen name='Home' component={Home} ></Tab.Screen>  
                <Tab.Screen name='Friends' component={Friends}></Tab.Screen> 
                <Tab.Screen name='Profile' component={Profile}  ></Tab.Screen>  
              </Tab.Navigator>
      )}
      </NavigationContainer>)}

export default App;