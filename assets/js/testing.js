// let myArray = [1, 6, 7, 8, 9, 3, 5, 2, 4, 10]
//
// let percentileRanking = (array, score) => {
// 	array.sort((a, b) => a - b)
// 	let position = array.indexOf(score) + 1
// 	let totalCount = array.length
// 	return (100 * (position - 0.5)) / totalCount
// }
//
// let percentileRankingTwo = (array, score) => {
// 	array.sort((a, b) => a - b)
// 	let position = array.lastIndexOf(score) + 1
// 	let totalCount = array.length
// 	return (position / totalCount) * 100
// }
//
// let rank = percentileRanking(myArray, 9)
// let rankTwo = percentileRankingTwo(myArray, 9)
//
// console.log('rank: ', rank)
// console.log('rankTwo: ', rankTwo)

let arrayOfObjects = [
	{
		name: "Jonathan",
		scores: {
			math: 100,
			reading: 65
		}
	},
	{
		name: "Sarah",
		scores: {
			math: 70,
			reading: 100
		}
	},
	{
		name: "James",
		scores: {
			math: 100,
			reading: 95
		}
	},
	{
		name: "Josiah",
		scores: {
			math: 100,
			reading: 80
		}
	}
]

console.log("My array: ", arrayOfObjects)

let newArray = Array.from(arrayOfObjects, x => x.scores.reading)

console.log("My new array: ", newArray)
