import { useContext } from "react";//importa a hook
import { SomeContext } from "./HookUseContext";//importa o contexto criado

const Home = () => {
    //usa o "useContext" para acessar o valor do contexto "SomeContext"
    //Desestrutura o objeto retornado para obter contextValue
    const { contextValue } = useContext(SomeContext);

    return (
        <div>
            <h2>useContext</h2>
            {/*redenriza o valor do contexto armazenado no "contextValue" */}
            <p>Valor do context: {contextValue}</p>
            <br />
        </div>
    );
};

export default Home;