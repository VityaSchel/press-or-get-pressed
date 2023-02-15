import React from 'react'
import { Text, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import replaceNavigationStack from '../components/utils/replaceNavigationStack'
import { SCREENS } from '../data/enums'

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
      replaceNavigationStack(navigation, SCREENS.SETUP)
    } else {
      replaceNavigationStack(navigation, SCREENS.HOME)
    }
    await SplashScreen.hideAsync()
  }

  return (
    <View />
  )
}