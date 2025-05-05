// mobile/src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginBottom: 20, fontSize: 18 }}>Home Screen</Text>
      <Button title="Tekrar Yap" onPress={() => navigation.navigate('Review')} />
      <View style={{ height: 10 }} />
      <Button title="Set Yönetimi" onPress={() => navigation.navigate('SetManage')} />
    </View>
  );
}
