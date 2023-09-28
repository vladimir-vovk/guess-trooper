import { ReactElement } from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '50%'
  }
})

type Props = {
  children: ReactElement | ReactElement[]
}

export const Row = ({ children }: Props): ReactElement => {
  return <View style={styles.container}>{children}</View>
}
