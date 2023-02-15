// import { NavigationProp } from '@react-navigation/native'
// import type { NavigationRoute } from '@react-navigation/routers/src/types'
import type { useNavigation } from '@react-navigation/native'

export type DefaultNavigationRef = /*NavigationProp<ReactNavigation.RootParamList, never, undefined, Readonly<{
    key: string  
    index: number  
    routeNames: never[]  
    history?: unknown[]  
    routes: NavigationRoute<ReactNavigation.RootParamList, never>[]  
    type: string  
    stale: false  
}>, {}, {}>*/ ReturnType<typeof useNavigation>

export default function replaceNavigationStack(navigationRef: DefaultNavigationRef) {

}