import { useState } from "react";
import "./todo.css";


    export const TodoForm = ({ onAddTodo }) => {
        const [inputValue, setInputValue] = useState({ id: "", content: "", checked: false });

        const handleInputChange = (value) => {
            setInputValue({ id: Date.now(), content: value, checked: false });
        };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({ id: "",content:"",checked:false });

    }
    return (
        <section className="form">
            {/* onSubmit={handleFormSubmit} */}
            <form onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" style={{ color: "black" }} className="todo-input" autoComplete="off" name="" id="" value={inputValue.content} onChange={(event) => handleInputChange(event.target.value)} />
                </div>
                <div>
                    <button type="submit" className="todo-btn">add task</button>
                </div>
            </form>
        </section>
    );
}