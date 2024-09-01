import { useState } from "react"

export function NewTodoForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }

    return (
        <form className="new-item-form max-w-md mx-auto" onSubmit={handleSubmit}>
            <h1 className="text-3xl font-extrabold mb-4 text-center text-green-600 drop-shadow-md">
            ToDoList App
            </h1>
            <div className="form-row mb-6 flex flex-col">
                <label htmlFor="item" className="text-xl font-bold">
                    New Item
                </label>
                <input
                    type="text"
                    id="item"
                    className="mt-2 p-2 rounded-lg text-gray-900 border-4 border-gray-300 focus:border-gray-800"
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)}
                />
            </div>
            <button className="font-bold text-white border-b-4 border-x-2 border-blue-700 w-full py-2 bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-98 transition duration-200">
            Add
            </button>
        </form>
    )
}