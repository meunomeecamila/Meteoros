import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, navigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import IssLocationScreen from './screens/IssLocationScreen';
import Meteore from './screens/Meteore';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"screenOptions ={{
        headerShown:false
      }}>
      <Stack.Screen name="Home"component={HomeScreen}/>
      <Stack.Screen name="IssLocationScreen"component={IssLocationScreen}/>
      <Stack.Screen name="Meteore"component={Meteore}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App();

