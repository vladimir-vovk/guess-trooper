import { ReactElement } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native'

import { Images } from 'src/constants'

import { useAppState } from './AppContext'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%'
  },
  image: {
    width: '100%',
    height: '100%'
  }
})

type Props = {
  card: string
}

export const Card = ({ card }: Props): ReactElement => {
  const { dispatch } = useAppState()

  const onPress = () => {
    dispatch({ type: 'select-card', data: { card } })
  }

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={Images[card]} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  )
}
