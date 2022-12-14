import calculateAverage from "./average";

export default function calculateBestOccurrence(array: any[]) {
	if (!array.length) return undefined
	// se não houver card com maior número de escolha, deve-se 
	// calcular a média
	const average = Number(calculateAverage(array))
	// procurar o valor mais próximo da lista em comparação com a média
	const bestOccurrence = array.reduce(function (prevValue, currentValue) {
		return (Math.abs(currentValue - average) < Math.abs(prevValue - average) ? currentValue : prevValue);
	});

	return bestOccurrence || '?'
}