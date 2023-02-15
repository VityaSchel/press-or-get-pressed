import { Layout, Text, Spinner } from '@ui-kitten/components'

export default function ExerciseStatus(props: { completed: boolean }) {

  React.useEffect(() => {
    
  }, [])

  return (
    <Layout>
      <Text category='h1'>{props.completed ? 'Отличная работа!' : ''}</Text>
      <Text category='h2'>{props.completed ? 'Продолжим завтра 👍' }</Text>
    </Layout>
  )
}