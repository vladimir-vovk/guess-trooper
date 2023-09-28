import { ReactElement } from 'react'
import { StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

import { AppStateProvider } from './AppContext'
import { Main } from './Main'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default function App(): ReactElement {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <AppStateProvider>
          <Main />
        </AppStateProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}
