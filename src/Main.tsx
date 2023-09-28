import { ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

import { Board } from './Board'
import { RightAnswer } from './RightAnswer'
import { WrongAnswer } from './WrongAnswer'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
})

export const Main = (): ReactElement => {
  return (
    <View style={styles.container}>
      <Board />
      <WrongAnswer />
      <RightAnswer />
    </View>
  )
}
