const shuffle = (array: any[]): any[] => {
  const input = [...array]
  const result = []

  while (input.length) {
    const i = Math.floor(Math.random() * input.length)
    const el = input.splice(i, 1)[0]
    // @ts-ignore
    result.push(el)
  }

  return result
}

export const randomCards = (): string[] => {
  const cards = Array.from({ length: 6 }, (_, i) => `trooper${i + 1}`)
  return shuffle(cards)
}
