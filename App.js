import 'react-native-url-polyfill/auto';
import { StyleSheet, Text, View ,SafeAreaView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
          name="HomeScreen"
          options={{headerShown: false}}
          component={HomeScreen} />

           <Stack.Screen 
          name="OrderScreen"
          options={{headerShown: false}}
          component={OrderScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}