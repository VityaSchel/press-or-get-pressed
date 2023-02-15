import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import LoadingScreen from './screens/Loading'
import HomeScreen from './screens/Home'
import SetupScreen from './screens/Setup'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SCREENS } from './data/enums'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={SCREENS.LOADING} component={LoadingScreen} />
          <Stack.Screen name={SCREENS.HOME} component={HomeScreen} />
          <Stack.Screen name={SCREENS.SETUP} component={SetupScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
