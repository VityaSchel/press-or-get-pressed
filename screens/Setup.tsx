import { Button, Layout, Text } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import replaceNavigationStack from '../components/utils/replaceNavigationStack'
import { SCREENS } from '../data/enums'

export default function SetupScreen() {
  const navigation = useNavigation()

  const handleComplete = () => {
    replaceNavigationStack(navigation, SCREENS.HOME)
  }

  return (
    <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center', height: 400 }}>
      <Button onPress={handleComplete}>
        Temporarily skip
      </Button>
    </Layout>
  )
}