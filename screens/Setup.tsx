import React from 'react'
import { Button, Layout, Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import replaceNavigationStack from '../components/utils/replaceNavigationStack'
import { SCREENS } from '../data/enums'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function SetupScreen() {
  const navigation = useNavigation()

  const handleComplete = async (session: string) => {
    await AsyncStorage.setItem('@mtproto_session', session)
    replaceNavigationStack(navigation, SCREENS.HOME)
  }

  const handleSubmit = () => {
    handleComplete('_placeholder_')
  }

  return (
    <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 400 }}>
      <Button onPress={handleSubmit}>
        Temporarily skip
      </Button>
    </Layout>
  )
}