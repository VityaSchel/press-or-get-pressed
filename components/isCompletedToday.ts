import AsyncStorage from '@react-native-async-storage/async-storage'
import daysSinceEpoch from './utils/daysSinceEpoch'

export default async function isCompletedToday(): Promise<boolean> {
  const lastWorkoutAt = await AsyncStorage.getItem('last_workout_at')
  if(lastWorkoutAt === null) return false
  const lastWorkoutAtUnixtime = Number(lastWorkoutAt)
  if(!Number.isSafeInteger(lastWorkoutAtUnixtime)) return false
  return daysSinceEpoch(lastWorkoutAtUnixtime) === daysSinceEpoch(Date.now())
}