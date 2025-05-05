import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import SetManageScreen from './src/screens/SetManageScreen';
import { RootStackParamList } from './src/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ana Sayfa' }} />
        <Stack.Screen name="Review" component={ReviewScreen} options={{ title: 'Tekrar Yap' }} />
        <Stack.Screen name="SetManage" component={SetManageScreen} options={{ title: 'Set Yönetimi' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
