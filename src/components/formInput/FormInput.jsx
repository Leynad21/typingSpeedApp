import { useState } from "react"
import styles from "./formInput.module.css"


const FormInput = ({ input, text, setInput, textImported }) => {

    let textArray = text.split("")
    textArray = textArray.slice(1)

    const formattedText = textArray.map((char, index) => {

        let color = ""

        if (index < input.length) {
            color = char === input[index] ? styles.correct : styles.wrong
        }

        return (
            <span key={`${char}_${index}`} className={color}>{char}</span>
        )


    })




    return (
        <div className={!textImported && "hidden"}>
            <div className={styles.container}>
                <div className={styles.textDisplay}>
                    <h3>
                        {formattedText}
                    </h3>
                </div>
                <div className={styles.formField}>
                    <form >
                        <div>
                            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type Here" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormInput
