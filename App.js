import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DetailedScreen from './Screens/DetailedScreen';
import HomeScreen from './Screens/HomeScreen';
import Settings from './Screens/Settings';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown:false}} />
      <Stack.Screen name='Detailed' component={DetailedScreen} options={{ headerShown:false}}/>
      <Stack.Screen name='Settings' component={Settings} options={{ headerShown:false}}/>
    </Stack.Navigator>
  )
}
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeStack} />
        <Drawer.Screen name='Detailed' component={DetailedScreen}/>
      </Drawer.Navigator>
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
