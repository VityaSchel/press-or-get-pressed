export default function daysSinceEpoch(inputMilliseconds: number): number {
  const MILLISECOND = 1
  const SECOND = MILLISECOND * 1000
  const MINUTE = SECOND * 60
  const HOUR = MINUTE * 60
  const DAY = HOUR * 24
  return Math.floor(inputMilliseconds / DAY)
}