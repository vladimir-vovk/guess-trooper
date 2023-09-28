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
    color: 'green',
    borderWidth: 10,
    borderColor: 'green',
    padding: 64
  },
  code: {
    position: 'absolute',
    bottom: 20,
    fontSize: 144,
    fontWeight: 'bold',
    color: 'green',
    padding: 64
  }
})

async function playSound() {
  const { sound } = await Audio.Sound.createAsync(require('../assets/right.wav'))

  await sound.playAsync()
  // sound.unloadAsync()
}

const randomCode = (): string => {
  const chars = '1234567890'.split('')
  return Array.from({ length: 3 }, () => chars[Math.floor(Math.random() * chars.length)]).join('')
}

export const RightAnswer = (): ReactElement | null => {
  const { state, dispatch } = useAppState()
  const { status } = state

  useEffect(() => {
    if (status === Status.rightAnswer) {
      playSound()
      const timeoutId = setTimeout(() => {
        dispatch({ type: 'start-new-game' })
      }, 8000)

      return () => clearTimeout(timeoutId)
    }
  }, [status])

  if (status !== Status.rightAnswer) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Granted</Text>
      <Text style={styles.code}>Code: {randomCode()}</Text>
    </View>
  )
}
