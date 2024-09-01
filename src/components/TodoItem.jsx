export function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
    return (
        <li
            className="flex items-center justify-between p-4 border-2 border-b-4 border-gray-800 rounded-full">
            <label htmlFor="checkbox" className="flex items-center">
                <input
                    type="checkbox"
                    id="checkbox"
                    checked={completed}
                    onChange={e => toggleTodo(id, e.target.checked)}
                    className="appearance-none h-7 w-7 border-2 border-gray-500 rounded-full checked:bg-green-500 checked:border-green-700 checked:before:content-['✔️'] checked:before:text-white checked:before:text-center"
                />
                <span className="ps-4 font-medium" >{title}</span>
            </label>
            <button onClick={() => deleteTodo(id)} 
            className="text-white font-semibold px-3 py-1 rounded-full bg-red-600 border-b-4 border-x-2 border-red-700 hover:bg-red-700 hover:border-red-800 hover:scale-98 transition duration-200">
                Delete
            </button>
        </li>
    )
}