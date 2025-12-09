import { useEffect, useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {useAutoComplete, useSearch, useWeatherLoc} from "./Hooks.ts";

function App() {
const[currStr, setCurrStr] = useState<string>('');
const[currPlace, setCurrPlace] = useState<string>('');
const autoComplete = useAutoComplete(currStr);
const city = useSearch(currPlace);
const coords = useWeatherLoc(city? city.long : 0, city? city.lat : 0);
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
                            setCurrPlace(auto.city);
                            setCurrStr(auto.city);
                        }}>{auto.city}</button>
                    </ul>
                </div>)}
            </div>
            <button id='buttonOne' onClick={() => {

            }}>Search
            </button>
        </>
    )
}

export default App




