import "./todo.css";
import { useState } from "react";
import { TodoForm } from "./todoform";
import { TodoList } from "./todolist";
import { TodoDate } from "./todoDate";
import { getLocalStorageTodoData, setLocalStorageTodoData } from "./todoLocalStorage";
// import { useState } from "react";


export const Todoa = () => {
    const [task, setTask] = useState(() => getLocalStorageTodoData() || []);
    
    const handleFormSubmit = (inputValue) => {
        const { id, content, checked } = inputValue;
        
        if (!content) return;
        
        // if (task.includes(inputValue)) { 
        //     return;
        // };
        const ifTodoContentMethod = task.find((curTask) => curTask.content === content);
        if (ifTodoContentMethod) return;
        // spread oprator
        
        // setTask((prevTask) => [...prevTask, {id:id,content:content,checked:checked}]);
        
        setTask((prevTask) => [...prevTask, {id,content,checked}]);
        console.log(task);
        
        
    };
    // localstorage
    setLocalStorageTodoData(task);
    // delete todo
    const handleDeleteTodo = (value) => {
        // console.log(task,"-----");
        // console.log(value);
        // filter true value ape means match thshe te apshe
        const updatedTask = task.filter((curTask) => curTask.content !== value);
        setTask(updatedTask);
        
    }

    // handleClearTodoData
    const handleClearTodoData = () => {
        
        setTask([]);
    }

    const HandleCheckedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, checked: !curTask.checked };
            } else {
                return curTask;
            }
        })
        setTask(updatedTask);
    };
    return (
        <section className="container-fluid todo-container">

            <h1>Todo List</h1>
            <TodoDate/>
            <TodoForm onAddTodo={handleFormSubmit} />
            <section className="myUnordList">
                <ul>
                    {
                        task.map((curTask) => {
                            return (<TodoList key={curTask.id} data={curTask.content}
                                checked={curTask.checked}
                                onHandleDeleteTodo={handleDeleteTodo}
                            onHandleCheckedTodo={HandleCheckedTodo}
                            />
                        )
                        })
                    }
                </ul>
            </section>
            <section>
                <button className="clear-btn" onClick={handleClearTodoData}>Clear All</button>
            </section>
        </section>
    )
}

