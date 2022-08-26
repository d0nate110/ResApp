import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function HomeScreen() {
  return (
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider> 
  );
}


function MapScreen() {

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Map</Text>
  </View>
  )

}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  })

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }


  return (
    <>
    <NavigationContainer>
      <Tab.Navigator>
          <Tab.Screen name="Restaurants" component={HomeScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    
    <ExpoStatusBar style='auto' />
    </>

  );
}
