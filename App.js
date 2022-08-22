import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, StatusBar } from 'react-native';
import { colors } from './src/utils/colors';
import { Searchbar } from 'react-native-paper';

const isAndroid = Platform.OS === 'android';


export default function App() {
  return (
    <>
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
          <Searchbar
            placeholder="Search for restaurants"
            //onChangeText={this.updateSearch}
           // value={search}
          />
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
    searchBar: {
      padding: 20
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
