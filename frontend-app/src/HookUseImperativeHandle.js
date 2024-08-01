import React from 'react'
import { useRef } from 'react';
import SomeComponent from './SomeComponent';

const HookUseImperativeHandle = () => {

    //cria uma referencia para ser passada para o "SomeComponent"
    const componentRef = useRef();

    

    return(
        <div>
            <h2>useImperativeHandle</h2>
            <SomeComponent ref={componentRef} />{/* passando a referência para SomeComponent */}
            {/*clicando no botão ativamos o método que esta em "SomeComponent" através da referencia */}
            <button onClick={() =>componentRef.current.validate()}>Validate</button>
        </div>
    );
        
    
};

export default HookUseImperativeHandle;