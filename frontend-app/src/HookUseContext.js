import { createContext } from "react";

//cria um novo contexto chamdo "SomeContext" usando o "createContext"
export const SomeContext = createContext()

//componente, ele recebe uma prop chamada "children"
export const HookUseContext = ({children}) => {

    //um valor para o contexto no caso é uma string
    const contextValue = "testing context";

    // Retorna o provedor do contexto SomeContext, passando o valor do contexto como objeto
    // tudo que estiver dentro do SomeContext.Provider pode acessar o valor do contexto
    return (
        <SomeContext.Provider value={{contextValue}}>
            {children}
        </SomeContext.Provider>

        
    );


}