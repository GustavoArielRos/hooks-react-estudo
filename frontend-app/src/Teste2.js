import { useReducer } from "react";
import { useState } from "react";

export default function Teste2() {
    //criando o estado
    const [taskText, setTaskText] = useState("");

    //criando um objeto com 2 atributos, id e text
    const initialTaks = [
        {id: 1, text: "Fazer alguma coisa"},
        {id: 2, text: "Fazer outra coisa"}
    ];

    //criando a função que será usada no Reducer
    const taskReducer = (state, action) => {

        switch (action.type){

            //action.type == "ADD"
            case "ADD":
                //cria um novo objeto
                const newTask = {
                    id: Math.random(),
                    text: taskText
                };

                setTaskText("");//valor do state volta a ser vazio

                //retorna a lista com todo o conteudo dela + o novo objeto
                return [...state, newTask];
            
            case "DELETE":
                //retorna o state(lista) filtrado, no caso sem o id da action
                return state.filter((task) => task.id !== action.id);

            default:
                return state;
        }
    };

    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTaks);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatchTasks({type: "ADD"});

    };

    const removeTask = (id) => {
        dispatchTasks({type: "DELETE", id});
    }

    return (
        <div>
            <h3>Tarefas: </h3>
            <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  onChange={(e) => setTaskText(e.target.value)}
                  value={taskText}
                />
                <input type="submit" value="Enviar" />

            </form>
            {tasks.map((t) =>(
                <li key={t.id} onDoubleClick={() => removeTask()}>
                    {t.text}
                </li>
            ))}
        </div>
    )

}   

/*

tasks --> é o nome do state (variável), no caso chama o state
dispatchTasks --> é o nome da função que altera o state, no caso chama a função
taskReducer -->  é de fato a função criada por mim
initialTaks -->     é de fato o state criado por mim, geralmente um objeto
- a gente não coloca o reducer direto


*/