import { Audio } from 'expo-av'
import { ReactElement, useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Status, useAppState } from './AppContext'

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 164,
    fontWeight: 'bold',
    color: 'red',
    borderWidth: 10,
    borderColor: 'red',
    padding: 64
  }
})

async function playSound() {
  const { sound } = await Audio.Sound.createAsync(require('../assets/wrong.wav'))

  await sound.playAsync()
  // sound.unloadAsync()
}

export const WrongAnswer = (): ReactElement | null => {
  const { state, dispatch } = useAppState()
  const { status } = state

  useEffect(() => {
    if (status === Status.wrongAnswer) {
      playSound()
      const timeoutId = setTimeout(() => {
        dispatch({ type: 'return-to-game' })
      }, 2000)

      return () => clearTimeout(timeoutId)
    }
  }, [status])

  if (status !== Status.wrongAnswer) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Denied</Text>
    </View>
  )
}
