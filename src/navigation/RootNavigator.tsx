import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';
import { colors } from '../theme';

import HomeScreen from '../screens/HomeScreen';
import MainMenuScreen from '../screens/MainMenuScreen';
import UmrahHomeScreen from '../screens/UmrahHomeScreen';
import PreparationScreen from '../screens/PreparationScreen';
import DosDontsScreen from '../screens/DosDontsScreen';
import WearingIhramScreen from '../screens/WearingIhramScreen';
import StateOfIhramScreen from '../screens/StateOfIhramScreen';
import MiqatScreen from '../screens/MiqatScreen';
import KnowKaabaScreen from '../screens/KnowKaabaScreen';
import DamPenaltiesScreen from '../screens/DamPenaltiesScreen';
import PlacesMakkahScreen from '../screens/PlacesMakkahScreen';
import UmrahStepsScreen from '../screens/UmrahStepsScreen';
import UmrahStepDetailScreen from '../screens/UmrahStepDetailScreen';
import MadinahHomeScreen from '../screens/MadinahHomeScreen';
import SendingSalaamScreen from '../screens/SendingSalaamScreen';
import RawdahScreen from '../screens/RawdahScreen';
import DuasMadinahScreen from '../screens/DuasMadinahScreen';
import PlacesMadinahScreen from '../screens/PlacesMadinahScreen';
import Rabbana40Screen from '../screens/Rabbana40Screen';
import NiyyahSalahScreen from '../screens/NiyyahSalahScreen';
import HowToDuaScreen from '../screens/HowToDuaScreen';
import BookletAnnexScreen from '../screens/BookletAnnexScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.background,
    primary: colors.primary,
    card: colors.surface,
    text: colors.text,
    border: colors.border,
  },
};

export default function RootNavigator() {
  return (
    <NavigationContainer theme={navTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: colors.primary },
          headerTintColor: colors.textInverse,
          headerTitleStyle: { fontWeight: '700' },
          headerBackTitle: 'Back',
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainMenu" component={MainMenuScreen} options={{ title: 'Main menu' }} />

        <Stack.Screen name="UmrahHome" component={UmrahHomeScreen} options={{ title: '‘Umrah journey' }} />
        <Stack.Screen name="Preparation" component={PreparationScreen} options={{ title: 'Preparation' }} />
        <Stack.Screen name="DosDonts" component={DosDontsScreen} options={{ title: 'Do’s & Don’ts' }} />
        <Stack.Screen name="WearingIhram" component={WearingIhramScreen} options={{ title: 'Wearing ihram' }} />
        <Stack.Screen name="StateOfIhram" component={StateOfIhramScreen} options={{ title: 'State of ihram' }} />
        <Stack.Screen name="Miqat" component={MiqatScreen} options={{ title: 'Where to make niyyah' }} />
        <Stack.Screen name="KnowKaaba" component={KnowKaabaScreen} options={{ title: 'Know the Ka‘bah' }} />
        <Stack.Screen name="DamPenalties" component={DamPenaltiesScreen} options={{ title: 'Dam & penalties' }} />
        <Stack.Screen name="PlacesMakkah" component={PlacesMakkahScreen} options={{ title: 'Places in Makkah' }} />
        <Stack.Screen name="UmrahSteps" component={UmrahStepsScreen} options={{ title: '‘Umrah step by step' }} />
        <Stack.Screen
          name="UmrahStepDetail"
          component={UmrahStepDetailScreen}
          options={{ title: '‘Umrah step' }}
        />

        <Stack.Screen name="MadinahHome" component={MadinahHomeScreen} options={{ title: 'Madinah ziyarah' }} />
        <Stack.Screen name="SendingSalaam" component={SendingSalaamScreen} options={{ title: 'Sending salaam' }} />
        <Stack.Screen name="Rawdah" component={RawdahScreen} options={{ title: 'In the Rawdah' }} />
        <Stack.Screen name="DuasMadinah" component={DuasMadinahScreen} options={{ title: 'Du‘as in Madinah' }} />
        <Stack.Screen name="PlacesMadinah" component={PlacesMadinahScreen} options={{ title: 'Places in Madinah' }} />

        <Stack.Screen name="Rabbana40" component={Rabbana40Screen} options={{ title: '40 Rabbana' }} />
        <Stack.Screen name="NiyyahSalah" component={NiyyahSalahScreen} options={{ title: 'Niyyah for salah' }} />
        <Stack.Screen name="HowToDua" component={HowToDuaScreen} options={{ title: 'How to make du‘a' }} />
        <Stack.Screen name="BookletAnnex" component={BookletAnnexScreen} options={{ title: 'Booklet pages' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
