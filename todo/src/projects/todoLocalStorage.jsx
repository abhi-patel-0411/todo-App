const todoKey = "reactTodo";

export const getLocalStorageTodoData = () => {
    //  const rawTodos = localStorage.getItem(todoKey);
    //     if (!rawTodos) return [];
    //     return JSON.parse(rawTodos);
        try {
            const rawTodos = localStorage.getItem(todoKey);
            return rawTodos ? JSON.parse(rawTodos) : [];
        } catch (error) {
            console.error("Error parsing localStorage data:", error);
            return [];
        }
}
export const setLocalStorageTodoData = (task) => {
    return localStorage.setItem(todoKey, JSON.stringify(task));

       
}