import React, { useState } from 'react'
import TextGenerator from '../components/textGenerator/TextGenerator'
import FormInput from '../components/formInput/FormInput'
import Results from '../components/results/Results'
import CountdownTimer from '../components/countdownTimer/CountdownTimer'

const HomePage = () => {

    const [text, setText] = useState("")
    const [input, setInput] = useState("")
    const [textImported, setTextImported] = useState(false)

    const [startTime, setStartTime] = useState(false)
    const [finished, setFinished] = useState(false)

    const getParagraph = (paragraph) => {
        setText(paragraph)
    }

    return (
        <div>
            <h1 className='app-title'> Typing Pro</h1>
            <div className={!textImported ? "" : "hidden"}>
                <div className='welcome-title'>
                    <h1>Welcome To the Typing Master!</h1>
                </div>
            </div>
            <TextGenerator
                getParagraph={getParagraph}
                textImported={textImported}
                setTextImported={setTextImported}
            />

            <CountdownTimer
                startTime={startTime}
                setStartTime={setStartTime}
                setFinished={setFinished}
            />

            <FormInput
                text={text}
                input={input}
                setInput={setInput}
                textImported={textImported}
            />

            <Results
                text={text}
                input={input}
                finished={finished}
            />

            <div>
                <button onClick={() => setStartTime(true)} className={!textImported && "hidden"}>Start Typing</button>
            </div>
            <div className={!finished && "hidden"}>
                <button onClick={() => window.location.reload(false)} className='btn-restart'>Restart</button>
            </div>

        </div>
    )
}

export default HomePage