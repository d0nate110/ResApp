import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';

const isAndroid = Platform.OS === 'android';


export default function App() {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.greenCont}>
        <Text style={styles.text}> Hey </Text>
      </View>
      <View style={styles.blueCont}>
        <Text style={styles.text}> Bye </Text>
      </View>
    </SafeAreaView>
    <ExpoStatusBar style='auto' />
    </>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight
    },
    greenCont: {
      padding: 2,
      backgroundColor: colors.green
    },
    blueCont: {
      flex: 1,
      padding: 10,
      backgroundColor: colors.blue
    },
    text: {
      color: colors.white,
      padding: 30
    }
});
