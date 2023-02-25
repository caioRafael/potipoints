export default function fibonacci(): number[] {
  const fibonacci: number[] = []

  for (let i = 0; i <= 11; i++) {
    if (i < 1) {
      fibonacci.push(0)
    } else if (i < 2) {
      fibonacci.push(1)
    } else {
      // const num1: number = fibonacci[i - 1]
      // const num2: number = fibonacci[i - 2]
      const num3: number = fibonacci[i - 1] + fibonacci[i - 2]

      fibonacci.push(num3)
    }
  }

  const noRepeat = fibonacci.filter((el, i) => {
    return fibonacci.indexOf(el) === i
  })

  return noRepeat
}
