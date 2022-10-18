import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native';
import DetailedScreen from './Screens/DetailedScreen';
import HomeScreen from './Screens/HomeScreen';
import Settings from './Screens/Settings';
const HomeStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const DetailedStack = createStackNavigator();
function HomeStackScreen({navigation}) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Home' component={HomeScreen}/>
      <HomeStack.Screen name='Detailed' component={DetailedScreen}/>
      <HomeStack.Screen name='Settings' component={Settings}/>
    </HomeStack.Navigator>
  )
}
const DetailedStackScreen = ( { navigation } ) => (
  <DetailedStack.Navigator>
  <DetailedStack.Screen name='Detailed' component={DetailedScreen}/>
</DetailedStack.Navigator>
)
   
  

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator >
        <Drawer.Screen name='Home' component={HomeStackScreen}  />
        <Drawer.Screen name='Detailed' component={DetailedStackScreen}/>
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
