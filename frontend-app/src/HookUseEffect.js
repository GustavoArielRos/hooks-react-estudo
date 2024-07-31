import React from "react";
import { useEffect } from "react";

const HookUseEffect = () => {
    // 1 - useEffect, sem dependencias
    useEffect(() => {
        console.log("Estou sendo executado!");
    });

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1);
    };

    // 2 - array de dep. vazio

    useEffect(() => {
        console.log("Serei executado apenas uma vez!")
    }, []);

    // 3 - item no array de deps
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
        if(anotherNumber > 0){
            console.log("Sou executado apenas quando o anotherNUmber muda!");
        }       
    }, [anotherNumber]);//toda vez que o state anotherNumber for alterado o que esta dentro do useEffect ocorre

    // 4 - cleanup do useEffect
    useEffect(() => {

        //o timer é definido para rodar uma função depois de 2 segundos
        //setTimeout é uma função que executa algo depois de certo tempo
        const timer = setTimeout(() => {
            console.log("Hello World");

            setAnotherNumber(anotherNumber + 1);
        }, 2000);

        return () => clearTimeout(timer);

    },[anotherNumber])//o efeito roda sempre que o anotherNumber mudar


    return(
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Executar!</button>
            <p>another Number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>
                Mudar anotherNumber!
            </button>
            <hr />
        </div>
    );
};

export default HookUseEffect;