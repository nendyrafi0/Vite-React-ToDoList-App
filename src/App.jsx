

function App() {
  return (
    <div className="p-4 text-gray-50 bg-gray-900 min-h-screen">
      <form className="new-item-form max-w-md mx-auto">
        <h1 className="text-3xl font-extrabold mb-6 text-center">ToDoList App</h1>
        <div className="form-row mb-6 flex flex-col">
          <label htmlFor="item" className="text-xl font-bold">New Item</label>
          <input type="text" id="item" className="mt-2 p-2 rounded-lg text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"/>
        </div>
        <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200">Add</button>
      </form>

      <h1 className="text-2xl font-bold mt-10 mb-4 text-center">ToDos</h1>
      <ul className="list ps-4 space-y-4 max-w-md mx-auto">
        <li className="flex items-center justify-between">
          <label htmlFor="checkbox" className="flex items-center">
            <input type="checkbox" name="checkbox" id="checkbox" className="appearance-none h-5 w-5 border-2 border-gray-300 rounded-full checked:bg-green-500 hover:border-gray-400"/>
            <span className="pl-3 font-medium">item 1</span>
          </label>
          <button className="text-white font-semibold px-3 py-1 rounded-lg bg-red-600 border border-red-700 hover:bg-red-700 hover:border-red-800 transition duration-200">Delete</button>
        </li>
        <li className="flex items-center justify-between">
          <label htmlFor="checkbox" className="flex items-center">
            <input type="checkbox" name="checkbox" id="checkbox" className="appearance-none h-5 w-5 border-2 border-gray-300 rounded-full checked:bg-green-500 hover:border-gray-400"/>
            <span className="pl-3 font-medium">item 2</span>
          </label>
          <button className="text-white font-semibold px-3 py-1 rounded-lg bg-red-600 border border-red-700 hover:bg-red-700 hover:border-red-800 transition duration-200">Delete</button>
        </li>
      </ul>

    </div>
  )
}

export default App
