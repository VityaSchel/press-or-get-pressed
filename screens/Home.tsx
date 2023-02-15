import React from 'react'
import { Layout, Text, Spinner } from '@ui-kitten/components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import isCompletedToday from '../components/isCompletedToday'
import ExerciseStatus from '../components/ui/ExerciseStatus'

type State = 'loading' | 'done' | 'pending'

export default function HomeScreen() {
  const [state, setState] = React.useState<State>('loading')

  React.useEffect(() => { loadState() }, [])

  const loadState = async () => {
    if(await isCompletedToday()) setState('done')
    else setState('pending')
  }

  return (
    <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {state === 'loading'
        ? <Spinner status='primary'/>
        : (
          <>
            <ExerciseStatus completed={state === 'done'} />
            {/* <Plan /> */}
          </>
        )
      }
    </Layout>
  )
}