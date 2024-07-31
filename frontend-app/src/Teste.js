import React from "react";
import { useState } from "react";


function Teste() {

    const [age, setAge ] = useState(0);

    return(
        <div>
            <input 
                type="text"
                value = {age}
                onChange = { (e) => setAge(e.target.value)}
            
            />

            <p>voce tem { age } anos</p>
        </div>
    );

}

export default Teste;