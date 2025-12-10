import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {useAutoComplete, useSearch, useWeatherLoc} from "./Hooks.ts";

function App() {
const[currStr, setCurrStr] = useState<string>('');
const[currPlace, setCurrPlace] = useState<string>('');
const autoComplete = useAutoComplete(currStr);
const coords = useSearch(currPlace);
const weather = useWeatherLoc(coords? coords.lon : 0, coords? coords.lat : 0);
    return (
        <>
            <label>
                <input value={currStr} onChange={e => setCurrStr(e.target.value)} />
            </label>
            <div>
                {autoComplete.map((auto, index) =>
                <div key={index}>
                    <ul>
                        <button onClick={() => {
                            setCurrPlace(auto.formatted);
                            setCurrStr(auto.formatted);
                        }}>{auto.formatted}</button>
                    </ul>
                </div>)}
            </div>
            <button id='buttonOne' onClick={() => setCurrPlace(currStr)}>Search
            </button>

            {coords? coords.lon : 0}, {coords? coords.lat : 0}



        </>
    )
}

export default App




