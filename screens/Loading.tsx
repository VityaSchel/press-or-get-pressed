import React from 'react'
import { Text, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import replaceNavigationStack from '../components/utils/replaceNavigationStack'

SplashScreen.preventAutoHideAsync()

export default function LoadingScreen() {
  const navigation = useNavigation()

  React.useEffect(() => { 
    loadLoginState()
      .catch(alert)
  }, [])

  const loadLoginState = async () => {
    const session = await AsyncStorage.getItem('@mtproto_session')
    if(session === null) {
      replaceNavigationStack(navigation)
    } else {

    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 400 }}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  )
}