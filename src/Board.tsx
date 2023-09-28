import { ReactElement } from 'react'

import { useAppState } from './AppContext'
import { Card } from './Card'
import { Row } from './Row'

export const Board = (): ReactElement => {
  const { state } = useAppState()
  const { cards } = state

  return (
    <>
      <Row>
        {cards.slice(0, 3).map((card) => (
          <Card card={card} key={card} />
        ))}
      </Row>
      <Row>
        {cards.slice(3).map((card) => (
          <Card card={card} key={card} />
        ))}
      </Row>
    </>
  )
}
