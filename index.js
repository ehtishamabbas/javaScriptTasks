

const inputArray1 = [2, 4, 3, 9, 6]
const inputArray2 = [6, 5, 9, 8, 4]

const mergedArray = [...inputArray1, ...inputArray2]
const copyMergedArray = [...(mergedArray.sort(function (a, b) { return a - b }))]
const resultedArray = []
let count = 1;


for (let i = 1; i <= copyMergedArray.length; i++) {
    if (copyMergedArray[i] !== copyMergedArray[i - 1] && i != copyMergedArray.length) {
        resultedArray.push(count)
        resultedArray.push(copyMergedArray[i - 1])
        count = 1
    }
    else if (copyMergedArray[i] !== copyMergedArray[i - 1] && i === copyMergedArray.length) {

        resultedArray.push(count)
        resultedArray.push(copyMergedArray[i - 1])
    }
    else if (copyMergedArray[i] === copyMergedArray[i - 1] && i === copyMergedArray.length) {
        resultedArray.push(count)
        resultedArray.push(copyMergedArray[i])
    }
    else if (copyMergedArray[i] === copyMergedArray[i - 1] && i != copyMergedArray.length) {
        count++
    }

}

const resultedArrayInString = resultedArray.join("");

console.log(resultedArrayInString)


const object1 = {
    a: 1,
    b: {
        c: 12,
        d: 32
    },
    e: "hello"
}
const resultedObject = {}
Object.entries(object1).forEach((entery, index1) => {
    if (typeof entery[1] === "object") {
        Object.entries(entery[1]).forEach((temp) => {
            const [keyTemp, valuetTemp] = temp
            resultedObject[keyTemp] = valuetTemp
        })
    }
    else {
        const [key1, value1] = entery
        resultedObject[key1] = value1
    }
})

console.log(resultedObject)




