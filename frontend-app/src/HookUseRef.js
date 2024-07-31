import React from 'react'
import { useEffect, useState, useRef } from 'react'

const HookUseRef = () => {
    //1 - useRef(referencia mutável)
    const numberRef= useRef(0);

    //declara dois states
    const [counter, setCounter] = useState(0);
    const [counterB, setCounterB] = useState(0);

    //executa algo após cada renderização do componente
    useEffect(() => {
        //incrementa o valor do numberRef.current
        numberRef.current = numberRef.current + 1;
    });

    return (
        <div>
            <h2>useRef</h2>
            <p>O Componente renderizou: {numberRef.current} vezes.</p>
            <p>Counter 1: {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Contador A</button>
            <p>Counter 1: {counterB}</p>
            <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
        </div>
    )
}

export default HookUseRef