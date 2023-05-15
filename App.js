import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import Card from './src/components/Card';
import Home from './src/Home';
import { useEffect } from 'react';
import Cat from './src/components/Cat';


export default function App() {



  const Stack = createStackNavigator();
  return (
    <Provider store={store}>
 <NavigationContainer>
  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name="home"  component={Home}/>
    <Stack.Screen name="card"  component={Card}/>
    <Stack.Screen name="cat"  component={Cat}/>
  </Stack.Navigator>

 </NavigationContainer>
 </Provider>
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
