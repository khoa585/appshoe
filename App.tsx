import React from 'react'
import Login from './src/Components/Screens/Login/Login';
import Register from './src/Components/Screens/Register/Register';
import ForgotPassword from './src/Components/Screens/ForgotPassword/ForgotPassword';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator, TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

import { createSharedElementStackNavigator, SharedElement } from 'react-navigation-shared-element';
import Profile from './src/Components/Screens/Profile/Profile';
const Stack = createSharedElementStackNavigator();
const Stack_ = createStackNavigator();
import { enableScreens } from 'react-native-screens';
import MainTab from './src/Components/Screens/MainTab/MainTab'
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
import ListItem from './src/Components/ListItem';
import DetailItem from './src/Components/DetailItem';
import ListCategory from './src/Components/ListCategory';
import Cart from './src/Components/Cart';
import { View, Text, TouchableOpacity, NativeModules } from 'react-native';
const Drawer = createDrawerNavigator();
enableScreens()
function AppMain() {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="ListItem">
      <Stack.Screen name="ListItem" component={ListItem}
      />
      <Stack.Screen name="Login" component={Login}
      />
      <Stack.Screen name="ListCategory" component={ListCategory}
      />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="DetailItem" component={DetailItem}
        options={() => ({
          gestureEnabled: false,
          transitionSpec: {
            open: { animation: 'timing', config: { duration: 500 } },
            close: { animation: 'timing', config: { duration: 500 } },
          },
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
              }
            }
          }
        })}
        sharedElementsConfig={(route) => {
          const { item } = route.params;
          return [
            {
              id: `item.${item.id}.bg`,
              animation: 'move',
              resize: 'clip',
              align: 'center-top'
            },
            {
              id: `item.${item.id}.img`,
              resize: 'clip',
              align: 'center-top'
            },
            {
              id: `item.${item.id}.category`,
              resize: 'clip',
              align: 'center-top'
            }
          ];
        }}
      />
    </Stack.Navigator>
  )
}
const App = () => {
  return (
    // <NavigationContainer>
    //   <Drawer.Navigator initialRouteName="MENU" drawerContent={props => <MainTab {...props} />}>
    //     <Drawer.Screen name="MENU" component={AppMain} />
    //   </Drawer.Navigator>
    // </NavigationContainer>
    <View>
      <TouchableOpacity
        style={{
          padding: 20,

        }}
        onPress={() => {
          console.log('s')
          NativeModules.ToastExample.show('Awesome', NativeModules.ToastExample.SHORT);
        }}
      >
        <Text>click</Text>
      </TouchableOpacity>
    </View>
  );
};
export default App
