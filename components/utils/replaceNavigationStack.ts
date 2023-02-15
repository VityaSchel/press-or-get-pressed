import type { NavigationProp } from '@react-navigation/native'
import { SCREENS } from '../../data/enums'

export type DefaultNavigationRef = NavigationProp<ReactNavigation.RootParamList>

type ScreenName = typeof SCREENS[keyof typeof SCREENS]

export default function replaceNavigationStack(navigationRef: DefaultNavigationRef, routes: ScreenName): void
export default function replaceNavigationStack(navigationRef: DefaultNavigationRef, routes: ScreenName[], index?: number): void
export default function replaceNavigationStack(navigationRef: DefaultNavigationRef, routes: ScreenName[] | ScreenName, index = 0): void {
  navigationRef.reset({ 
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error https://reactnavigation.org/docs/navigation-actions/#reset
    routes: Array.isArray(routes) ? routes.map(r => ({ name: r })) : [{ name: routes }], 
    index 
  })
}