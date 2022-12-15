export default function average(list: string[]) {
    let count: number = 0
    const numbers = list.map(item => parseInt(item)).filter(n => !isNaN(n))
    for (let index = 0; index < numbers.length; index++) {
        count = numbers[index] + count;
    }

    return count / numbers.length || undefined
}