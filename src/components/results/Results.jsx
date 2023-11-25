import React, { useEffect, useState } from 'react'

const Results = ({ input, text, finished }) => {

    const textArray = text.split(" ").slice(1)
    const inputArray = input.split(" ")

    const [totalWords, setTotalWords] = useState(0)
    const [correctWords, setCorrectWords] = useState(0)

    const accuracy = Math.round((correctWords / totalWords) * 100)

    useEffect(() => {
        setTotalWords(inputArray.length)
        let correctWordsCounter = 0

        inputArray.forEach((element, index) => {
            if (inputArray[index] === textArray[index]) {
                correctWordsCounter += 1
            }
        })

        setCorrectWords(correctWordsCounter)

    }, [finished])


    return (
        <div className={!finished && "hidden"}>
            <div className={StyleSheet.container}>
                <h2>
                    Total: {totalWords}
                </h2>
                <h2>
                    Correct: {correctWords}
                </h2>
                <h2>
                    Accuracy: {accuracy}%
                </h2>
            </div>
        </div>
    )
}

export default Results