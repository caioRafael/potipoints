export default function average(list: number[]){
    let count: number = 0
    for (let index = 0; index < list.length; index++) {
        count = list[index] + count;
    }

    return count/list.length
}