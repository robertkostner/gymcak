import {useState} from 'react'
import Link from 'next/link';

const Form = ( ) => {
    const [todos, setTodos] = useState(["Toto je můj první úkol", "Vynést koš", "Udělat ukol na zemák"])

    return <div>
        <p><Link href="/"><a>Home page</a></Link></p>
        <h2>Naše úkoly (celkem mám {todos.length} úkolů)</h2>

        <form onSubmit={(e) => {
            e.preventDefault();
            const newTodo = e.target.todo.value;
            setTodos([...todos, newTodo])
        }}>
            <input name="todo" />
            <button>Přidej úkol</button> 
        </form>

        <ul>
            {todos.map((todo)=> <li>{todo}</li> )}
        </ul>
    </div>
}

export default Form