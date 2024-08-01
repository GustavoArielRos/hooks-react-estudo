//extrair a referência como propriedade aqui

import React from "react";
import {forwardRef, useRef, useImperativeHandle} from "react";
//o forwardRef, serve para o componente além de recebe um props ele pode também receber um ref
const SomeComponent = forwardRef((props, ref ) => {//ref --> referencia externa
    //referencia interna
    const localInputRef = useRef();//cria uma referencia para o input local

    //usando o hook, tem como parametro um "ref" e uma função
    useImperativeHandle(ref, () =>{//essa função retorno um objeto que possui métodos
        return {
            //define o que o método "validade" irá fazer
            validate: () => {
                //se o input tiver mais de 3 caracteres, ele fica vazio
                if (localInputRef.current.value.length > 3){
                    localInputRef.current.value = "";
                }
            },
        };
    });

    return(
        <div>
            <p>Insira no máximo 3 caracteres</p>
            {/*define a referencia local no input */}
            <input type="text" ref={localInputRef} />
        </div>
    );
});

export default SomeComponent;